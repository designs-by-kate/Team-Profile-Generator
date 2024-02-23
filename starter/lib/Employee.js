class Employee {
    constructor(name, id, email) {
        this.validateName(name);
        this.validateId(id);
        this.validateEmail(email);

        this.name = name;
        this.id = id;
        this.email = email;
    }

    validateName() {
        if (typeof name !== 'string' || this.name.trim() == '') {
            throw new Error('Name must be a non-empty string.');
        }
    }

    validateId() {
        if (typeof id !== 'number' || isNaN(id) || id <= 0) {
            throw new Error('ID must be a positive number.');
        }
    }

    validateEmail() {
        // Basic email validation using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error('Invalid email format.');
        }
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;
