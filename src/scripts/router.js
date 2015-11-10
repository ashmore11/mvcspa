import Happens from 'happens';
import Page    from 'page';

class AppRouter {

  constructor() {

    // Bind the happens event system to the AppRouter class
    Happens(this);

  }

  /**
   * Return an array of routes used by the app
   */
  routes() {

    return [
      {id: 'home',    path: '/'},
      {id: 'example', path: '/example/:id?'}
    ]

  }

  /**
   * Setup routing using the page.js library
   * Info ~> https://visionmedia.github.io/page.js/
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
   * @param {Object} Context data relative to the current url
   * @param {Object} Information about the current route (id/path)
   */
  navigate(ctx, route) {

    const pageId = route.id;
    const userId = ctx.params.id ? ctx.params.id : void 0;

    this.emit('url:changed', pageId, userId);

  }

  /**
   * Navigate to 404 page if route doesn't exist for the current url
   * @param {Object} Context data relative to the current url
   */
  notFound(ctx) {

    console.error('404 page not found for:', ctx.path);
    console.warn('Redirecting to home...');

    Page.redirect('/');

  }

}

export default new AppRouter();