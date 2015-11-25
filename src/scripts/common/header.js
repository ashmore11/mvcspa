import Router from 'app/router';
import Merge  from 'lodash/object/merge';

export default class Header {

  constructor(data) {

    const routes = Router.routes.filter(route => { return route.nav === true });

    this.data = Merge(data, {routes});

    this.render();

  }

  render() {

    const body     = document.body;
    const div      = document.createElement('div');
    const template = require('templates/common/header.jade');

    div.innerHTML = template(this.data);

    body.insertBefore(div.firstChild, body.childNodes[0]);

  }

}