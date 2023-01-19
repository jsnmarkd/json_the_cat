const request = require('request');
const URL = 'https://api.thecatapi.com/v1/breedssearch?q=';


const fetchBreedDescription = function(breedName, callback) {
  request((URL + breedName), (error, response, body) => {
    if (error) {
      return callback(error);
    }
    if (response.statusCode !== 200) {
      return callback(response.statusCode);
    }
    const [data] = JSON.parse(body); // destructuring
    const search = [data][0];
    if (!data) {
      callback(`The breed you just searched cannot be found`);
    } else {
      callback(null ,search.description);
    }
  });
};

module.exports = { fetchBreedDescription };