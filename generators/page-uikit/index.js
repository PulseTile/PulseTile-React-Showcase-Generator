'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const commonFunctions = require('../../common/functions');

module.exports = class extends Generator {
  prompting() {

    this.log(
      yosay(`Welcome to the ${chalk.red('UI-kit page')} generator!`)
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    try {
      commonFunctions.goToPagesDirectory();
      commonFunctions.cloneProject(
        this,
        'UI-kit page',
        'master',
        'https://github.com/PulseTile-Plugins/PulseTile-React-UI-Kit',
        'UIkit'
      );
      console.log(yosay(`Congradulations!!! ${chalk.green('UI-kit page')} was added successfully!!!`));
    } catch (err) {
      console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
      console.log(yosay(`Please, remove plugin directory ${chalk.green('UI-kit page')} and repeat installing.`));
    }
  }
};
