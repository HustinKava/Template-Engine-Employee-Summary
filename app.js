// Constructor files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Inquirer, path and file system are all node built in modules
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Directory name will be output and the file will be named team.html stored in output folder
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Created an empty array that will store all the team members as objects
const teamMembers = [];

//  Wrapped the inquirer prompt in a function to be able to call it again based on if the user wants more team members
const teamQuestions = () => {
inquirer
    .prompt([{
        type: 'list',
        name: 'role',
        message: 'What role do you pick?',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your name',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'You need to enter your name';
            }
        }
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
        when: (response) => response.role === 'Manager',
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
        when: (response) => response.role === 'Engineer',
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
        message: 'Please enter your school name',
        when: (response) => response.role === 'Intern',
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
        message: 'Would you like to add another team member?',
    }
    ]).then (response => {

        // If statements to check to see what role was picked
        if (response.role === 'Manager') {
            
            // Depending on role I create a new instance of a manager, intern or engineer
            // I pass the name, id, email and role specific responses as parameters
            const NewManager = new Manager(response.name, response.id, response.email, response.officeNumber);

            // Then I push the newly created object to my empty array at the top
            teamMembers.push(NewManager);

        } else if (response.role === 'Engineer') {
            
            const NewEngineer = new Engineer(response.name, response.id, response.email, response.github);

            teamMembers.push(NewEngineer);

        } else if (response.role === 'Intern') {

            const NewIntern = new Intern(response.name, response.id, response.email, response.school);

            teamMembers.push(NewIntern);
        }

        // If the user selected yes to add more members then we execute the teamQuestions functions again
        if (response.moreTeamMembers) {

            teamQuestions()
        
        // Else if the user selected no more team members to add then I begin the process of writing to a document
        } else {

                //  Here is where I write the file passing 3 parameters. 
                // 1 outputPath variable (declared at the top)
                // 2 rednder function and passing teamMembers varaible into it
                // 3 logging any errors that have occured else console logging a success message
                fs.writeFile(outputPath, render(teamMembers), function(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('EMPLOYEE SUMMARY SUCCESSFULLY CREATED!')
                    }
                })
        }
    }) 
};

teamQuestions();
