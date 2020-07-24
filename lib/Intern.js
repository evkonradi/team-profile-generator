const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);

        this.school = school;
    }

    getInternInfo(){
        return {name: this.name, 
            id : this.id, 
            email: this.email, 
            school: this.school};
}
}

module.exports = Intern;