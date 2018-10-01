const chalk = require('chalk');
const yosay = require('yosay');
const process = require('process');
const fsExtra = require('fs-extra');



module.exports = {
  relocateContent: function() {
    console.log(
      yosay(
        `${chalk.yellow('Step 2:')} Copying RecordsOfTable files`
      )
    );
    const srcPath = '../../..';
    process.chdir(srcPath);

    fsExtra.moveSync(
      'components/theme/plugins/PROMs/RecordsOfTable',
      'components/form-fields/RecordsOfTable',
      { overwrite: true },
      function(err) {
        if (err) throw err;
      }
    );
    return true;
  }
};
