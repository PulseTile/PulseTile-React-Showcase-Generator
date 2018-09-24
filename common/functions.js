const yosay = require('yosay');
const chalk = require('chalk');
const process = require('process');
const mkdirp = require('mkdirp');
const fs = require('fs');
const rimraf = require('rimraf');

/**
 * This module includes common functions, or functions which can be used in different subgenerators
 *
 */
module.exports = {

    /**
     *
     */
    goToPluginsDirectory: function() {
        const themeDirectoryPath = 'PulseTile-React-Core/src/components/theme/plugins';
        process.chdir(themeDirectoryPath);
        return true;
    },

    /**
     * This function clones Core project from GitHub
     *
     * @param el
     * @param {string} projectName
     * @param {string} branchName
     * @param {string} repositoryName
     * @param {string} pluginName
     * @return {boolean}
     */
    cloneProject: function(el, projectName, branchName, repositoryName, pluginName) {
        console.log(yosay(`${chalk.yellow('Step 1:')} Now we are clonning ${chalk.green(projectName)} from GitHub...`));
        el.spawnCommandSync(
            'git',
            [
                'clone',
                '-b',
                branchName,
                repositoryName,
                pluginName
            ]
        );
        return true;
    },

    /**
     * This function removes Theme directory
     *
     * @return {boolean}
     */
    removePluginDirectory: function (dirName) {
        console.log(yosay(`${chalk.yellow('Step 3:')} Removing plugin directory...`));
        rimraf(dirName, function (err) {
            if (err) throw err;
        });
        return true;
    },
};
