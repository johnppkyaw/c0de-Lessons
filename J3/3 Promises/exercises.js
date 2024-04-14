const fs = require('fs');
const request = require('request');
const fetch = require("node-fetch");

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


//Send a request to [https://www.c0d3.com/api/lessons](https://www.c0d3.com/api/lessons) and console.log all the titles.
const printLessons = () => {
  request('https://www.c0d3.com/api/lessons', (err, res, data) => {
  const dataArr = JSON.parse(data);
  dataArr.forEach(data => {
    console.log(data.title);
  })
})  
}

//Send a request to [https://www.c0d3.com/api/lessons](https://www.c0d3.com/api/lessons) and write all the titles into a file called lessons.html with the following content:
const createTitlesDoc = () => {
  request('https://www.c0d3.com/api/lessons', (err, res, data) => {
  const dataArr = JSON.parse(data);
  const str = dataArr.reduce((acc, data) => {
    return acc + `<h1>${data.title}</h1>`
  },"")
  fs.writeFile('./lessons.html', str, () => {})
})
}

//Send a request to https://pokeapi.co/api/v2/pokemon/ and write all the names into a file called names.html with the following content: <h1>name1</h1><h1>name2</h1>...<h1>nameX</h1>
const getNames = () => {
  request('https://pokeapi.co/api/v2/pokemon/', (err, res, data) => {
    const pokemonData = JSON.parse(data).results;
    const str = pokemonData.reduce((acc, ele) => {
      return acc + `<h1>${ele.name}</h1>`;
    }, '')
    fs.writeFile('./names.html', str, () => {});
  })
}

//Send a request to https://api.openaq.org/v1/countries to get all countries, and console.log the country with the largest number of cities.
const getMostCities = () => {
  request('https://api.openaq.org/v1/countries', (err, res, data) => {
    const countriesData = JSON.parse(data).results;
    const countryWithMostCities = countriesData.reduce((acc, country) => {
      if(country.cities > acc[1]) {
        acc[0] = country.name;
        acc[1] = country.cities;
      }
      return acc;
    }, [null, 0])
    console.log(countryWithMostCities[0]);
  })
}

//Send a request to https://pokeapi.co/api/v2/pokemon/ and console.log the Pokemon that weighs the most out of the first 20 Pokemon (if you don't give it a limit, the Pokemon API will default to 20 Pokemon). Look at the response—you will notice that each Pokemon has a URL. You need to send another request for each Pokemon to get its weight.
// const getEachPokemon = (url) => {
//   let pokemonData;
//   request(url, (err, res, data) => {
//     pokemonData = JSON.parse(data);
//   })
//   console.log(pokemonData);
// }
const heaviestPokemon = () => {
  request('https://pokeapi.co/api/v2/pokemon/', (err, res, data) => {
    const pokemonData = JSON.parse(data).results;
    const pokemonList = [];
    pokemonData.forEach(data => {
      const name = data.name;
      request(data.url, (err, res, body) => {
        const data = JSON.parse(body);
        const weight = data.weight;
        pokemonList.push({name: name, weight: weight});
        if(pokemonList.length === pokemonData.length) {
          const heaviest = pokemonList.reduce((acc, poke) => {
            if(poke.weight > acc.weight) {
              return poke;
            }
            return acc;
          }, pokemonList[0])
          console.log(`Heaviest Pokemon is ${heaviest.name} at ${heaviest.weight} pounds`)
        }      
      })
    })
  })
}


/*
Send a request to https://pokeapi.co/api/v2/pokemon/ and then send a request to get information for each Pokemon to get its image (sprites.front_default). Create an HTML page with 100 Pokemons' names and images.

(To get 100 Pokemon instead of 20, just pass a parameter into the URL: https://pokeapi.co/api/v2/pokemon?limit=100.)

The HTML img tag is a single tag that takes the URL of an image in its src (source) attribute.
*/

const createProfile = () => {
  request('https://pokeapi.co/api/v2/pokemon?limit=100', (err, res, body) => {
    const pokemonData = JSON.parse(body).results;
    let str = "";
    pokemonData.forEach((pokemon, index) => {
      request(pokemon.url, (err, res, body) => {
        const pokemonImgURL = JSON.parse(body).sprites.front_default;
        str += `<div><p>${pokemon.name}</p><img src="${pokemonImgURL}"/></div>`
        if(index == pokemonData.length - 1) {
          fs.writeFile('./pokemons.html', str, () => {})
        }
      })
    })
  })
}

//Complete the below all the way up to e.com so that it has the same result as the axios example!
// const allData = []
// const resultOfDataPromise = fetch('https://a.com').then( (r) => {
//     // json is a function that turns the response string into a JavaScript data type
//   return r.json()
// }).then( (aData) => {
//   allData.push(aData)
//   return fetch('https://b.com')
// }).then( (r) => {
//   return r.json()
// }).then( (bData) => {
//   allData.push(bData)
//   return fetch('https://c.com')
// }).then( (r) => {
//   return r.json()
// }).then( (cData) => {
//   allData.push(cData)
//   return fetch('https://d.com')
// }).then( (r) => {
//   return r.json()
// }).then( (dData) => {
//   allData.push(dData)
//   return fetch('https://e.com')
// }).then( (r) => {
//   return r.json()
// }).then( (eData) => {
//   allData.push(eData)
// })




module.exports = {
  makeFiles,
  printLessons,
  createTitlesDoc,
  getNames,
  getMostCities,
  createProfile,
  getLessons
}
