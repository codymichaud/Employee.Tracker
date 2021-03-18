DROP DATABASE IF EXISTS employee_trackDB;

CREATE DATABASE employee_trackDB;

USE employee_trackDB;

CREATE TABLE employee (
id INT AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT,
PRIMARY KEY (id)
);

CREATE TABLE department (
id INT AUTO_INCREMENT, 
name VARCHAR(30),
PRIMARY KEY (id)
);

CREATE TABLE roles (
id INT AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL,
department_id INT,
PRIMARY KEY (id)
);

SELECT * FROM employee;
SELECT * FROM department;
SELECT * FROM roles;


SELECT name, title, salary
FROM roles
INNER JOIN department ON roles.department_id = department.id

SELECT name, title, salary
FROM roles
INNER JOIN department ON roles.department_id = department.id;
