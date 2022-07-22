function createManager(data) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            Manager
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${data.managerName}</li>
            <li class="list-group-item">ID: ${data.managerId}</li>
            <li class="list-group-item">Email: ${data.managerEmail}</li>
            <li class="list-group-item">Office Number: ${data.managerOffice}</li>
        </ul>
    </div>
    `
}

function createEngineer(data) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            Engineer
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${data.engineerName}</li>
            <li class="list-group-item">ID: ${data.engineerId}</li>
            <li class="list-group-item">Email: ${data.engineerEmail}</li>
            <li class="list-group-item">GitHub: ${data.engineerGithub}</li>
        </ul>
    </div>
    `
}

function createIntern(data) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            Intern
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${data.internName}</li>
            <li class="list-group-item">ID: ${data.internId}</li>
            <li class="list-group-item">Email: ${data.internEmail}</li>
            <li class="list-group-item">School: ${data.internSchool}</li>
        </ul>
    </div>
    `
}

function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Template</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>

        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Team Members</h1>
            </div>
        </div>

        


    </body>
    </html>
    `
}

// export {generateHTML}