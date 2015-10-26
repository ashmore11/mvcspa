import Happens from 'happens'
import Page    from 'page'

class Router {

	constructor() {

    Happens(this);

    this.setRoutes();

    Page('*', this.start.bind(this));

    Page();

  }

  start(ctx) {

    // Stop routing if current page if the same as link clicked
    if (this.path === ctx.path) { return; }

    this.routes.map(route => {

      if (route.path === ctx.path) {

        this.pageId = route.id;
        this.path   = route.path;

      }

    });

    this.emit('url:changed');

	}

  setRoutes() {
    
    this.routes = [
      {
        id: 'home',
        path: '/',
      },
      {
        id: 'example',
        path: '/example'
      }
    ];

  }

}

export default new Router();