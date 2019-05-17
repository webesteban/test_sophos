create database test_sophos;


CREATE TABLE `test_sophos`.`users` (
  `id` INT NOT NULL,
  `firstname` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `email` VARCHAR(100) NULL,
  `user` VARCHAR(45) NULL,
  `is_active` TINYINT NULL,
  PRIMARY KEY (`id`));
