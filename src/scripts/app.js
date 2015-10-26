import jquery     from 'jquery';
import Config     from 'app/config';
import Controller from 'app/controller';

class App {

	constructor() {

    window.$ = jquery

    this.controller = new Controller();
    this.config     = Config;

  }

}

window.APP = new App();