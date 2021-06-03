const breed = process.argv.slice(2);
console.log("Checking breed:", breed[0]);
const request = require('request');
const query = `https://api.thecatapi.com/v1/breeds/search?name=${breed[0]}`;


request(query, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Breed is not found. Please try another one.');
    } else {
      const description = data[0].description;
      console.log(description);
    }
  }
});
