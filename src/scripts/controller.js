import Router from 'app/router';
import Header from 'templates/common/header.jade';
import Footer from 'templates/common/footer.jade';

class Controller {

  constructor() {

    Router.once('data:ready', this.init.bind(this));
    Router.on('url:changed', this.render.bind(this));

  }

  init() {

    this.renderCommonElements();

  }

  render() {

    let View     = require(`app/views/${Router.pageId}`);
    let Template = require(`templates/views/${Router.pageId}.jade`);
    let Data     = Router.data.page;

    document.title = Data.meta.title;

    $('#main').html(Template(Data));

    this.view = new View();

  }

  renderCommonElements() {

    const body = $('body');

    let headerData = {
      routes : Router.routes,
      data   : Router.data.header,
    };

    body.prepend(Header(headerData));
    body.append(Footer(Router.data.footer));

  }

}

export default Controller;