const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    try {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    } catch (error) {
      callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };