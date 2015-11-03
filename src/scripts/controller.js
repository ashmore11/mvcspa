import $       from 'jquery';
import Router  from 'app/router';
import Header  from 'app/common/header.js';
import Footer  from 'app/common/footer.js';

export default class AppController {

  init(data) {

    this.data = data;

    this.renderCommonElements();

    Router.on('url:changed', this.render.bind(this));

    Router.init();

  }

  render(pageId, userId) {

    const view     = require(`app/views/${pageId}`);
    const template = require(`templates/views/${pageId}.jade`);
    const data     = {
      page: this.data.pages[pageId],
      user: this.data.users[userId] || void 0,
    };

    this.renderTemplate(template, data);

    this.renderView(view);

  }

  renderTemplate(template, data) {

    const $main = $('#main');

    $main.html(template(data));

  }

  renderView(view) {

    this.view = new view();

  }

  renderCommonElements() {

    const header = new Header(this.data.partials.header);
    const footer = new Footer(this.data.partials.footer);

  }

}