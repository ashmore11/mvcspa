import {language} from 'app/config';

const Model = function() {

  const url = `json/${language}/data.json`;

  return fetch(url).then(response => { return response.json(); });

}

export default Model;