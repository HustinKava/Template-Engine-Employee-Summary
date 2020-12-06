// Constructor files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Inquirer, path and file system are all node built in modules
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];

inquirer
    .prompt([{
        type: 'list',
        name: 'role',
        message: 'What role do you pick?',
        choices: ['Manager', 'Engineer', 'Intern'],
        // when : (response) => response.moreTeamMembers === true
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter your id number',
        validate: (value) => {
            if (isNaN(value)) {
                return 'You need to enter a valid id number';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'You need to enter a valid email address';
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter your office number',
        when : (response) => response.role === 'Manager',
        validate: (value) => {
            if (isNaN(value)) {
                return 'You need to enter a valid office number';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username',
        when : (response) => response.role === 'Engineer',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'You need to enter a valid github username';
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'Please enter your office number',
        when : (response) => response.role === 'Intern',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'You need to enter a valid school name';
            }
        }
    },
    {
        type: 'confirm',
        name: 'moreTeamMembers',
        message: 'Would you like to add another team member?'
    }
    ]);

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
