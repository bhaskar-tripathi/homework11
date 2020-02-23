### Schema

USE r79keivn0uoaexre;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured boolean,
	PRIMARY KEY (id)
);
