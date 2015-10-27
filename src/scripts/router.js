import Happens from 'happens';
import Page    from 'page';
import Config  from 'app/config';
import Model   from 'app/model';

class Router {

  constructor() {

    Happens(this);

    this.bindEvents();

  }

  bindEvents() {

    Model.on('data:loaded', this.init.bind(this));

  }

  init(data) {

    this.data = data;

    Page('/', this.navigate.bind(this));
    Page('/example', this.navigate.bind(this));
    Page('/example/:id', this.navigate.bind(this));
    Page('*', this.notFound.bind(this));
    Page();

    this.emit('data:ready');

  }

  navigate(ctx) {

    let id = ctx.path.split('/')[1];

    if (id.length === 0) { id = 'home'; }

    this.pageId = id;
    this.userId = ctx.params.id ? ctx.params.id : null;

    this.emit('url:changed');

  }

  go(url) {

    Page(url);

  }

  notFound(ctx) {

    console.warn('404 page not found for:', ctx.path);

  }

}

export default new Router();