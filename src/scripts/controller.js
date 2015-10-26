import Router from 'app/router';
import Header from 'templates/common/header.jade';
import Footer from 'templates/common/footer.jade';

class AppController {

  bindEvents() {

    Router.on('url:changed', this.render.bind(this));

  }

  init(data) {
    
    this.data = data;

    this.renderCommonElements();
    this.render();

  }

  render() {

    let View     = require(`app/views/${Router.pageId}`);
    let Template = require(`templates/views/${Router.pageId}.jade`);
    let Data     = this.data.pages[Router.pageId];

    $('#main').html(Template(Data));

    this.view = new View();

  }

  renderCommonElements() {

    const body = $('body');

    body.prepend(Header(Router.routes));
    body.append(Footer(this.data.partials.footer));

  }

}

export default AppController;