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

const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'index.html');
const render = require('./src/page-template.js');