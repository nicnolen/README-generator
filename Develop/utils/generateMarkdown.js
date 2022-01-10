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

// Function that renders the installation section in the table of contents
const renderInstallation = installation => {
  // if there is a installation section, create a installation section in table of contents
  if (installation) {
    return `- [Installation Instructions](#installation-instructions)`;
  } else {
    // if there is no installation section, return an empty string
    return '';
  }
};

// Function that renders the installation section
const renderInstallationSection = installation => {
  if (installation) {
    return `
    ## Installation Instructions
    ${data.installation}`;
  } else {
    return '';
  }
};

// Function that puts license section in table of contents
const renderLicense = license => {
  if (license) {
    // if there is a license, create a license section in table of contents
    return `- [License Section](#license)`;
  } else {
    // if there is no license, return an empty string
    return '';
  }
};

// Function to create a license section with a link to license information
const renderLicenseSection = license => {
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

// Function that renders the installation section in the table of contents
const renderContribution = contribution => {
  // if there is a contribution section, create a contribution section in table of contents
  if (contribution) {
    return `- [How To Contribute](#how-to-contribute)`;
  } else {
    // if there is no installation section, return an empty string
    return '';
  }
};

// Function that renders the contribution section
const renderContributionSection = contribution => {
  if (contribution) {
    return `
    ## How To Contribution
    ${data.contribution}`;
  } else {
    return '';
  }
};

// Function to generate markdown for README
const generateMarkdown = data => {
  // define the data variables
  const { installation, license, contribution } = data;

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  ${renderInstallation(installation)}
  - [Usage Instructions](#usage-instructions)
  ${renderLicense(license)}
  ${renderContribution(contribution)}
  - [Testing](#testing)
  - [Contact Me](#contact-me)

  ## Description
  ${data.description}

  ${renderInstallationSection(installation)}

  ## Usage Instructions
  ${data.usage}

  ${renderLicenseSection(license)}

  ${renderContributionSection(contribution)}

  ## Testing
  ${data.test}

  ## Contact Me
  GitHub Link: (https://github.com/${data.github})<br>
  Email Address: <${data.email}>
`;
};

// allow the module to be used in index.js
module.exports = generateMarkdown;
