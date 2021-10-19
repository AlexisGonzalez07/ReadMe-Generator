// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // requires a return
  switch(license){
  case 'MIT License':
    console.log('MIT');
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    break;
  case 'Apache License':
    console.log('Apache');
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    break;
  case 'GNU License':
    console.log('GNU GPL v3');
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    break;
  default: 
    console.log('You did not select a license');
    return 'This ReadMe does not have a license';
}};
// renderLicenseBadge('MIT')
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   // requires a return
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title}

## License:
${renderLicenseBadge(data.license)}

## Table of Contents
*[Description](#Description)
*[Installation](#Installation)
*[Usage](#Usage)
*[Testing](#Testing)
*[Contribution](#Contribution)
*[Questions](#Questions)


## DESCRIPTION
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Testing
${data.testing}

## Contribution
${data.contribution}

## Questions
Feel free to email me at:
${data.email}
Visit my Github profile at:
[Alex Gonzalez Github](www.github.com/${data.username})`
};

module.exports = generateMarkdown;