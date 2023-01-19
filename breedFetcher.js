const request = require('request');
const args = process.argv.slice(2);
const breed = args[0];
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;
request(URL, (error, response, body) => {
  if (error) {
    return console.log(error);
  }
  if (response.statusCode !== 200) {
    return console.log(response.statusCode);
  }
  const [data] = JSON.parse(body); // destructuring
  if (!data) {
    console.log("Breed not found");
  } else {
    console.log(data[0].description);
  }
});