import Happens from 'happens';
import Page    from 'page';
import Config  from 'app/config';
import Model   from 'app/model';

class AppRouter {

  constructor() {

    Happens(this);

    this.bindEvents();

  }

  bindEvents() {

    Model.on('data:loaded', this.init.bind(this));

  }

  init(data) {

    this.data = data;

    Config.routes.map((route) => {
      
      Page(route.path, (ctx) => {

        this.navigate(ctx, route);

      });

    });

    Page('*', this.notFound.bind(this));

    Page();

    this.emit('router:ready');

  }

  navigate(ctx, route) {

    this.pageId = route.id
    this.userId = ctx.params.id ? ctx.params.id : void 0;

    this.emit('url:changed');

  }

  notFound(ctx) {

    console.error('404 page not found for:', ctx.path);
    console.warn('Redirecting to home...');

    Page.redirect('/');

  }

}

export default new AppRouter();