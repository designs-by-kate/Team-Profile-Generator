const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.validateGitHub();
    }

    validateGitHub() {
        // This validation assumes any string is valid
        if (typeof this.github !== 'string') {
            throw new Error('GitHub username must be a string.');
        }
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;
