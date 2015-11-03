import $        from 'jquery';
import {routes} from 'app/router';
import Template from 'templates/common/header.jade';

class Header {

  constructor(data) {

    this.data = Object.assign(data, {routes});

    this.render();

  }

  render() {

    const $body = $('body');

    $body.prepend(Template(this.data));

  }

}

export default Header;