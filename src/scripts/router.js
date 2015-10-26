import Page from 'page'

class Router {

	constructor() {

		Page('*', (ctx) => {

			// console.log(ctx);

			this.path = ctx.path

		});

		Page();

	}

}

export default new Router();