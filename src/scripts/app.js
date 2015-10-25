import Home from 'views/home';

class App {

	constructor() {

		const view = new Home();

		// console.log('APP', view);

	}

}

window.APP = new App();