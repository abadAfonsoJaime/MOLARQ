CREATE TABLE sites(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NULL,
  descriptionShort VARCHAR(50) NULL,
  descriptionLong VARCHAR(300) NULL,
  latitude VARCHAR(10) NULL,
  longitude VARCHAR(10) NULL,
  region VARCHAR(20) NULL,
  crono VARCHAR(20) NULL,
  userID VARCHAR(10) NULL,
  validate TINYINT NULL
);