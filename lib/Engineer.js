// This class inherits from the Employee file that is why we must require it
const Employee = require('./Employee');

// This class will add on to the Employee class I created
class Engineer extends Employee {
    constructor (name, id, email, github) {

        // Super keyword is used to access and call functions on an objects parent.
        // In this case it is Employee
        super(name, id, email)
        
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;