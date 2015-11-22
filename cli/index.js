#!/usr/bin/env node
var co      = require('co');
var prompt  = require('co-prompt');
var program = require('commander');
var chalk   = require('chalk');
var fs      = require('fs');

var basepath  = process.env.PWD;
var fileTypes = [
  {type: 'scripts', ext: 'js'},
  {type: 'templates', ext: 'jade'},
  {type: 'styles', ext: 'styl'}
];

program

  .option('-v, --view', 'Create a new view.')
  .option('-d, --delete', 'Delete an existing view.')

  .parse(process.argv);

if(program.view) {

  co(function *() {
      
    var filename = yield prompt(chalk.magenta('filename: '));

    fileTypes.map((obj, index) => {

      var path = `${basepath}/src/${obj.type}/views/${filename}.${obj.ext}`;

      fs.open(path, 'w', function() {
      
        console.log(chalk.green(`${filename}.${obj.ext} created...`));

        if(index === fileTypes.length - 1) {

          var msg = 'Remember to create a route for this ' +
                    'view in router.js and import the view ' +
                    'into the controller.js file!'

          console.log(chalk.yellow(msg));
          process.exit(0);

        }

      });

    });

  });

}

if(program.delete) {

  co(function *() {
      
    var filename = yield prompt(chalk.magenta('filename: '));

    fileTypes.map((obj, index) => {

      var path = `${basepath}/src/${obj.type}/views/${filename}.${obj.ext}`;

      fs.unlink(path, function() {
      
        console.log(chalk.red(`${filename}.${obj.ext} deleted...`));

        if(index === fileTypes.length - 1) {

          var msg = 'Remember to delete the route for this ' +
                    'view in router.js and remove the view ' +
                    'from controller.js!'

          console.log(chalk.yellow(msg));
          process.exit(0);

        }

      });

    });

  });

}