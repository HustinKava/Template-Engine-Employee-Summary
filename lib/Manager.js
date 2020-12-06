// This class inherits from the Employee file that is why we must require it
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;