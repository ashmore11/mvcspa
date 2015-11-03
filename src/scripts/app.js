import Model      from 'app/model';
import Config     from 'app/config';
import Controller from 'app/controller';

class App {

	constructor() {

    Model().then(data => { this.start(data); });

  }

  start(data) {

    const controller = new Controller();

    controller.init(data);

  }

}

export default new App();