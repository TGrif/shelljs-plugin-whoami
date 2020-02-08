const shell = require('shelljs');
const whoami = require('..');

require('should');


describe('shelljs-plugin-whoami', () => {

  it('gets added to the shelljs instance', () => {
    shell.whoami.should.be.type('function');
  });

})

shell.whoami();
// let ret = shell.whoami();

// shell.echo(ret.stdout); // most plugins return a ShellString, just like ShellJS commands!
// let ret2 = shell.whoami().grep('T'); // most plugins will be fully pipe-able
// shell.echo(ret2.stdout);
