USE employee_trackDB;

--Setting Departments

INSERT INTO department (id, name)
VALUES (1, "Engineering");

INSERT INTO department (id, name)
VALUES (2, "Development");

INSERT INTO department (id, name)
VALUES (3, "Graphics");

INSERT INTO department (id, name)
VALUES (4, "Testing");

--Engineering

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Sr. Software Engineer", 150000, 1)

INSERT INTO roles (id, title, salary, department_id)
VALUES (2, "Jr. Software Engineer", 80000, 1)

INSERT INTO roles (id, title, salary, department_id)
VALUES (3, "Web Engineer", 80000, 1)

INSERT INTO roles (id, title, salary, department_id)
VALUES (4, "Intern", 40000, 1)

--Development

INSERT INTO roles (id, title, salary, department_id)
VALUES (5, "Full Stack Developer", 95000, 2)

INSERT INTO roles (id, title, salary, department_id)
VALUES (6, "Front End Developer", 95000, 2)

INSERT INTO roles (id, title, salary, department_id)
VALUES (7, "Back End Developer", 95000, 2)

--Graphics

INSERT INTO roles (id, title, salary, department_id)
VALUES (8, "Sr. Graphic Artist", 73000, 3)

INSERT INTO roles (id, title, salary, department_id)
VALUES (9, "Sr. Graphic Artist", 73000, 3)

INSERT INTO roles (id, title, salary, department_id)
VALUES (10, "Jr. Graphic Artist", 45000, 3)

INSERT INTO roles (id, title, salary, department_id)
VALUES (11, "Jr. Graphic Artist", 45000, 3)

--Testing

INSERT INTO roles (id, title, salary, department_id)
VALUES (12, "Sr. Web Tester", 50000, 4)

INSERT INTO roles (id, title, salary, department_id)
VALUES (13, "Sr. Web Tester", 50000, 4)

INSERT INTO roles (id, title, salary, department_id)
VALUES (14, "Jr. Web Tester", 35000, 4)

INSERT INTO roles (id, title, salary, department_id)
VALUES (15, "Jr. Web Tester", 35000, 4)



--Creating Employees

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Cody", "Michaud", 3, 1)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Shea", "Murrays", 5, null)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Adam", "Ledoux", 7, null)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Jacob", "Meeks", 9, null)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Josh", "Graham", 1, 6)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Kayden", "Orfield", 2, null)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Rebecca", "Orfield", 4, 2)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (8, "Cole", "Smith", 6, 4)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (9, "Tony", "Anderson", 8, 4)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (10, "Sam", "Stills", 8, 4)