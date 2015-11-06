import {language} from 'app/config';

/**
 * Use the fetch API to grab the apps data from an external file
 */
const Model = function() {

  const url = `json/${language}/data.json`;

  return fetch(url).then(response => { return response.json(); });

}

export default Model;