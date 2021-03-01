// Engineer - inherit employee properties and methods - Extend
//additional properties and methods:
// github username
//getGithub()
//getRole() overridden Engineer
//VALIDATION IN PROPER FORMAT

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
      super(name, id, email);
      this.github = github; 
    }

  getGithub () {
      return this.github;  
  }

  getRole () {
      return "Engineer"; 
  }
}

module.exports = Engineer;