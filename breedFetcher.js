const request = require('request');

const fetchBreedDescription = function(breedname, callback) {
  const link = `https://api.thecatapi.com/v1/breeds/search?name=${breedname}`;
  request(link, (error, response, body) => {
    // console.log('this is a response', response);
    if (error) {
      console.log('error:', error);
      return callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log('Breed is not found. Please try another one.');
        return callback('Breed is not found. Please try another one.', null);
      } else {
        const description = data[0].description;
        console.log(description);
        return callback(null, description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };