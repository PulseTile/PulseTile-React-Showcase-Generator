const chalk = require('chalk');
const yosay = require('yosay');
const process = require('process');
const fs = require('fs');
const fsExtra = require('fs-extra');
const rimraf = require('rimraf');

module.exports = {

    /**
     * This function replace directory with styles to required path
     */
    replacePluginFiles: function () {
        console.log(yosay(`${chalk.yellow('Step 2:')} Replacing Showcase-theme plugin directory...`));
        const srcPath = '../../../..';
        process.chdir(srcPath);

        fsExtra.moveSync(
            'src/components/theme/plugins/Plugin-Theme-Showcase/styles',
            'src/styles',
            {
                overwrite: true
            }
        );

    },

    /**
     * This function adds importing of theme to main CSS file
     *
     * @return {boolean}
     */
    importThemeStyles: function () {
        console.log(yosay(`${chalk.yellow('Step 3:')} Including theme CSS files...`));
        const newRow = "\n\n\nimport '../styles/main.scss';";
        fs.appendFileSync('src/config/styles.js', newRow, function (err) {
            if (err) throw err;
        });
        return true;
    }
};
