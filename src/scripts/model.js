/**
 * @fileoverview ~ Parse data from external JSON
 */

import $       from 'jquery';
import Happens from 'happens';
import Config  from 'app/config';

class AppModel {

  constructor() {

    Happens(this);

    this.getData();

  }

  getData() {

    const url = `json/${Config.language}/data.json`;

    $.get(url).then(data => {

      this.emit('data:loaded', data);

    });

  }

}

export default new AppModel();