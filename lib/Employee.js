// Employee class definition
class Employee {
    // Constructor to initialize name, id, and email properties
    constructor(name, id, email) {
        // Assigning values to instance properties
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // Method to get the employee's name
    getName() {
        return this.name;
    }
    // Method to get the employee's ID
    getId() {
        return this.id;
    }
    // Method to get the employee's email
    getEmail() {
        return this.email;
    }
    // Method to get the role of the employee (default: 'Employee')
    getRole() {
        return 'Employee';
    }
}
// Exporting the Employee class for use in other files
module.exports = Employee;
