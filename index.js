/**
* shelljs-plugin-whoami
* TGrif 2018
* License MIT
*
*/
const plugin = require('shelljs/plugin');

function whoami(options) {
  let output = process.env.USER || process.env.LOGNAME;
  output += '\n';
  process.stdout.write(output);

  return output;
}

plugin.register('whoami', whoami, {
  cmdOptions: {},
});

exports.whoami = whoami;
