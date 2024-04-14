//Create an HTML file that sends a request to [https://www.c0d3.com/api/lessons](https://www.c0d3.com/api/lessons) and displays each lesson title inside an h1 tag.

const fs = require('fs');
const axios = require('axios');
const url = 'https://www.c0d3.com/api/lessons';

axios(url).then(data => {
  const content = data.data.reduce((acc, eachClass) => {
    return `${acc}<h1>${eachClass.title}</h1>`
  },"")
  fs.writeFile("./titles5.html", content, () => {})
})
