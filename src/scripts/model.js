import Happens from 'happens'

class AppModel {

  constructor() {

    Happens(this);

    let url = 'json/data.json';

    let promise = fetch(url).then(response => {
    
      return response.json();

     });

    promise.then(data => {

      this.emit('data:loaded', data);

    });

  }

}

export default new AppModel();