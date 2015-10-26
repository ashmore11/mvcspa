import Happens from 'happens'
import Page    from 'page'
import Model   from 'app/model'

class Router {

  constructor() {

    Happens(this);

    this.bindEvents();

  }

  bindEvents() {

    Model.on('data:loaded', this.init.bind(this));

  }

  init(data) {

    this.routes = data.routes;

    Page('*', ctx => {

      this.start(ctx, data);

    });

    Page();

    this.emit('data:ready');

  }

  start(ctx, data) {

    if (this.path === ctx.path) { return; }

    this.routes.map(route => {

      if (route.path === ctx.path) {

        this.pageId = route.id;
        this.path   = route.path;
        
        this.data = {
          page  : data.pages[route.id],
          header: data.partials.header,
          footer: data.partials.footer,
        };

      }

    });

    this.emit('url:changed');

  }

}

export default new Router();