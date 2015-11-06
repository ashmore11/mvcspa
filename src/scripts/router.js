import Happens from 'happens';
import Page    from 'page';

class AppRouter {

  constructor() {

    Happens(this);

  }

  /**
   * Return an array of routes used by the app
   */
  routes() {

    return [
      {id: 'home',     path: '/'},
      {id: 'example',  path: '/example/:id?'}
    ]

  }

  /**
   * Initialise the apps router
   */
  init() {

    this.routes().map(route => {
      
      Page(route.path, ctx => {

        this.navigate(ctx, route);

      });

    });

    Page('*', this.notFound.bind(this));

    Page();

  }

  /**
   * Navigate to the current url
   * @param {Object} Context data relative to the current route
   * @param {Object} Information about the current route (id/path)
   */
  navigate(ctx, route) {

    const pageId = route.id;
    const userId = ctx.params.id ? ctx.params.id : void 0;

    this.emit('url:changed', pageId, userId);

  }

  /**
   * Navigate to 404 page if route not found
   * @param {Object} Context data relative to the current route
   */
  notFound(ctx) {

    console.error('404 page not found for:', ctx.path);
    console.warn('Redirecting to home...');

    Page.redirect('/');

  }

}

export default new AppRouter();