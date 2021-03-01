//This class is Intern.
// It inherits Employee's properties and methods
//also has school, getSchool(), getRole() overridden to Intern
// WHAT ABOUT VALIDATION IN PROPER FORMAT

const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}

module.exports = Intern;