import Router from 'app/router';
import Header from 'app/common/header.js';
import Footer from 'app/common/footer.js';

export default class AppController {

  /**
   * Initialise the apps controller
   * @param {Object} Object containing all the data needed for the app
   */
  init(data) {

    this.data = data;

    this.renderCommonElements();

    Router.on('url:changed', this.render.bind(this));

    Router.init();

  }

  /**
   * Render the view
   * @param {String} Id of the page to be rendered
   * @param {String} User Paramater passed from the url
   */
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

  /**
   * Render the Jade template
   * @param {String} String of html
   * @param {Object} Data specific to the current page
   */
  renderTemplate(template, data) {

    const main = document.getElementById('main');

    main.innerHTML = template(data);

  }

  /**
   * Create the class to manipulate the html
   * @param {class}
   */
  renderView(view) {

    this.view = new view();

  }

  /**
   * Render the apps common elements (header/footer)
   */
  renderCommonElements() {

    const header = new Header(this.data.partials.header);
    const footer = new Footer(this.data.partials.footer);

  }

}