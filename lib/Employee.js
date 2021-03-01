// This java script is to produce the employee parent class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
 
    getName () {
        return this.name;
    };

    getId() {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getRole () {
        return "Employee";
    }
}
module.exports = Employee;