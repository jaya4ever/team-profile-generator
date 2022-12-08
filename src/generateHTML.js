//Exporting it to generate the HTML
module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile Generator</title>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 bg-success jumbotron text-white mb-3">
                <h1 style="color:#062367;" class="text-center">My Awesome Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="main-section col-12 d-flex justify-content-center">
                    ${createProfile(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};

//Working on creating the team Profile
const createProfile = team => {

    //Working on the Manager profile
    const createManager = manager => {
        return `
        <div class="card employee-card manager-card">
            <div class="card-header alert alert-success text-center">
                <h2 style="color:Tomato;" class="card-title">${manager.getName()}</h2>
                <h4 style="color:rgb(255, 71, 227);" class="card-title">Title: ${manager.getRole()}</h4>
            </div>
            <div class="card-body alert alert-info bg-light">
                <ul class="list-group alert alert-info text-dark">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: <a href="tel:${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
                </ul>
            </div>
        </div>
        `;
    };

    // Working on creating Engineer Profile
    const createEngineer = engineer => {
        return `
        <div class="card employee-card alert alert-info engineer-card">
            <div class="card-header alert alert-success  text-center">
                <h2 style="color:Tomato;" class="card-title">${engineer.getName()}</h2>
                <h4 style="color:rgb(255, 71, 212);"class="card-title">Title: ${engineer.getRole()}</h4>
            </div>
            <div class="card-body alert alert-info  bg-light">
                <ul class="list-group alert alert-info text-dark">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                   
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank"
                    rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                    
                </ul>
            </div>
        </div>
        `;
    };

    //Working on creatong Intern Profile
    const createIntern = intern => {
        return `
        <div class="card employee-card alert alert-info  intern-card">
            <div class="card-header alert alert-success text-center">
                <h2 style="color:Tomato;" class="card-title">${intern.getName()}</h2>
                <h4 class="card-title">Title: ${intern.getRole()}</h4>
            </div>
            <div class="card-body alert alert-info bg-light">
                <ul class="list-group alert alert-info text-dark">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => createManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => createEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => createIntern(intern))
        .join("")
    );

    return html.join("");

}