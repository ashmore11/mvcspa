import Model      from 'app/model';
import Controller from 'app/controller';

class App {

	constructor() {

    // Fetch the data from the model before starting the app
    Model().then(data => { this.start(data); });

  }

  /**
   * Execute the app
   * @param {Object} Object containing all the data required in the app
   */
  start(data) {

    const controller = new Controller();

    controller.init(data);

  }

}

export default new App();