import jquery     from 'jquery';
import underscore from 'underscore'
import Config     from 'app/config';
import Controller from 'app/controller';

class App {

	constructor() {

    window.$ = jquery;
    window._ = underscore;

    this.controller = new Controller();
    this.config     = Config;

  }

}

window.APP = new App();