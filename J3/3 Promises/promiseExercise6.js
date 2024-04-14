//Create an HTML page of all the countries in the world: https://country.register.gov.uk/records.json?page-size=500. Each country's official-name should be inside h1 tags. When you click on a name, alert the citizen-names property of that country.

const fs = require('fs');
const axios = require('axios');
const url = "https://restcountries.com/v3.1/all";

axios(url).then(res => {
  const countryList = res.data;
  const contentHTML = countryList.reduce((acc, country) => {
    return `${acc}<h1 onclick="alert('${country.name.common}')">${country.name.official}</h1>`    
  },"")
  fs.writeFile('./countries.html', contentHTML, () => {})
  
});
