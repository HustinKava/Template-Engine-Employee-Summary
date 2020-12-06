// This class inherits from the Employee file that is why we must require it
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email) 

        this.school = school;
    }

    getSchool () {
        return this.school;
    }

    getPosition() {
        return 'Intern';
    }
};