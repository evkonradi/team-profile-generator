const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generatePage = require('./src/page-template.js');
const { writeFile, copyFile } = require('./generate-site.js');

var team = [];

const promptManager = () =>{
    console.log('\n******************************\n');
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is Manager's name? (Required)",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log(" Please enter Manager's name!");
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is Manager's id (number greater that zero)? (Required)",
            validate: nameInput => {
              if (nameInput && !isNaN(nameInput) && parseInt(nameInput) > 0) {
                return true;
              } else {
                console.log(" Please enter Manager's id (number greater that zero)!");
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is Manager's email? (Required)",
            validate: nameInput => {
              const re = /\S+@\S+\.\S+/;
              if (nameInput && re.test(nameInput)) {
                return true;
              } else {
                console.log(" Please enter Manager's email!");
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is Manager's office number (number greater that zero)? (Required)",
            validate: nameInput => {
              if (nameInput && !isNaN(nameInput) && parseInt(nameInput) > 0) {
                return true;
              } else {
                console.log(" Please enter Manager's office number (number greater that zero)!");
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
                    console.log(" Please enter Engineer's name!");
                    return false;
                  }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is Engineer's id (number greater that zero)? (Required)",
                validate: nameInput => {
                  if (nameInput && !isNaN(nameInput) && parseInt(nameInput) > 0) {
                    return true;
                  } else {
                    console.log(" Please enter Engineer's id (number greater that zero)!");
                    return false;
                  }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is Engineer's email? (Required)",
                validate: nameInput => {
                  const re = /\S+@\S+\.\S+/;
                  if (nameInput && re.test(nameInput)) {
                        return true;
                  } else {
                    console.log(" Please enter Engineer's email!");
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
                    console.log(" Please enter Engineer's github name!");
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
                    console.log(" Please enter Intern's name!");
                    return false;
                  }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is Intern's id (number greater that zero)? (Required)",
                validate: nameInput => {
                  if (nameInput && !isNaN(nameInput) && parseInt(nameInput) > 0) {
                    return true;
                  } else {
                    console.log(" Please enter Intern's id (number greater that zero)!");
                    return false;
                  }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is Intern's email? (Required)",
                validate: nameInput => {
                  const re = /\S+@\S+\.\S+/;
                  if (nameInput && re.test(nameInput)) {
                        return true;
                  } else {
                    console.log(" Please enter Intern's email!");
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
                    console.log(" Please enter Intern's school name!");
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
  
    console.log('\n******************************\n');

    inquirer.prompt({
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        choices: ['Add Engineer','Add Intern','Finish building my team']
    })
    .then(({action})=>{
        if (action === 'Finish building my team'){
            writeFile(generatePage(team))
            .then(writeFileResponse => {
                console.log(writeFileResponse);
                return copyFile();
              })
              .then(copyFileResponse => {
                console.log(copyFileResponse);
              })
              .catch(err => {
                console.log(err);
              });

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

