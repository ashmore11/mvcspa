import Config from './config';

/**
 * Use the fetch API to grab the apps data from an external json file
 */
const Model = function() {

  const url = `json/${Config.language}/data.json`;

  return fetch(url).then(response => { return response.json(); });

}

export default Model;