'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const process = require('process');
const rimraf = require('rimraf');

const functions = require('./functions');
const commonFunctions = require('../../common/functions');

module.exports = class extends Generator {
    prompting() {
        this.log(
            yosay(`Welcome to the Showcase-theme sub-generator!`)
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
            this.props = props;
    });
    }

    writing() {
        try {

            commonFunctions.goToPluginsDirectory();

            commonFunctions.cloneProject(
                this,
                'Terms and Conditions plugin',
                'master',
                'https://github.com/PulseTile-Plugins/Plugin-Theme-ShowcaseStack',
                'Plugin-Theme-Showcase'
            );

            setTimeout(function () {
                functions.replacePluginFiles();
                functions.importThemeStyles();
                commonFunctions.removePluginDirectory('src/components/theme/plugins/Plugin-Theme-Showcase');
            }, 10000);

        } catch (err) {
            console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
            console.error(`ERROR: ${err}`);
        }
    }
};
