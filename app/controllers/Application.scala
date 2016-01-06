package controllers

import play.api._
import play.api.mvc._

class Application extends Controller {

  def index = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def addIndexAt(path: String, file: String) = {
    controllers.Assets.at(path, file + "/index.html")
  }

  def at(path: String, file: String) = {
    val asset = controllers.Assets.at(path, file)
    asset
  }

  def codegen = Action {
    val slickDriver = "slick.driver.H2Driver"
    val jdbcDriver = "org.h2.Driver"
    val url = "jdbc:h2:file:./db/data;MODE=MYSQL"
    val outputDir = "app"
    val pkg = "models"
    val user = "sa"
    val password = "sa"

    slick.codegen.SourceCodeGenerator.main(
      Array(slickDriver, jdbcDriver, url, outputDir, pkg, user, password)
    )

    Ok("finished codegen")
  }

}
