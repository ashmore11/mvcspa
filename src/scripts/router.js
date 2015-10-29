/**
 * @fileoverview ~ Handle the routing for the application
 */

import Happens from 'happens';
import Page    from 'page';

class AppRouter {

  constructor() {

    Happens(this);

    this.routes = [
      {id: 'home',     path: '/'},
      {id: 'example',  path: '/example/:id?'}
    ]

  }

  init() {

    this.routes.map(route => {
      
      Page(route.path, ctx => {

        this.navigate(ctx, route);

      });

    });

    Page('*', this.notFound.bind(this));

    Page();

  }

  navigate(ctx, route) {

    const pageId = route.id;
    const userId = ctx.params.id ? ctx.params.id : void 0;

    this.emit('url:changed', pageId, userId);

  }

  notFound(ctx) {

    console.error('404 page not found for:', ctx.path);
    console.warn('Redirecting to home...');

    Page.redirect('/');

  }

}

export default new AppRouter();