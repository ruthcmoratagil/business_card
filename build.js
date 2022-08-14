// import chalk from 'chalk';
('use strict');

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

// Define options for Boxen
const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
};

// Text + chalk definitions
const data = {
    name: chalk.white.bold('           Ruth C . Morata Gil 👋'),
    // handle: chalk.white('@rebelchris'),
    work: chalk.white('Junior Full Stack Developer'),
    email: chalk.hex('#feb95f')('ruth.morata@gmail.com'),
    phone: chalk.blueBright('[+34] 646 11 66 41'),
    github:
        chalk.gray('https://github.com/') + chalk.greenBright('ruthcmoratagil'),
    linkedin:
        chalk.gray('https://linkedin.com/in/') +
        chalk.greenBright('ruthcmoratagil'),
    web: chalk.hex('#17bebb')('https://ruthcmoratagil.dev'),
    npx: chalk.white.bgHex('#DA0060')('npx ruthcmoratagil'),
    labelWork: chalk.white.bold('    Work:'),
    labelEmail: chalk.white.bold('   Email:'),
    labelPhone: chalk.white.bold('   Phone:'),
    labelGitHub: chalk.white.bold('  GitHub:'),
    labelLinkedIn: chalk.white.bold('LinkedIn:'),
    labelWeb: chalk.white.bold('     Web:'),
    labelCard: chalk.white.bold('    Card:'),
};

// Actual strings we're going to output
const newline = '\n';
// const heading = `${data.name} / ${data.handle}`;
const heading = `${data.name}`;
const working = `${data.labelWork}  ${data.work}`;
const emailing = `${data.labelEmail}  ${data.email}`;
const phoning = `${data.labelPhone}  ${data.phone}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
    heading + // data.name + data.handle
    newline +
    newline + // Add one whole blank line
    working +
    newline + // data.labelWork + data.work
    emailing +
    newline + // data.labelEmail + data.email
    phoning +
    newline + // data.labelPhone + data.phone
    githubing +
    newline + // data.labelGitHub + data.github
    linkedining +
    newline + // data.labelLinkedIn + data.linkedin
    webing +
    newline +
    newline + // data.labelWeb + data.web
    carding; // data.labelCard + data.npx

fs.writeFileSync(
    path.join(__dirname, 'bin/output'),
    chalk.hex('#DA0060')(boxen(output, options))
);
