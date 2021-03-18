const mysql = require('mysql2/promise');
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
        for ()
    })
}
