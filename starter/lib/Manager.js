const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        // this.validateOfficeNumber();
    }

    // validateOfficeNumber() {
    //     if (typeof this.officeNumber !== 'number' || isNaN(this.officeNumber)) {
    //         throw new Error('Office number must be a valid number.');
    //     }
    // }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;
