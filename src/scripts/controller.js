import $      from 'jquery';
import Router from 'app/router';
import Header from 'templates/common/header.jade';
import Footer from 'templates/common/footer.jade';

class AppController {

  constructor() {

    this.bindEvents();

  }

  bindEvents() {

    Router.once('router:ready', this.init.bind(this));
    Router.on('url:changed', this.render.bind(this));
    
  }

  init() {

    this.renderCommonElements();

  }

  render() {

    const view     = require(`app/views/${Router.pageId}`);
    const template = require(`templates/views/${Router.pageId}.jade`);
    const data     = {
      page: Router.data.pages[Router.pageId],
      user: Router.data.users[Router.userId] || void 0,
    };

    this.renderTemplate(template, data);

    this.renderView(view);

  }

  renderTemplate(template, data) {

    const $main = $('#main');

    $main.html(template(data));

  }

  renderView(view) {

    return new view();

  }

  renderCommonElements() {

    const $body = $('body');

    $body.prepend(Header(Router.data.partials.header));
    $body.append(Footer(Router.data.partials.footer));

  }

}

export default AppController;