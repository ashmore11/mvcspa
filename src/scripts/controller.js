import Router from 'app/router';
import Header from 'templates/common/header.jade';
import Footer from 'templates/common/footer.jade';

class Controller {

  constructor() {

    this.bindEvents();

  }

  bindEvents() {

    Router.once('data:ready', this.init.bind(this));
    Router.on('url:changed', this.render.bind(this));
    
  }

  init() {

    this.renderCommonElements();

  }

  render() {

    const View     = require(`app/views/${Router.pageId}`);
    const Template = require(`templates/views/${Router.pageId}.jade`);
    const Data     = {
      page: Router.data.pages[Router.pageId],
      user: Router.data.users[Router.userId],
    };

    document.title = Data.page.meta.title;

    const $main = $('#main');

    $main.html(Template(Data));

    this.view = new View();

  }

  renderCommonElements() {

    const $body = $('body');

    $body.prepend(Header(Router.data.partials.header));
    $body.append(Footer(Router.data.partials.footer));

  }

}

export default Controller;