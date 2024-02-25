// Importing the Employee class for inheritance
const Employee = require('./Employee');

// Manager class definition, extending the Employee class
class Manager extends Employee {
    // Constructor for initializing properties including those from the base class (Employee)
    constructor(name, id, email, officeNumber) {
        // Calling the constructor of the base class (Employee) using 'super'
        super(name, id, email);
        // Adding the specific property for Manager
        this.officeNumber = officeNumber;
    }

    // Method to get the manager's office number
    getOfficeNumber(){
        return this.officeNumber;
    }

    // Overriding the getRole method from the base class to return 'Manager'
    getRole() {
        return 'Manager';
    }
}
// Exporting the Manager class for use in other files
module.exports = Manager;
