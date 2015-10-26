import Model  from 'models/home';
import Router from 'app/router';

class HomeController {

	constructor() {

		let data = Model.then((data) => {

			this.setData(data);

		});

		console.log(Router.path);

	}

	setData(data) {

		// console.log(data.pages['HOME']);

	}

}

export default HomeController;