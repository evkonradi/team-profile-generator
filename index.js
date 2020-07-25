const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

var team = [];

const promptManager = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is Manager's name? (Required)",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter Manager's name!");
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is Manager's id? (Required)",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter Manager's id!");
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is Manager's email? (Required)",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter Manager's email!");
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is Manager's office number? (Required)",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter Manager's office number!");
                return false;
              }
            }
        }
    ])
    .then(answers =>{
        team.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));

        promptTeamMember();
    });
}

const promptEngineer = () =>{
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is Engineer's name? (Required)",
                validate: nameInput => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("Please enter Engineer's name!");
                    return false;
                  }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is Engineer's id? (Required)",
                validate: nameInput => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("Please enter Engineer's id!");
                    return false;
                  }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is Engineer's email? (Required)",
                validate: nameInput => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("Please enter Engineer's email!");
                    return false;
                  }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "What is Engineer's github name? (Required)",
                validate: nameInput => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("Please enter Engineer's github name!");
                    return false;
                  }
                }
            }
        ])
        .then(answers =>{
            team.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
    
            promptTeamMember();
        });
}

const promptIntern = () =>{
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is Intern's name? (Required)",
                validate: nameInput => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("Please enter Intern's name!");
                    return false;
                  }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is Intern's id? (Required)",
                validate: nameInput => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("Please enter Intern's id!");
                    return false;
                  }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is Intern's email? (Required)",
                validate: nameInput => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("Please enter Intern's email!");
                    return false;
                  }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What is Intern's school name? (Required)",
                validate: nameInput => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("Please enter Intern's school name!");
                    return false;
                  }
                }
            }
        ])
        .then(answers =>{
            team.push(new Intern(answers.name, answers.id, answers.email, answers.school));
    
            promptTeamMember();
        });
}

const promptTeamMember = ()  => {
    
    inquirer.prompt({
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        choices: ['Add Engineer','Add Intern','Finish building my team']
    })
    .then(({action})=>{
        if (action === 'Finish building my team'){
            return;
        }
        else if (action === 'Add Engineer'){
            promptEngineer();
        }
        else{
            promptIntern();
        }
    });
    
};


promptManager();
