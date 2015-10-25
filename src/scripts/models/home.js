class HomeModel {

	constructor() {

		let promise = fetch('json/data.json').then( (response) => {
		
		  return response.json();

		 });

		return promise;

	}

}

export default new HomeModel();