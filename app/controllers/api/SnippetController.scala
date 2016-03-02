package controllers.api

import javax.inject.Inject
import play.api._
import play.api.i18n.{I18nSupport, MessagesApi}
import play.api.mvc._
import play.api.libs.json.{JsError, Json, Writes, Reads}
import play.api.db.slick._
import slick.driver.H2Driver.api._
import slick.driver.JdbcProfile
import models.Tables._
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

object SnippetController {

  case class SnippetForm(title: String, text: String)
  implicit val snippetFormRead = Json.reads[SnippetForm]

  case class SnippetUpdateForm(id: Long, title: String, text: String)
  implicit val snippetUpdateFormRead = Json.reads[SnippetUpdateForm]

  case class Snippet(id: Long, title: String, text: String, userId: Int, createdAt: java.sql.Timestamp, updatedAt: java.sql.Timestamp)
  implicit val snippetWrites = Json.writes[Snippet]

  case class ResultList(code: Int, list: Seq[Snippet])
  implicit val resultListWrites = Json.writes[ResultList]

  case class ResultItem(code: Int, snippetInfo: Snippet)
  implicit val resultItemWrites = Json.writes[ResultItem]

}

class SnippetController @Inject()(val dbConfigProvider: DatabaseConfigProvider, val messagesApi: MessagesApi)
  extends Controller with HasDatabaseConfigProvider[JdbcProfile] with I18nSupport {

  import SnippetController._

  def list = Action.async { implicit rs =>
    db.run(Snippets.result).map { snippets =>
      val snippetList = snippets.map { snippet =>
        Snippet(snippet.snippetId, snippet.snippetTitle, snippet.snippetText, snippet.userId, snippet.createdAt, snippet.updatedAt)
      }
      Ok(Json.toJson(ResultList(0, snippetList)))
    }
  }

  def create = Action.async(parse.json) { implicit rs =>
    rs.body.validate[SnippetForm].map { form =>
      val nowTime = new java.sql.Timestamp(System.currentTimeMillis())
      val snippet = SnippetsRow(0, form.title, form.text, 1, nowTime, nowTime)
      db.run(Snippets += snippet).map { _ =>
        Ok(Json.obj("code" -> 0, "result" -> "success"))
      }
    }.recoverTotal { e =>
      Future {
        BadRequest(Json.obj("code" -> 1, "result" -> "failure", "error" -> JsError.toJson(e)))
      }
    }
  }

  def item(id: Long) = Action.async { implicit rs =>
    val result = db.run(Snippets.filter(_.snippetId === id).result.headOption)
    result.map { snippet =>
      val item = Snippet(snippet.get.snippetId, snippet.get.snippetTitle, snippet.get.snippetText, snippet.get.userId, snippet.get.createdAt, snippet.get.updatedAt)
      Ok(Json.toJson(ResultItem(0, item)))
    }
  }

  def update = Action.async(parse.json) { implicit rs =>
    rs.body.validate[SnippetUpdateForm].map { form =>
      val nowTime = new java.sql.Timestamp(System.currentTimeMillis())
      val snippet = SnippetsRow(form.id, form.title, form.text, 1, nowTime, nowTime)
      db.run(Snippets.filter(r => r.snippetId === snippet.snippetId).update(snippet)).map { _ =>
        Ok(Json.obj("code" -> 0, "result" -> "success"))
      }
    }.recoverTotal { e =>
      Future {
        BadRequest(Json.obj("code" -> 1, "result" -> "failure", "error" -> JsError.toJson(e)))
      }
    }
  }

  def remove(id: Long) = Action.async { implicit rs =>
    db.run(Snippets.filter(r => r.snippetId === id).delete).map { _ =>
      Ok(Json.obj("code" -> 0, "result" -> "success"))
    }
  }

}
