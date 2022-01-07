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

  ## Description
  ${data.description}

`;
};

// allow the module to be used in index.js
module.exports = generateMarkdown;