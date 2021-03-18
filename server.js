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


