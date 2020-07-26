const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateTemMembers = teamData =>{

    return `
    ${teamData.filter(item => item instanceof Manager)
        .map(item => {
            let {name, id, email, officeNumber} = item.getManagerInfo();
            return `
            <div class="card bg-light mb-3 card-style" style="max-width: 18rem;">
                <div class="card-header bg-primary">
                    <h2 class="card-title text-nowrap">${name}</h2>
                    <h2 class="card-title text-nowrap"><i class="fas fa-mug-hot mr-2"></i>Manager</h2>
                </div>
                <div class="card-body">
                    <ul class="list-group card-text my-3">
                        <li class="list-group-item text-nowrap">ID: ${id}</li>
                        <li class="list-group-item text-nowrap">Email: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item text-nowrap">Office number: ${officeNumber}</li>
                    </ul>
                </div>
            </div>    
                `;
        })
    }
    ${teamData.filter(item => item instanceof Engineer)
        .map(item => {
            let {name, id, email, github} = item.getEngineerInfo();
            return `
            <div class="card bg-light mb-3 card-style" style="max-width: 18rem;">
                <div class="card-header bg-primary">
                    <h2 class="card-title text-nowrap">${name}</h2>
                    <h2 class="card-title text-nowrap"><i class="fas fa-glasses mr-2"></i>Engineer</h2>
                </div>
                <div class="card-body">
                    <ul class="list-group card-text my-3">
                        <li class="list-group-item text-nowrap">ID: ${id}</li>
                        <li class="list-group-item text-nowrap">Email: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item text-nowrap">GitHub: ${github}</li>
                    </ul>
                </div>
            </div>    
                `;
        }).join('')
    }
    ${teamData.filter(item => item instanceof Intern)
        .map(item => {
            let {name, id, email, school} = item.getInternInfo();
            return `
            <div class="card bg-light mb-3 card-style" style="max-width: 18rem;">
                <div class="card-header bg-primary">
                    <h2 class="card-title text-nowrap">${name}</h2>
                    <h2 class="card-title text-nowrap"><i class="fas fa-user-graduate mr-2"></i>Intern</h2>
                </div>
                <div class="card-body">
                    <ul class="list-group card-text my-3">
                        <li class="list-group-item text-nowrap">ID: ${id}</li>
                        <li class="list-group-item text-nowrap">Email: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item text-nowrap">School: ${school}</li>
                    </ul>
                </div>
            </div>    
                `;
        }).join('')
    }
    `;
}

module.exports = teamData => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./style.css" />
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <header>
        <div class="container-fluid">
            <div class="row">
                <nav class="col-12 navbar heading-bg">
                    <h1 class="text-white mx-auto m-5">My Team</h1>
                </nav>
    
            </div>
        </div>
    </header>
    <section id="main">
        <div class="d-flex p-3 justify-content-center align-items-center flex-wrap">
            ${generateTemMembers(teamData)}
        </div>
    </section>

</body>
</html>
    `;
  };