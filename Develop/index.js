// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'   
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license you desire?',  
        choices: ['MIT License',"Apache License", 'GNU License','No License'] 
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of the project'   
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions'   
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can your product be used? Please provide some information'   
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are some instructions for other users contributing, if any.'   
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What are the testing instructions for this application?'   
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your developer email?'   
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'   
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answer => {
        console.log(answer);
        writeToFile('ReadMe.md', answer)
    })
}

// Function call to initialize app
init();
