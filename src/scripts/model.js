import { language } from 'app/config';

/**
 * Use the fetch API to grab the data from an external json file
 */
const Model = function() {

  const url = `json/${language}/data.json`;

  return fetch(url).then(response => { return response.json(); });

}

export default Model;