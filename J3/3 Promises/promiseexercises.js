const fetch = require('node-fetch')
const fs = require('fs')

/*Modify your solution to exercise 2 from the previous section to use axios or node-fetch: Send a request to [https://www.c0d3.com/api/lessons](https://www.c0d3.com/api/lessons) and write all the titles into a file called lessons.html with the following content:

<h1>title1</h1><h1>title2</h1>...<h1>titleX</h1>
*/

module.exports = {
  getLessons : () => {
    fetch('https://www.c0d3.com/api/lessons')
      .then(res => {
        return res.json()
      })
      .then(data => {
        const titles = data.reduce((acc, f) => {
          return `${acc}<h1>${f.title}</h1>`
        }, '')
        fs.writeFile('lessons.html', titles, () => {})
      })
  }
}
