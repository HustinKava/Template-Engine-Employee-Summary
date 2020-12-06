// This class inherits from the Employee file that is why we must require it
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNo) {

        super(name, id, email);

        this.officeNumber = officeNo;
    }

    getOfficeNo() {
        return this.officeNumber;
    }

    getPosition() {
        return 'Manager';
    }
};

module.exports = Manager;