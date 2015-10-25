import Model from 'models/home';

class HomeController {

	constructor() {

		let data = Model.then((data) => {

			this.setData(data);

		})

	}

	setData(data) {

		console.log(data.pages['HOME']);

	}

}

export default HomeController;