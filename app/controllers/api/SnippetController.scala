package controllers.api

import controllers.api.SnippetController.{ResultList, Snippet}
import play.api._
import play.api.mvc._
import play.api.libs.json.{Json, Writes, Reads}
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

object SnippetController {

  case class Snippet(title: String, text: String)
  implicit val snippetWrites = Json.writes[Snippet]

  case class ResultList(code: Int, list: List[Snippet])
  implicit val resultListWrites = Json.writes[ResultList]

}

class SnippetController extends Controller {

  def list() = Action.async { implicit rs =>
    val sql = """select * from snippets"""
    val snippetList = List(Snippet("first snippet", "first snippet detail"), Snippet("second snippet", "second snippet detail"), Snippet("third snippet", "third snippet detail"))
    Future {
      Ok(Json.toJson(ResultList(1, snippetList)))
    }
  }

}
