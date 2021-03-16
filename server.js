const mysql = require('mysql2/promise');
const inquirer = require('inquirer');
const { async } = require('rxjs');



(async () => {
    const viewAll = (connection) => {
        await inquirer.prompt({
            name: 'viewAll',
            type: 'input',
            message: 'View All Employees'
        })
    };

    const allDepartment = () => {

    };

    const allManager = async () => {
        //make sure they return a promise
        //await connection.query
    };

    const addEmployee = () => {

    };

    let connection;
    try {
        connection = await mysql.createConnection({
            host: 'localhost',

            port: '3306',

            user: 'root',

            password: 'Broccoli2016!',
            database: 'employee_trackDB',
        });
        let isRunning = true;
        while (isRunning) {
            const answers = await inquirer.prompt({
                name: 'action',
                type: 'list',
                message: 'What would you like to do?',
                choices: [
                    'View All Employees',
                    'View All Employees By Department',
                    'View All Employees By Manager',
                    'Add Employee',
                    'Remove Employee',
                    'Update Employee Role',
                    'Update Employee Manager',
                    'Exit',
                ]
            });
            switch (answer.action) {

                case 'View All Employees':
                    viewAll(connection);
                    break;

                case 'View All Employees By Department':
                    break;

                case 'View All Employees By Manager':
                    break;

                case 'Add Employee':
                    break;

                case 'Remove Employee':
                    break;

                case 'Update Employee Role':
                    break;

                case 'Update Employee Manager':
                    break;

                case 'Exit':
                    isRunning = false;
                    break;

                default:
                    break;
            }
            console.log(answers);
        }
    } catch (error) {
        console.error(error);
    } finally {
        connection?.end();
    }
})();






