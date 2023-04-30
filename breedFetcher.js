const request = require('request');
let args = process.argv.slice(2);
const urlOfWebsite = "https://api.thecatapi.com/v1/breeds/search?q=";
let breedName = args[0];
request(`${urlOfWebsite}${breedName}`, (error, response, body) => {
  console.log('error:', error);//Print the error if one occured
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  console.log(data[0].description); //getting first element of data array and printing the description
});