// Adding all the requirements
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');

// Working on constructor by adding their path 
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//this will take the recent file path and output the final destination path for the html
const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'index.html');
const render = require('./src/page-template.js');

// creating arrays for the team and id
const teamArray = [];
const idArray = [];

//Working on the function to start the application
 function init (){

    //this will start the application when user prompt to create the manager
    function addManager(){
        console.log("building team profile");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What's manager's name?",
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the manager's id?",
            },

            {
                type: 'input',
                name: 'managerEmail',
                message: "What's the manager's email?",
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "What's the manager's office number?",
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the manager's id?",
            },

        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            idArray.push(answers.managerId);
            addTeam();
        });
               

   

 }
 }
