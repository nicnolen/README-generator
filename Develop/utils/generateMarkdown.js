// If there is no license, return an empty string
const renderLicenseBadge = license => {
  // if there is a license, a license badge is returned depending on what license is passed in
  if (license) {
    return `![${license} License](https://img.shields.io/badge/license-${license}-important)`;
  } else {
    return '';
  }
};

// If there is no license, return an empty string
const renderLicenseLink = license => {
  if (license) {
    return `Permission to use this application is granted under the ${license} license.
    Click on the link for more information: [${license} License Information](https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (license) {
    return ` ## License
    ${renderLicenseLink(license)}`;
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  const { license } = data;
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation Instructions](#installation-instructions)
  - [Usage Instructions](#usage-instructions)
  - [License](#license)
  - [How To Contribute](#how-to-contribute)
  - [Testing](#testing)
  - [Contact Me](#contact-me)

  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.installation}

  ## Usage Instructions
  ${data.usage}

  ${renderLicenseSection(license)}

  ## How To Contribution
  ${data.contribution}

  ## Testing
  ${data.test}

  ## Contact Me
  GitHub Link: (https://github.com/${data.github})<br>
  Email Address: <${data.email}>
`;
};

// allow the module to be used in index.js
module.exports = generateMarkdown;
