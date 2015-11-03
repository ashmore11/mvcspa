import Template from 'templates/common/footer.jade';

export default class Footer {

  constructor(data) {

    this.data = data;

    this.render();

  }

  render() {

    const body = document.body;
    const div  = document.createElement('div');

    div.innerHTML = Template(this.data);

    body.appendChild(div.firstChild);

  }

}