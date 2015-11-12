import Router from './router';
import Header from './common/header';
import Footer from './common/footer';

export default class AppController {

  /**
   * Initialise the apps controller
   * @param {Object} Object containing all the data required in the app
   */
  init(data) {

    this.data = data;

    this.renderCommonComponents();

    Router.on('url:changed', this.render.bind(this));

    Router.init();

  }

  /**
   * Render the view
   * @param {String} Id of the page to be rendered
   * @param {String} User Paramater passed from the url
   */
  render(pageId, userId) {

    // Dynamically require views/templates to render pages on the fly
    const view     = require(`./views/${pageId}`);
    // const template = require(`templates/views/${pageId}.jade`);
    const template = Templates[`views/${pageId}`];
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
   * Create a class for manipulating the DOM
   * @param {class}
   */
  renderView(view) {

    this.view = new view();

  }

  /**
   * Render the apps common components (header/footer)
   */
  renderCommonComponents() {

    const header = new Header(this.data.partials.header);
    const footer = new Footer(this.data.partials.footer);

  }

}