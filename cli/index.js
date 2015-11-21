#!/usr/bin/env node
const co      = require('co');
const prompt  = require('co-prompt');
const program = require('commander');
const fs      = require('fs');

program
  .option('-v, --view', 'The name of the view')
  .parse(process.argv);

if(program.view) {

  co(function *() {
      
    const filename = yield prompt('filename: ');

    const basepath  = process.env.PWD;
    const fileTypes = ['scripts','templates','styles'];

    fileTypes.map(type => {

      var ext;

      switch(type){
        case 'scripts':
          ext = 'js';
          break;
        case 'templates':
          ext = 'jade';
          break;
        case 'styles':
          ext = 'styl';
          break;
      }

      const path = `${basepath}/src/${type}/views/${filename}.${ext}`

      fs.open(path, 'w', function(){
      
        console.log(`${filename}.${ext} created...`);

      });

    });

    process.exit(0);

  });

}