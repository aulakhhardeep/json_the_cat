/**
 * a command line app that makes it "easy" for users to query this dataset from the terminal.
 * Users can provide any breed name, causing the application to fetch the information from the API and print out a short description of that breed.
 */
const request = require('request');
let args = process.argv.slice(2);
const urlOfWebsite = "https://api.thecatapi.com/v1/breeds/search?q=";
let breedName = args[0];
if (!breedName) {
  console.log("Please enter a breed name."); //if no command line argument is passed
  return;
}
request(`${urlOfWebsite}${breedName}`, (error, response, body) => {
  if (error) {
    console.log(`Error occurred while fetching the data:, ${error}`);
    return;
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  if (data.length === 0) { //if breedname is not found
    console.log("Breed not found");
    return;
  }
  console.log(data[0].description); //getting first element of data array and printing the description
});
   


