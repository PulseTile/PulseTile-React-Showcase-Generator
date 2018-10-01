'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');


const functions = require('./functions');
const commonFunctions = require('../../common/functions');

module.exports = class extends Generator {

  prompting() {
    this.log(yosay(`Theme settings updating`));
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
      functions.switchShowcase(this);
    } catch (err) {
      console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
    }
  }
};
