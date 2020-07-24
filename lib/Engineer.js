const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);

        this.github = github;
    }

    getEngineerInfo(){
        return {name: this.name, 
                id : this.id, 
                email: this.email, 
                github: this.github};
    }
}

module.exports = Engineer;