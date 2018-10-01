'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');


const commonFunctions = require('../../common/functions');
const functions = require('./functions');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(`Welcome to the all PROMs plugin sub-generator!`));

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
  });
  }

  writing() {
    try {
      commonFunctions.goToPluginsDirectory();
      commonFunctions.cloneProject(
        this,
        'Plugin-PROMS',
        'master',
        'https://github.com/PulseTile-Plugins/Plugin-PROMS',
        'PROMs'
      );
      functions.relocateContent();
    } catch (err) {
      console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
      console.error(`ERROR: ${err}`);
    }
  }
};
