const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
// Check if the "output" directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    // If not, create it
    fs.mkdirSync(OUTPUT_DIR);
}

const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


const teamMembers = [];

function promptManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the manager's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the manager's employee ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the manager's email address:",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the manager's office number:",
        }
    ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            teamMembers.push(manager);
            promptMenu();
        });
}

function promptMenu() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "menuOption",
                message: "What would you like to do next?",
                choices: ["Add an engineer", "Add an intern", "Finish building the team"],
            },
        ])
        .then((answers) => {
            switch (answers.menuOption) {
                case "Add an engineer":
                    promptEngineer();
                    break;
                case "Add an intern":
                    promptIntern();
                    break;
                case "Finish building the team":
                    generateHTML();
                    break;
            }
        });
}

function promptEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the engineer's name:",
            },
            {
                type: "input",
                name: "id",
                message: "Enter the engineer's employee ID:",
            },
            {
                type: "input",
                name: "email",
                message: "Enter the engineer's email address:",
            },
            {
                type: "input",
                name: "github",
                message: "Enter the engineer's GitHub username:",
            },
        ])
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamMembers.push(engineer);
            promptMenu();
        });
}

function promptIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the intern's name:",
            },
            {
                type: "input",
                name: "id",
                message: "Enter the intern's employee ID:",
            },
            {
                type: "input",
                name: "email",
                message: "Enter the intern's email address:",
            },
            {
                type: "input",
                name: "school",
                message: "Enter the intern's school:",
            },
        ])
        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamMembers.push(intern);
            promptMenu();
        });
}

function generateHTML() {
    const htmlContent = render(teamMembers);
    fs.writeFileSync(outputPath, htmlContent);
    console.log(`Team HTML generated successfully at ${outputPath}`);
}

// Start the application by prompting for the manager's details
promptManager();

