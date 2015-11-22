#!/usr/bin/env node
var co      = require('co');
var prompt  = require('co-prompt');
var program = require('commander');
var chalk   = require('chalk');
var fs      = require('fs');
var config  = require('./config')

program
  .option('-v, --view', 'Create a new view.')
  .option('-d, --delete', 'Delete an existing view.')
  .parse(process.argv);

if(program.view) {

  co(function *() {
      
    var filename = yield prompt(chalk.magenta('name: '));

    config.files.map((file, index) => {

      var path = `${file.path}/${filename}.${file.ext}`;

      fs.open(path, 'w', function() {
      
        console.log(chalk.green(`${filename}.${file.ext} created...`));

        if(index === config.files.length - 1) {

          console.log(chalk.yellow(config.messages.view.created));

          process.exit(0);

        }

      });

    });

  });

}

if(program.delete) {

  co(function *() {
      
    var filename = yield prompt(chalk.magenta('name: '));

    config.files.map((file, index) => {

      var path = `${file.path}/${filename}.${file.ext}`;

      fs.stat(path, function(err, stats){
        
        if(err) {
        
          if(index === config.files.length - 1) {

            console.log(chalk.red(config.messages.view.fileNotFound));

            process.exit(0);

          }
        
        } else {

          fs.unlink(path, function() {
      
            console.log(chalk.green(`${filename}.${file.ext} deleted...`));

            if(index === config.files.length - 1) {

              console.log(chalk.yellow(config.messages.view.deleted));

              process.exit(0);

            }

          });

        }

      });

    });

  });

}