const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

//Creating Database connection

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Broccoli2016!',
    database: 'employee_trackDB'
});

connection.connect((error) => {
    if (error) throw error;
    startPrompt();
});

function startPrompt() {
    inquirer.prompt([{
        type: 'list',
        message: 'What would you like to do?',
        name: 'choice',
        choices: [
            'View All Employees',
            'View All Employees By Department',
            'View All Employees By Manager',
            'Add Employee',
            'Update Employee'
        ]
    }]).then((answers) => {
        switch (answers.choice) {
            case 'View All Employees':
                viewAll();
                break;

            case 'View All Employees By Department':
                viewDepart();
                break;

            case 'View All Employees By Manager':
                viewManager();
                break;

            case 'Add Employee':
                addEmployee();
                break;

            case 'Update Employee':
                updateEmployee();
                break;

            default:
                break;
        }
    });
};

const roleArray = [];
function getRole() {
    connection.query('SELECT * FROM roles', (error, res) => {
        if (error) throw error;
        for (i = 0; i < res.length; i++) {
            roleArray.push(res[i].title);
        }
    })
    return roleArray;
};

const managerArray = [];

function getManager() {
    connection.query('SELECT first_name, last_name FROM employee WHERE manager_id IS NULL', (error, res) => {
        if (error) throw error;
        for (i = 0; i < res.length; i++) {
            managerArray.push(res[i].first_name);
        }
    })
    return managerArray;
};

function addEmployee() {
    inquirer.prompt([{
        name: 'firstName',
        type: 'input',
        message: 'What is the employees first name?'
    },
    {
        name: 'lastName',
        type: 'input',
        message: 'What is the employees last name?'
    },
    {
        name: 'role',
        input: 'list',
        message: 'What is the employees role?',
        choices: getRole()
    },
    {
        name: 'choice',
        type: 'rawlist',
        message: 'What is the Managers name?',
        choices: getManager()
    }]).then((answers) => {
        const rolesId = getRole().indexOf(answers.role) + 1;
        const managerId = getManager().indexOf(answers.choice) + 1;
        connection.query('INSERT INTO employee SET ?', {
            first_name: answers.firstName,
            last_name: answers.lastName,
            role_id: rolesId,
            manager_id: managerId
        }, (error) => {
            if (error) throw error;
            console.table(answers);
            startPrompt();
        });
    });
};

function viewAll() {
    connection.query('SELECT employee.first_name, employee.last_name, roles.title, roles.salary, department.name, CONCAT(e.first_name, " ", e.last_name) AS manager FROM employee INNER JOIN roles ON roles.id = employee.role_id INNER JOIN department ON department.id = roles.department_id LEFT JOIN employee e ON employee.manager_id = e.id;', (error, res) => {
        if (error) throw error;
        console.table(res);
        startPrompt();
    })
}
