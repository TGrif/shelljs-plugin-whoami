# shelljs-plugin-whoami

[![shelljs-plugin](https://img.shields.io/badge/shelljs-plugin-brightgreen.svg?style=flat-square)](https://github.com/shelljs/shelljs/wiki/Using-ShellJS-Plugins)

A [ShellJS](https://github.com/shelljs/shelljs) plugin for the `whoami` command.

## Installation

```bash
$ npm install --save shelljs
$ npm install --save shelljs-plugin-whoami
```

## Usage

To use this plugin in your project, include it like so:

```javascript
var shell = require('shelljs');
require('shelljs-plugin-whoami');

shell.whoami();

```

## Test
```bash
$ npm run test
```

### TODO
npm publish  
Travis test

### GNU original function
https://github.com/coreutils/coreutils/blob/master/src/whoami.c
