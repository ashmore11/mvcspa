export default class Footer {

  constructor(data) {

    this.data = data;

    this.render();

  }

  render() {

    const body     = document.body;
    const div      = document.createElement('div');
    const template = Templates['common/footer'];

    div.innerHTML = template(this.data);

    body.appendChild(div.firstChild);

  }

}