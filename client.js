const fetch = require("node-fetch");
const url = "http://localhost:3000";

const getData = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(`Current Date and Time is: ${json.currentDate}`);
  } catch (error) {
    console.log(error);
  }
};
getData(url);