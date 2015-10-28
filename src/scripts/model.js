import Happens from 'happens';
import Config  from 'app/config';

class AppModel {

  constructor() {

    Happens(this);

    const url = `json/${Config.language}/data.json`;

    const promise = fetch(url).then(function(response) {
    
      return response.json();

    });

    promise.then((data) => {

      this.emit('data:loaded', data);

    });

  }

}

export default new AppModel();