// Importing the Employee class for inheritance
const Employee = require('./Employee');

// Engineer class definition, extending the Employee class
class Engineer extends Employee {
    // Constructor for initializing properties including those from the base class (Employee)
    constructor(name, id, email, github) {
        // Calling the constructor of the base class (Employee) using 'super'
        super(name, id, email);
        // Adding the specific property for Engineer
        this.github = github;
    }

    // Method to get the engineer's GitHub username
    getGithub() {
        return this.github;
    }
    // Overriding the getRole method from the base class to return 'Engineer'
    getRole() {
        return 'Engineer';
    }
}
// Exporting the Engineer class for use in other files
module.exports = Engineer;
