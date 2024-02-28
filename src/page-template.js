// Function to generate the HTML content for the entire team
const generateTeam = team => {

    // Function to generate HTML for the manager
    const generateManager = manager => {
        return `
        <div class="card col-lg-2 col-md-4 col-sm-12 mb-4 employee-card">
            <div class="card-header managerHeader">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title managerTitle"><i class="fas fa-mug-hot mr-2 managerIcon"></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body managerBody">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    // Function to generate HTML for an engineer
    const generateEngineer = engineer => {
        return `
        <div class="card col-lg-2 col-md-4 col-sm-12 mb-4 employee-card">
            <div class="card-header engineerHeader">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title engineerTitle"><i class="fas fa-glasses mr-2 engineerIcon"></i>${engineer.getRole()}</h3>
            </div>
            <div class="card-body engineerBody">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        `;
    };

    // Function to generate HTML for an intern
    const generateIntern = intern => {
        return `
        <div class="card col-lg-2 col-md-4 col-sm-12 mb-4 employee-card">
            <div class="card-header internHeader">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title internTitle"><i class="fas fa-user-graduate mr-2 internIcon"></i>${intern.getRole()}</h3>
            </div>
            <div class="card-body internBody">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;
    };
    // Array to store generated HTML
    const html = [];
    // Push manager HTML to the array
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    // Push engineer HTML to the array
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    // Push intern HTML to the array
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );
    // Join all HTML elements and return
    return html.join("");

}

// Exporting the function to generate the entire HTML page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="../assets/style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex flex-wrap justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};