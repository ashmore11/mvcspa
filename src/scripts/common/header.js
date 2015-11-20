import Router from '../router';

export default class Header {

  constructor(data) {

    const routes = Router.routes.map(route => {
      route.nav = true ? route : return
    })

    console.log(routes);

    this.data = Object.assign(data, routes);

    this.render();

  }

  render() {

    const body     = document.body;
    const div      = document.createElement('div');
    const template = Templates['common/header'];

    div.innerHTML = template(this.data);

    body.insertBefore(div.firstChild, body.childNodes[0]);

  }

}