const chalk = require('chalk');
const yosay = require('yosay');
const fs = require('fs');
const process = require('process');

module.exports = {
  /**
   * This function switches theme from main to Showcase
   *
   * @param el
   * @return {boolean}
   */
  switchShowcase: function(el) {
    const srcPath = '../../..';
    process.chdir(srcPath);

    console.log(yosay(`${chalk.yellow('Step 1:')} Switching theme configuration...`));
    fs.copyFileSync(
        el.templatePath('themeConfigs.txt'),
        'themes.config.js'
    );
    return true;
  },
};
