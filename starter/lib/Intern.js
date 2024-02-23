const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        // this.validateSchool();
    }

    // validateSchool() {
    //     if (typeof this.school !== 'string') {
    //         throw new Error('School must be a string.');
    //     }
    // }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;
