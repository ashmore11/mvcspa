/**
 * @fileoverview ~ Starting point of the application
 */

import Config     from 'app/config';
import Controller from 'app/controller';

class App {

	constructor() {

    this.controller = new Controller();
    this.config     = Config;

  }

}

window.APP = new App();