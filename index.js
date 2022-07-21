const inquirer = require('inquirer')
const fs = require('fs')
const generateHTML = require('./src/generateHTML')

const questionsInitial = [
    {
        name: 'managerName',
        message: "What is the team manger's name?"
    },
]

const questionsEngineer = [
    {
        name: 'engineerName',
        message: "What is the team engineer's name?"
    },
]

const questionsIntern = [
    {
        name: 'internName',
        message: "What is the team intern's name?"
    },
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), (err) => console.log(err))
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('./dist/index.html', answers);
        })
        .catch((error) => {
            console.log(error);
        });
}       

init();