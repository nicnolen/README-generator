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
      message: 'Project title: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('PLease enter your project name!');
        }
      },
    },

    {
      type: 'input',
      name: 'description',
      message: 'Description of the project: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a project description!');
        }
      },
    },

    {
      type: 'input',
      name: 'installation',
      message: 'Installation instructions: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            'Please enter the installation instructions for your project!'
          );
          return false;
        }
      },
    },

    {
      type: 'input',
      name: 'usage',
      message: 'Usage instructions: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter usage instructions for your project!');
          return false;
        }
      },
    },

    {
      type: 'list',
      name: 'license',
      message: 'License for the project: (Required)',
      choices: ['MIT', 'GNU', 'Apache'],
      default: ['MIT'],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project license!');
          return false;
        }
      },
    },

    {
      type: 'input',
      name: 'contribution',
      message: 'Would you like to enter contribution instructions?',
    },

    {
      type: 'input',
      name: 'test',
      message: 'Would you like to enter a command for running tests?',
    },
    // contact Me Section
    {
      type: 'input',
      name: 'github',
      message: 'GitHub username: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a valid GitHub username!');
          return false;
        }
      },
    },

    {
      type: 'input',
      name: 'email',
      message: 'Email Address: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a valid email address!');
          return false;
        }
      },
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
