CREATE DATABASE bugsmanager;

USE bugsmanager;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  surname VARCHAR(50) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (name)
);

CREATE TABLE projects (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE bugs (
  id INT NOT NULL AUTO_INCREMENT,
  description TEXT NOT NULL,
  projectId INT NOT NULL,
  user VARCHAR(50) NOT NULL,
  creationDate DATETIME NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (projectId) REFERENCES projects(id),
  FOREIGN KEY (user) REFERENCES users(name)
);

-- Insertar usuarios
INSERT INTO users (name, surname)
VALUES ('Usuario1', 'Apellido1'),
       ('Usuario2', 'Apellido2'),
       ('Usuario3', 'Apellido3'),
       ('Usuario4', 'Apellido4'),
       ('Usuario5', 'Apellido5');

-- Insertar proyectos
INSERT INTO projects (name, description)
VALUES ('Proyecto1', 'Descripción del proyecto 1'),
       ('Proyecto2', 'Descripción del proyecto 2'),
       ('Proyecto3', 'Descripción del proyecto 3'),
       ('Proyecto4', 'Descripción del proyecto 4'),
       ('Proyecto5', 'Descripción del proyecto 5');