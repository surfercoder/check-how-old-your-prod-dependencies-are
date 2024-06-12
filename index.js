const { dependencies } = require('./package.json');
const { exec } = require('node:child_process');

Object.keys(dependencies).forEach(dep => {
  exec(`npm view ${dep} | grep published`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }

    console.log(`\x1b[32m${dep}\x1b[0m: ${stdout}`);
  });
});