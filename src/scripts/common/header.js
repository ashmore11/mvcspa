import {routes} from 'app/router';
import Template from 'templates/common/header.jade';

export default class Header {

  constructor(data) {

    this.data = Object.assign(data, {routes});

    this.render();

  }

  render() {

    const body = document.body;
    const div  = document.createElement('div');

    div.innerHTML = Template(this.data);

    body.insertBefore(div.firstChild, body.childNodes[0]);

  }

}