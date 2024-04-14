
//Modify your solution to exercise 3 from the previous section to use axios or node-fetch: Send a request to https://pokeapi.co/api/v2/pokemon/ and write all the names into a file called names.html with the following content:

module.exports = {
  getPokemons : () => {
    const fetch = require('node-fetch');
    const fs = require('fs');
    fetch('https://pokeapi.co/api/v2/pokemon/').then(res => res.json())
      .then(data => {
        const names = data.results.reduce((acc, pokemon) => {
          return `${acc}<h1>${pokemon.name}</h1>`
        }, "")
        fs.writeFile('./names2.html', names, ()=>{})
      })
  }
}
