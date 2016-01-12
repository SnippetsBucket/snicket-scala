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

  case class Snippet(title: String, text: String)
  implicit val snippetWrites = Json.writes[Snippet]

  case class ResultList(code: Int, list: Seq[Snippet])
  implicit val resultListWrites = Json.writes[ResultList]

}

class SnippetController @Inject()(val dbConfigProvider: DatabaseConfigProvider, val messagesApi: MessagesApi)
  extends Controller with HasDatabaseConfigProvider[JdbcProfile] with I18nSupport{

  import SnippetController._

  def list = Action.async { implicit rs =>
    db.run(Snippets.result).map { snippets =>
      val snippetList = snippets.map { snippet =>
        Snippet(snippet.snippetTitle, snippet.snippetText)
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
        BadRequest(Json.obj("code" -> 1, "result" ->"failure", "error" -> JsError.toJson(e)))
      }
    }
  }

}
