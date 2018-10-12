'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const process = require('process');

const commonFunctions = require('../../common/functions');

module.exports = class extends Generator {

    prompting() {
        this.log(
            yosay(`Welcome to the all CARBON plugins sub-generator!`)
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
                'All Carbon plugins',
                'master',
                'https://github.com/PulseTile-Plugins/PulseTile-React-Carbon-Plugins',
                'All-Carbon-Plugins'
            );
            setTimeout(function () {
                const excessFiles = [
                    'LICENSE',
                    '.git',
                    'README.md'
                ];
                commonFunctions.removeExcessFiles('All-Carbon-Plugins', excessFiles);
            }, 10000);
            setTimeout(function () {
                commonFunctions.extractPlugins('plugins/All-Carbon-Plugins/');
            }, 20000);
            setTimeout(function () {
                process.chdir('plugins');
                commonFunctions.removePluginDirectory('All-Carbon-Plugins');
            }, 20000);

        } catch (err) {
            console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
            console.error(`ERROR: ${err}`);
        }
    }
};

