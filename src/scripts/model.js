import Config from 'app/config';

const Model = function() {

  const url = `json/${Config.language}/data.json`;

  return fetch(url).then(response => { return response.json(); });

}

export {Model};