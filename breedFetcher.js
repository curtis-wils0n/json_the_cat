const args = process.argv.slice(2);
const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, function(error, response, body) {
  try {
    const data = JSON.parse(body);
    console.log(data[0].description);
    console.log(typeof data);
  } catch (error) {
    console.log('Error encountered: ', error);
  }
});