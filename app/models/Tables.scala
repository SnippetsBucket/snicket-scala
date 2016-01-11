package models
// AUTO-GENERATED Slick data model
/** Stand-alone Slick data model for immediate use */
object Tables extends {
  val profile = slick.driver.H2Driver
} with Tables

/** Slick data model trait for extension, choice of backend or usage in the cake pattern. (Make sure to initialize this late.) */
trait Tables {
  val profile: slick.driver.JdbcProfile
  import profile.api._
  import slick.model.ForeignKeyAction
  // NOTE: GetResult mappers for plain SQL are only generated for tables where Slick knows how to map the types of all columns.
  import slick.jdbc.{GetResult => GR}

  /** DDL for all tables. Call .create to execute. */
  lazy val schema: profile.SchemaDescription = SchemaVersion.schema ++ Snippets.schema ++ Users.schema
  @deprecated("Use .schema instead of .ddl", "3.0")
  def ddl = schema

  /** Entity class storing rows of table SchemaVersion
   *  @param versionRank Database column version_rank SqlType(INTEGER)
   *  @param installedRank Database column installed_rank SqlType(INTEGER)
   *  @param version Database column version SqlType(VARCHAR), PrimaryKey, Length(50,true)
   *  @param description Database column description SqlType(VARCHAR), Length(200,true)
   *  @param `type` Database column type SqlType(VARCHAR), Length(20,true)
   *  @param script Database column script SqlType(VARCHAR), Length(1000,true)
   *  @param checksum Database column checksum SqlType(INTEGER)
   *  @param installedBy Database column installed_by SqlType(VARCHAR), Length(100,true)
   *  @param installedOn Database column installed_on SqlType(TIMESTAMP)
   *  @param executionTime Database column execution_time SqlType(INTEGER)
   *  @param success Database column success SqlType(BOOLEAN) */
  case class SchemaVersionRow(versionRank: Int, installedRank: Int, version: String, description: String, `type`: String, script: String, checksum: Option[Int], installedBy: String, installedOn: java.sql.Timestamp, executionTime: Int, success: Boolean)
  /** GetResult implicit for fetching SchemaVersionRow objects using plain SQL queries */
  implicit def GetResultSchemaVersionRow(implicit e0: GR[Int], e1: GR[String], e2: GR[Option[Int]], e3: GR[java.sql.Timestamp], e4: GR[Boolean]): GR[SchemaVersionRow] = GR{
    prs => import prs._
    SchemaVersionRow.tupled((<<[Int], <<[Int], <<[String], <<[String], <<[String], <<[String], <<?[Int], <<[String], <<[java.sql.Timestamp], <<[Int], <<[Boolean]))
  }
  /** Table description of table schema_version. Objects of this class serve as prototypes for rows in queries.
   *  NOTE: The following names collided with Scala keywords and were escaped: type */
  class SchemaVersion(_tableTag: Tag) extends Table[SchemaVersionRow](_tableTag, "schema_version") {
    def * = (versionRank, installedRank, version, description, `type`, script, checksum, installedBy, installedOn, executionTime, success) <> (SchemaVersionRow.tupled, SchemaVersionRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = (Rep.Some(versionRank), Rep.Some(installedRank), Rep.Some(version), Rep.Some(description), Rep.Some(`type`), Rep.Some(script), checksum, Rep.Some(installedBy), Rep.Some(installedOn), Rep.Some(executionTime), Rep.Some(success)).shaped.<>({r=>import r._; _1.map(_=> SchemaVersionRow.tupled((_1.get, _2.get, _3.get, _4.get, _5.get, _6.get, _7, _8.get, _9.get, _10.get, _11.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column version_rank SqlType(INTEGER) */
    val versionRank: Rep[Int] = column[Int]("version_rank")
    /** Database column installed_rank SqlType(INTEGER) */
    val installedRank: Rep[Int] = column[Int]("installed_rank")
    /** Database column version SqlType(VARCHAR), PrimaryKey, Length(50,true) */
    val version: Rep[String] = column[String]("version", O.PrimaryKey, O.Length(50,varying=true))
    /** Database column description SqlType(VARCHAR), Length(200,true) */
    val description: Rep[String] = column[String]("description", O.Length(200,varying=true))
    /** Database column type SqlType(VARCHAR), Length(20,true)
     *  NOTE: The name was escaped because it collided with a Scala keyword. */
    val `type`: Rep[String] = column[String]("type", O.Length(20,varying=true))
    /** Database column script SqlType(VARCHAR), Length(1000,true) */
    val script: Rep[String] = column[String]("script", O.Length(1000,varying=true))
    /** Database column checksum SqlType(INTEGER) */
    val checksum: Rep[Option[Int]] = column[Option[Int]]("checksum")
    /** Database column installed_by SqlType(VARCHAR), Length(100,true) */
    val installedBy: Rep[String] = column[String]("installed_by", O.Length(100,varying=true))
    /** Database column installed_on SqlType(TIMESTAMP) */
    val installedOn: Rep[java.sql.Timestamp] = column[java.sql.Timestamp]("installed_on")
    /** Database column execution_time SqlType(INTEGER) */
    val executionTime: Rep[Int] = column[Int]("execution_time")
    /** Database column success SqlType(BOOLEAN) */
    val success: Rep[Boolean] = column[Boolean]("success")

    /** Index over (installedRank) (database name schema_version_ir_idx) */
    val index1 = index("schema_version_ir_idx", installedRank)
    /** Index over (success) (database name schema_version_s_idx) */
    val index2 = index("schema_version_s_idx", success)
    /** Index over (versionRank) (database name schema_version_vr_idx) */
    val index3 = index("schema_version_vr_idx", versionRank)
  }
  /** Collection-like TableQuery object for table SchemaVersion */
  lazy val SchemaVersion = new TableQuery(tag => new SchemaVersion(tag))

  /** Entity class storing rows of table Snippets
   *  @param snippetId Database column SNIPPET_ID SqlType(BIGINT), AutoInc, PrimaryKey
   *  @param snippetTitle Database column SNIPPET_TITLE SqlType(VARCHAR)
   *  @param snippetText Database column SNIPPET_TEXT SqlType(VARCHAR)
   *  @param userId Database column USER_ID SqlType(INTEGER)
   *  @param createdAt Database column CREATED_AT SqlType(TIMESTAMP)
   *  @param updatedAt Database column UPDATED_AT SqlType(TIMESTAMP) */
  case class SnippetsRow(snippetId: Long, snippetTitle: String, snippetText: String, userId: Int, createdAt: java.sql.Timestamp, updatedAt: java.sql.Timestamp)
  /** GetResult implicit for fetching SnippetsRow objects using plain SQL queries */
  implicit def GetResultSnippetsRow(implicit e0: GR[Long], e1: GR[String], e2: GR[Int], e3: GR[java.sql.Timestamp]): GR[SnippetsRow] = GR{
    prs => import prs._
    SnippetsRow.tupled((<<[Long], <<[String], <<[String], <<[Int], <<[java.sql.Timestamp], <<[java.sql.Timestamp]))
  }
  /** Table description of table SNIPPETS. Objects of this class serve as prototypes for rows in queries. */
  class Snippets(_tableTag: Tag) extends Table[SnippetsRow](_tableTag, "SNIPPETS") {
    def * = (snippetId, snippetTitle, snippetText, userId, createdAt, updatedAt) <> (SnippetsRow.tupled, SnippetsRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = (Rep.Some(snippetId), Rep.Some(snippetTitle), Rep.Some(snippetText), Rep.Some(userId), Rep.Some(createdAt), Rep.Some(updatedAt)).shaped.<>({r=>import r._; _1.map(_=> SnippetsRow.tupled((_1.get, _2.get, _3.get, _4.get, _5.get, _6.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column SNIPPET_ID SqlType(BIGINT), AutoInc, PrimaryKey */
    val snippetId: Rep[Long] = column[Long]("SNIPPET_ID", O.AutoInc, O.PrimaryKey)
    /** Database column SNIPPET_TITLE SqlType(VARCHAR) */
    val snippetTitle: Rep[String] = column[String]("SNIPPET_TITLE")
    /** Database column SNIPPET_TEXT SqlType(VARCHAR) */
    val snippetText: Rep[String] = column[String]("SNIPPET_TEXT")
    /** Database column USER_ID SqlType(INTEGER) */
    val userId: Rep[Int] = column[Int]("USER_ID")
    /** Database column CREATED_AT SqlType(TIMESTAMP) */
    val createdAt: Rep[java.sql.Timestamp] = column[java.sql.Timestamp]("CREATED_AT")
    /** Database column UPDATED_AT SqlType(TIMESTAMP) */
    val updatedAt: Rep[java.sql.Timestamp] = column[java.sql.Timestamp]("UPDATED_AT")
  }
  /** Collection-like TableQuery object for table Snippets */
  lazy val Snippets = new TableQuery(tag => new Snippets(tag))

  /** Entity class storing rows of table Users
   *  @param userId Database column USER_ID SqlType(INTEGER), AutoInc, PrimaryKey
   *  @param userName Database column USER_NAME SqlType(VARCHAR), Length(100,true)
   *  @param email Database column EMAIL SqlType(VARCHAR), Length(100,true)
   *  @param password Database column PASSWORD SqlType(VARCHAR), Length(40,true)
   *  @param userFirstName Database column USER_FIRST_NAME SqlType(VARCHAR), Length(100,true)
   *  @param userLastName Database column USER_LAST_NAME SqlType(VARCHAR), Length(100,true)
   *  @param administrator Database column ADMINISTRATOR SqlType(BOOLEAN), Default(false)
   *  @param thumbnail Database column THUMBNAIL SqlType(VARCHAR), Length(255,true)
   *  @param githubAccount Database column GITHUB_ACCOUNT SqlType(VARCHAR), Length(100,true)
   *  @param twitterAccount Database column TWITTER_ACCOUNT SqlType(VARCHAR), Length(100,true)
   *  @param createdAt Database column CREATED_AT SqlType(TIMESTAMP)
   *  @param updatedAt Database column UPDATED_AT SqlType(TIMESTAMP)
   *  @param removed Database column REMOVED SqlType(BOOLEAN), Default(false) */
  case class UsersRow(userId: Int, userName: String, email: String, password: String, userFirstName: Option[String], userLastName: Option[String], administrator: Boolean = false, thumbnail: Option[String], githubAccount: Option[String], twitterAccount: Option[String], createdAt: java.sql.Timestamp, updatedAt: java.sql.Timestamp, removed: Boolean = false)
  /** GetResult implicit for fetching UsersRow objects using plain SQL queries */
  implicit def GetResultUsersRow(implicit e0: GR[Int], e1: GR[String], e2: GR[Option[String]], e3: GR[Boolean], e4: GR[java.sql.Timestamp]): GR[UsersRow] = GR{
    prs => import prs._
    UsersRow.tupled((<<[Int], <<[String], <<[String], <<[String], <<?[String], <<?[String], <<[Boolean], <<?[String], <<?[String], <<?[String], <<[java.sql.Timestamp], <<[java.sql.Timestamp], <<[Boolean]))
  }
  /** Table description of table USERS. Objects of this class serve as prototypes for rows in queries. */
  class Users(_tableTag: Tag) extends Table[UsersRow](_tableTag, "USERS") {
    def * = (userId, userName, email, password, userFirstName, userLastName, administrator, thumbnail, githubAccount, twitterAccount, createdAt, updatedAt, removed) <> (UsersRow.tupled, UsersRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = (Rep.Some(userId), Rep.Some(userName), Rep.Some(email), Rep.Some(password), userFirstName, userLastName, Rep.Some(administrator), thumbnail, githubAccount, twitterAccount, Rep.Some(createdAt), Rep.Some(updatedAt), Rep.Some(removed)).shaped.<>({r=>import r._; _1.map(_=> UsersRow.tupled((_1.get, _2.get, _3.get, _4.get, _5, _6, _7.get, _8, _9, _10, _11.get, _12.get, _13.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column USER_ID SqlType(INTEGER), AutoInc, PrimaryKey */
    val userId: Rep[Int] = column[Int]("USER_ID", O.AutoInc, O.PrimaryKey)
    /** Database column USER_NAME SqlType(VARCHAR), Length(100,true) */
    val userName: Rep[String] = column[String]("USER_NAME", O.Length(100,varying=true))
    /** Database column EMAIL SqlType(VARCHAR), Length(100,true) */
    val email: Rep[String] = column[String]("EMAIL", O.Length(100,varying=true))
    /** Database column PASSWORD SqlType(VARCHAR), Length(40,true) */
    val password: Rep[String] = column[String]("PASSWORD", O.Length(40,varying=true))
    /** Database column USER_FIRST_NAME SqlType(VARCHAR), Length(100,true) */
    val userFirstName: Rep[Option[String]] = column[Option[String]]("USER_FIRST_NAME", O.Length(100,varying=true))
    /** Database column USER_LAST_NAME SqlType(VARCHAR), Length(100,true) */
    val userLastName: Rep[Option[String]] = column[Option[String]]("USER_LAST_NAME", O.Length(100,varying=true))
    /** Database column ADMINISTRATOR SqlType(BOOLEAN), Default(false) */
    val administrator: Rep[Boolean] = column[Boolean]("ADMINISTRATOR", O.Default(false))
    /** Database column THUMBNAIL SqlType(VARCHAR), Length(255,true) */
    val thumbnail: Rep[Option[String]] = column[Option[String]]("THUMBNAIL", O.Length(255,varying=true))
    /** Database column GITHUB_ACCOUNT SqlType(VARCHAR), Length(100,true) */
    val githubAccount: Rep[Option[String]] = column[Option[String]]("GITHUB_ACCOUNT", O.Length(100,varying=true))
    /** Database column TWITTER_ACCOUNT SqlType(VARCHAR), Length(100,true) */
    val twitterAccount: Rep[Option[String]] = column[Option[String]]("TWITTER_ACCOUNT", O.Length(100,varying=true))
    /** Database column CREATED_AT SqlType(TIMESTAMP) */
    val createdAt: Rep[java.sql.Timestamp] = column[java.sql.Timestamp]("CREATED_AT")
    /** Database column UPDATED_AT SqlType(TIMESTAMP) */
    val updatedAt: Rep[java.sql.Timestamp] = column[java.sql.Timestamp]("UPDATED_AT")
    /** Database column REMOVED SqlType(BOOLEAN), Default(false) */
    val removed: Rep[Boolean] = column[Boolean]("REMOVED", O.Default(false))

    /** Uniqueness Index over (userName) (database name CONSTRAINT_INDEX_4) */
    val index1 = index("CONSTRAINT_INDEX_4", userName, unique=true)
    /** Uniqueness Index over (email) (database name CONSTRAINT_INDEX_4D) */
    val index2 = index("CONSTRAINT_INDEX_4D", email, unique=true)
  }
  /** Collection-like TableQuery object for table Users */
  lazy val Users = new TableQuery(tag => new Users(tag))
}
