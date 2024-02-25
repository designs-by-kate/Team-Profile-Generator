
// Importing the Employee class for inheritance
const Employee = require('./Employee');

// Intern class definition, extending the Employee class
class Intern extends Employee {
    // Constructor for initializing properties including those from the base class (Employee)
    constructor(name, id, email, school) {
        // Calling the constructor of the base class (Employee) using 'super'
        super(name, id, email);
        // Adding the specific property for Intern
        this.school = school;
    }
    // Method to get the intern's school
    getSchool() {
        return this.school;
    }
    // Overriding the getRole method from the base class to return 'Intern'
    getRole() {
        return 'Intern';
    }
}
// Exporting the Intern class for use in other files
module.exports = Intern;
