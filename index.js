const inquirer = require('inquirer')
const fs = require('fs')
const generateHTML = require('./src/generateHTML')

const questionsInitial = [
    {
        name: 'managerName',
        message: "What is the team manager's name?"
    },
    {
        name: 'managerId',
        message: "What is the team manager's ID number?"
    },
    {
        name: 'managerEmail',
        message: "What is the team manager's email address?"
    },
    {
        name: 'managerOffice',
        message: "What is the team manager's office number?"
    },
    {
        name: 'break',
        message: "Would you like to add another team member?",
        type: 'list',
        choices: ['Engineer', 'Intern', 'Finish adding team members']
    }
]

const questionsEngineer = [
    {
        name: 'engineerName',
        message: "What is the engineer's name?"
    },
    {
        name: 'engineerId',
        message: "What is the engineer's ID number?"
    },
    {
        name: 'engineerEmail',
        message: "What is the engineer's email address?"
    },
    {
        name: 'engineerGithub',
        message: "What is the engineer's github?"
    },
    {
        name: 'break',
        message: "Would you like to add another team member?",
        type: 'list',
        choices: ['Engineer', 'Intern', 'Finish adding team members']
    }
]

const questionsIntern = [
    {
        name: 'internName',
        message: "What is the intern's name?"
    },
    {
        name: 'internId',
        message: "What is the intern's ID number?"
    },
    {
        name: 'internEmail',
        message: "What is the intern's email address?"
    },
    {
        name: 'internSchool',
        message: "What is the intern's school?"
    },
    {
        name: 'break',
        message: "Would you like to add another team member?",
        type: 'list',
        choices: ['Engineer', 'Intern', 'Finish adding team members']
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), (err) => console.log(err))
}

function init() {
    inquirer
        .prompt(questionsInitial)
        .then((answers) => {
            writeToFile('./dist/index.html', answers);
        })
        .catch((error) => {
            console.log(error);
        });
}       

init();