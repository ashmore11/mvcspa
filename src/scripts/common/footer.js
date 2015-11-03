import $        from 'jquery';
import Template from 'templates/common/footer.jade';

class Footer {

  constructor(data) {

    this.data = data;

    this.render();

  }

  render() {

    const $body = $('body');

    $body.append(Template(this.data));

  }

}

export default Footer;