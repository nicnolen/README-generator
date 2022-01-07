/* MODULES INCLUDED */
// include node.js file system module
const fs = require('fs');
// include inquirer module in the index.js file
const inquirer = require('inquirer');

/* LINKING OTHER PAGES */
// link to page where the README is created
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = () => {
  // prompt the user with array of questions using inquirer. Use the name parameter value for template literals when writing the README
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Project title: ',
    },

    {
      type: 'input',
      name: 'description',
      message: 'Description of the project: ',
    },

    {
      type: 'input',
      name: 'installation',
      message: 'Installation instructions: ',
    },

    {
      type: 'input',
      name: 'usage',
      message: 'Usage instructions: ',
    },

    {
      type: 'list',
      name: 'license',
      message: 'License for the project:',
      choices: ['MIT', 'GNU', 'Apache'],
      default: ['MIT'],
    },

    {
      type: 'input',
      name: 'contribution',
      message: 'Contribution instructions:',
    },
  ]);
};

// Function to write README file using file system
const writeToFile = data => {
  // writeFile allows you to write a file using three parameters: (name of file, data, callback for errors)
  fs.writeFile('README.md', data, err => {
    // if there is an error
    if (err) {
      console.log(err);
      return;
    } else {
      // when the README is created
      console.log('Your README has been successfully created!');
    }
  });
};

// Function to initialize app
questions()
  // getting user answers
  .then(answers => {
    return generateMarkdown(answers);
  })
  // using data to display on the page
  .then(data => {
    return writeToFile(data);
  })
  // catching errors
  .catch(err => {
    console.log(err);
  });
