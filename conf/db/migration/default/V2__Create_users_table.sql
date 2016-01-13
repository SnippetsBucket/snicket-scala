CREATE TABLE users (
  user_id int(11) NOT NULL AUTO_INCREMENT,
  user_name varchar(100) NOT NULL UNIQUE,
  email varchar(100) NOT NULL UNIQUE,
  password varchar(40) NOT NULL,
  user_first_name varchar(100),
  user_last_name varchar(100),
  administrator boolean NOT NULL DEFAULT FALSE,
  thumbnail varchar(255),
  github_account varchar(100),
  twitter_account varchar(100),
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  removed boolean NOT NULL DEFAULT FALSE,
  PRIMARY KEY (user_id)
);
