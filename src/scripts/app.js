import Home from 'views/home';

class App {

	constructor() {

		this.views = {};
		this.views.home = new Home();

	}

}

window.APP = new App();