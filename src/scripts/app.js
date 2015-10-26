import Model      from 'app/model';
import Controller from 'app/controller';
import jquery     from 'jquery';

class App {

	constructor() {

    window.$ = jquery

    this.controller = new Controller();
    this.controller.bindEvents();

    this.bindEvents();

  }

  bindEvents() {

    Model.on('data:loaded', data => {
    
      this.controller.init(data);

    });

  }

}

window.APP = new App();