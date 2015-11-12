import Happens from 'happens';
import Page from 'page';

var babelHelpers = {};

babelHelpers.createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

babelHelpers.classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var Config = {
  debug: true,
  language: 'en',
  basepath: ''
};

/**
 * Use the fetch API to grab the apps data from an external json file
 */
var Model = function Model() {

  var url = 'json/' + Config.language + '/data.json';

  return fetch(url).then(function (response) {
    return response.json();
  });
};

var AppRouter = (function () {
  function AppRouter() {
    babelHelpers.classCallCheck(this, AppRouter);

    // Bind the happens event system to the AppRouter class
    Happens(this);
  }

  /**
   * Return an array of routes used by the app
   */
  babelHelpers.createClass(AppRouter, [{
    key: 'routes',
    value: function routes() {

      return [{ id: 'home', path: '/' }, { id: 'example', path: '/example/:id?' }];
    }

    /**
     * Setup routing using the page.js library
     * Info ~> https://visionmedia.github.io/page.js/
     */
  }, {
    key: 'init',
    value: function init() {
      var _this = this;

      this.routes().map(function (route) {

        Page(route.path, function (ctx) {

          _this.navigate(ctx, route);
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
  }, {
    key: 'navigate',
    value: function navigate(ctx, route) {

      var pageId = route.id;
      var userId = ctx.params.id ? ctx.params.id : void 0;

      this.emit('url:changed', pageId, userId);
    }

    /**
     * Navigate to 404 page if route doesn't exist for the current url
     * @param {Object} Context data relative to the current url
     */
  }, {
    key: 'notFound',
    value: function notFound(ctx) {

      console.error('404 page not found for:', ctx.path);
      console.warn('Redirecting to home...');

      Page.redirect('/');
    }
  }]);
  return AppRouter;
})();

var Router = new AppRouter();

var Header = (function () {
  function Header(data) {
    babelHelpers.classCallCheck(this, Header);

    this.data = Object.assign(data, { routes: routes });

    this.render();
  }

  babelHelpers.createClass(Header, [{
    key: 'render',
    value: function render() {

      var body = document.body;
      var div = document.createElement('div');
      var template = Templates['common/header'];

      div.innerHTML = template(this.data);

      body.insertBefore(div.firstChild, body.childNodes[0]);
    }
  }]);
  return Header;
})();

var Footer = (function () {
  function Footer(data) {
    babelHelpers.classCallCheck(this, Footer);

    this.data = data;

    this.render();
  }

  babelHelpers.createClass(Footer, [{
    key: 'render',
    value: function render() {

      var body = document.body;
      var div = document.createElement('div');
      var template = Templates['common/footer'];

      div.innerHTML = template(this.data);

      body.appendChild(div.firstChild);
    }
  }]);
  return Footer;
})();

var AppController = (function () {
  function AppController() {
    babelHelpers.classCallCheck(this, AppController);
  }

  babelHelpers.createClass(AppController, [{
    key: 'init',

    /**
     * Initialise the apps controller
     * @param {Object} Object containing all the data required in the app
     */
    value: function init(data) {

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
  }, {
    key: 'render',
    value: function render(pageId, userId) {

      // Dynamically require views/templates to render pages on the fly
      var view = require('./views/' + pageId);
      // const template = require(`templates/views/${pageId}.jade`);
      var template = Templates['views/' + pageId];
      var data = {
        page: this.data.pages[pageId],
        user: this.data.users[userId] || void 0
      };

      this.renderTemplate(template, data);

      this.renderView(view);
    }

    /**
     * Render the Jade template
     * @param {String} String of html
     * @param {Object} Data specific to the current page
     */
  }, {
    key: 'renderTemplate',
    value: function renderTemplate(template, data) {

      var main = document.getElementById('main');

      main.innerHTML = template(data);
    }

    /**
     * Create a class for manipulating the DOM
     * @param {class}
     */
  }, {
    key: 'renderView',
    value: function renderView(view) {

      this.view = new view();
    }

    /**
     * Render the apps common components (header/footer)
     */
  }, {
    key: 'renderCommonComponents',
    value: function renderCommonComponents() {

      var header = new Header(this.data.partials.header);
      var footer = new Footer(this.data.partials.footer);
    }
  }]);
  return AppController;
})();

var App = (function () {
  function App() {
    var _this = this;

    babelHelpers.classCallCheck(this, App);

    // Fetch the data from the model before starting the app
    Model().then(function (data) {
      _this.start(data);
    });
  }

  /**
   * Execute the app
   * @param {Object} Object containing all the data required in the app
   */
  babelHelpers.createClass(App, [{
    key: 'start',
    value: function start(data) {

      var controller = new AppController();

      controller.init(data);
    }
  }]);
  return App;
})();

var app = new App();

export default app;