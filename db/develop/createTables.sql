// create tables for H2 database

CREATE TABLE snippets (
  snippet_id IDENTITY NOT NULL AUTO_INCREMENT,
  snippet_title varchar(500)  NOT NULL,
  snippet_text text  NOT NULL,
  user_id int(11) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`snippet_id`)
);

INSERT INTO SNIPPETS (
  SNIPPET_ID,
  SNIPPET_TITLE,
  SNIPPET_TEXT,
  USER_ID,
  CREATED_AT,
  UPDATED_AT
) VALUES (
  1,
  'Implements of ToDo List',
  '## Lets Implements of ToDo List\r\n\r\nトップページがデフォルトのウェルカムページのままなので自作の画面に差し替えます。\r\n\r\nまずコントローラーを作成する必要があるので作成しましょう。\r\n\r\n"""shell\r\nphp artisan make:controller TodoController\r\n"""',
  1,
  SYSDATE,
  SYSDATE
);