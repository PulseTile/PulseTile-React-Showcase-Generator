'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const process = require('process');

const commonFunctions = require('../../common/functions');

module.exports = class extends Generator {
    prompting() {
        this.log(
            yosay(`Welcome to the all SILVER plugins sub-generator!`)
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
                'All Silver plugins',
                'master',
                'https://github.com/BogdanScherban/PulseTile-React-Silver-Plugins',
                'All-Silver-Plugins'
            );
            setTimeout(function () {
                const excessFiles = [
                    'LICENSE',
                    '.git',
                    'README.md'
                ];
                commonFunctions.removeExcessFiles('All-Silver-Plugins', excessFiles);
            }, 10000);
            setTimeout(function () {
                commonFunctions.extractPlugins('plugins/All-Silver-Plugins/');
            }, 20000);
            setTimeout(function () {
                process.chdir('plugins');
                commonFunctions.removePluginDirectory('All-Silver-Plugins');
            }, 20000);

        } catch (err) {
            console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
            console.error(`ERROR: ${err}`);
        }
    }
};

