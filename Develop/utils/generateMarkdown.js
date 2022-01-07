// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  // if there is a license, a license badge is returned depending on what license is passed in
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {};

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ![GitHub License](https://img.shields.io/badge/license-${data.license}-important)

  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.installation}

  ## Usage Instructions
  ${data.usage}

  ## License
  Permission to use this application is granted under the ${data.license} license.
  Click on the link for more information: [License Information](https://opensource.org/licenses/${data.license})

  ## How To Contribution
  ${data.contribution}
`;
};

// allow the module to be used in index.js
module.exports = generateMarkdown;
