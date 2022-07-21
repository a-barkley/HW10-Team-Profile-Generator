const inquirer = require('inquirer')
const fs = require('fs')
const generateHTML = require('./src/generateHTML')


const team = []

const questionsManager = [
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
]

const questionSelect = [
    {
        name: 'select',
        message: "Would you like to add another team member?",
        type: 'list',
        choices: ['Engineer', 'Intern', 'Finish adding team members']
    }
]


function teamSelect() {
    inquirer
        .prompt(questionSelect)
        .then(answers, () => {
            switch(answers) {
                case 'Engineer':
                    engineerQuestions();
                    break;
                case 'Intern':
                    internQuestions();
                    break;
                case 'Finish adding team members':
                    break;
            }
        })
}

function managerQuestions() {
    inquirer
        .prompt(questionsManager)
        .then(answers, () => {
            team.push(answers)
        })
        .then(teamSelect())
}

function engineerQuestions() {
    inquirer
        .prompt(questionsEngineer)
        .then(answers, () => {
            team.push(answers)
        })
        .then(teamSelect())
}

function internQuestions() {
    inquirer
        .prompt(questionsIntern)
        .then(answers, () => {
            team.push(answers)
        })
        .then(teamSelect())
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), (err) => console.log(err))
}

function init() {
    managerQuestions()
}       

init();