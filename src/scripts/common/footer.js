import $        from 'jquery';
import Template from 'templates/common/footer.jade';

export default class Footer {

  constructor(data) {

    this.data = data;

    this.render();

  }

  render() {

    const $body = $('body');

    $body.append(Template(this.data));

  }

}