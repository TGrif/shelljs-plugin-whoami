const shell = require('shelljs');
const whoami = require('..');

require('should');


describe('shelljs-plugin-whoami', () => {
  let I = shell.whoami();

  it('gets added to the shelljs instance as ' + I, () => {
    shell.whoami.should.be.type('function');
  });

});