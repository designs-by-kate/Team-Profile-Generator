// Importing required modules and classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Defining the output directory path
const OUTPUT_DIR = path.resolve(__dirname, "output");
// Check if the "output" directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    // If not, create it
    fs.mkdirSync(OUTPUT_DIR);
}

// Defining the output HTML file path
const outputPath = path.join(OUTPUT_DIR, "team.html");
// Importing the render function to generate HTML content
const render = require("./src/page-template.js");

// Array to store team members
const teamMembers = [];

// Function to prompt for manager's details
function promptManager() {
    inquirer.prompt([
        // Manager details questions
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
            // Create Manager object with provided details
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            // Add Manager to the teamMembers array
            teamMembers.push(manager);
            // Move on to the menu for further actions
            promptMenu();
        });
}

// Function to prompt user for next action
function promptMenu() {
    inquirer
        .prompt([
            // Menu options
            {
                type: "list",
                name: "menuOption",
                message: "What would you like to do next?",
                choices: ["Add an engineer", "Add an intern", "Finish building the team"],
            },
        ])
        .then((answers) => {
            // Based on user's choice, call respective functions
            switch (answers.menuOption) {
                case "Add an engineer":
                    promptEngineer();
                    break;
                case "Add an intern":
                    promptIntern();
                    break;
                case "Finish building the team":
                    // Generate HTML and finish the application
                    generateHTML();
                    break;
            }
        });
}
// Function to prompt user for engineer's details
function promptEngineer() {
    inquirer
        .prompt([
            // Engineer details questions
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
            // Create Engineer object with provided details
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            // Add Engineer to the teamMembers array
            teamMembers.push(engineer);
            // Move back to the menu for further actions
            promptMenu();
        });
}
// Function to prompt user for intern's details
function promptIntern() {
    inquirer
        .prompt([
            // Intern details questions
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
            // Create Intern object with provided details
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            // Add Intern to the teamMembers array
            teamMembers.push(intern);
            // Move back to the menu for further actions
            promptMenu();
        });
}
// Function to generate HTML using the render function and write it to a file
function generateHTML() {
    const htmlContent = render(teamMembers);
    fs.writeFileSync(outputPath, htmlContent);
    console.log(`Team HTML generated successfully at ${outputPath}`);
}

// Start the application by prompting for the manager's details
promptManager();

