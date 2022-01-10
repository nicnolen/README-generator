// Function to create a license badge
const renderLicenseBadge = license => {
  // if there is a license, a license badge is returned depending on what license is passed in
  if (license) {
    return `![${license} License](https://img.shields.io/badge/license-${license}-important)`;
  } else {
    // if there is no license, return an empty string
    return '';
  }
};

// Function that puts license section in table of contents
const renderLicenseSection = license => {
  if (license) {
    // if there is a license, create a license section in table of contents
    return `- [License Section](#license)`;
  } else {
    // if there is no license, return an empty string
    return '';
  }
};

// Function to create a license section with a link to license information
const renderLicenseInfo = license => {
  // create a link to license information if there is a license
  if (license) {
    return `
    ## License
      Permission to use this application is granted under the ${license} license.
      Click on the link for more information: [${license} License Information](https://opensource.org/licenses/${license})`;
  } else {
    // if there is no license, return an empty string
    return '';
  }
};

// Function to generate markdown for README
const generateMarkdown = data => {
  const { license } = data;
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation Instructions](#installation-instructions)
  - [Usage Instructions](#usage-instructions)
  ${renderLicenseSection(license)}
  - [How To Contribute](#how-to-contribute)
  - [Testing](#testing)
  - [Contact Me](#contact-me)

  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.installation}

  ## Usage Instructions
  ${data.usage}

  ${renderLicenseInfo(license)}

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
