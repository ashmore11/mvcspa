import Happens from 'happens';
import Config  from 'app/config';

class AppModel {

  constructor() {

    Happens(this);

    let url = `json/${Config.language}/data.json`;

    let promise = fetch(url).then(response => {
    
      return response.json();

    });

    promise.then(data => {

      this.emit('data:loaded', data);

    });

  }

}

export default new AppModel();