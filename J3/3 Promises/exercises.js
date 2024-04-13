const fs = require('fs');

const makeFiles = (num, i = 0) => {
  if(i > num) return;
  fs.writeFile(`./trainer${i}.txt`, "Gotta catch 'em all", () => {})
  return makeFiles(num, i + 1);  
}


//Write a function called listFiles that reads the current folder and creates a file called files.html
const listFiles = () => {
  fs.readdir('./', (err, files) => {
    const str = files.reduce((acc, f) => {
      return acc + `<h1>${f}</h1>`
    },'')
    fs.writeFile(`./files.html`, str, () => {})
  })
  
}
listFiles();

module.exports = {
  makeFiles
}
