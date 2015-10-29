/**
 * @fileoverview ~ Gather data and render views
 */

import $      from 'jquery';
import Router from 'app/router';
import Model  from 'app/model';
import Header from 'templates/common/header.jade';
import Footer from 'templates/common/footer.jade';

class AppController {

  constructor() {

    Model.on('data:loaded', this.init.bind(this));
    
  }

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

    const $body = $('body');

    $body.prepend(Header(this.data.partials.header));
    $body.append(Footer(this.data.partials.footer));

  }

}

export default AppController;