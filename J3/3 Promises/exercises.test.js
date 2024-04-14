const fs = require('fs');
const fn = require('./exercises.js');
const fetch = require('node-fetch');


describe('makeFiles function', () => {
  fn.makeFiles(2)
  const files = fs.readdirSync('./')
  it('should create 3 files', () => {
    const foundAll =
      files.find(e => {
        return e === 'trainer0.txt'
      }) &&
      files.find(e => {
        return e === 'trainer1.txt'
      }) &&
      files.find(e => {
        return e === 'trainer2.txt'
      })
    expect(foundAll).toBeTruthy()
  })
  it('should put "Gotta catch \'em all" in the files', async () => {
    await fs.readFile('./trainer1.txt', { encoding: 'utf8' }, (_err, data) => {
      expect(data).toEqual("Gotta catch 'em all")
    })
  })
})

jest.mock('request')
const request = require('request')
const lessons = require('./exercises.js');

describe('lessons', () => {
  test(`console log should not be called if lessons `, () => {
    request.mockClear()
    lessons.printLessons()
    expect(request.mock.calls.length).toEqual(1)
    const firstCall = request.mock.calls[0]
    expect(firstCall[0]).toEqual('https://www.c0d3.com/api/lessons')
  })

  test('console.log should be called once if length of lessons array is 1', () => {
    request.mockClear()
    lessons.printLessons()
    console.log = jest.fn()
    request.mock.calls[0][1](
      {},
      {},
      JSON.stringify([
        {
          title: 'testing'
        }
      ])
    )
    expect(request.mock.calls.length).toEqual(1)
    expect(console.log.mock.calls[0][0]).toEqual('testing')
  })

  test('console.log should return 3 times if lessons array has 3 elements', () => {
    request.mockClear()
    lessons.printLessons()

    console.log = jest.fn()
    request.mock.calls[0][1](
      {},
      {},
      JSON.stringify([
        {
          title: 'Testing1'
        },
        {
          title: 'Testing2'
        },
        {
          title: 'Testing3'
        }
      ])
    )
    expect(console.log.mock.calls.length).toEqual(3)
    expect(console.log.mock.calls[0][0]).toEqual('Testing1')
    expect(console.log.mock.calls[1][0]).toEqual('Testing2')
    expect(console.log.mock.calls[2][0]).toEqual('Testing3')
  })
})

jest.mock('request')
const titlesDoc = require('./exercises.js')

describe('Titles Document', () => {
  test('should write two titles', () => {
    request.mockClear()
    titlesDoc.createTitlesDoc()

    fs.writeFile = jest.fn()
    request.mock.calls[0][1](
      {},
      {},
      JSON.stringify([
        {
          title: 'c0d3'
        },
        {
          title: 'recursion'
        }
      ])
    )
    expect(fs.writeFile.mock.calls.length).toEqual(1)
    expect(fs.writeFile.mock.calls[0][1]).toEqual(
      '<h1>c0d3</h1><h1>recursion</h1>'
    )
  })
})


jest.mock('request')
const pokemon = require('./exercises.js')

describe('Pokemons', () => {
  test('should write two different pokemon names', () => {
    request.mockClear()
    pokemon.getNames()

    fs.writeFile = jest.fn()
    request.mock.calls[0][1](
      {},
      {},
      JSON.stringify({
        results: [
          {
            name: 'RahiZzYyY'
          },
          {
            name: 'McGiggles'
          },
          {
            name: 'BrownDynamite'
          }
        ]
      })
    )
    expect(fs.writeFile.mock.calls.length).toEqual(1)
    expect(fs.writeFile.mock.calls[0][1]).toEqual(
      '<h1>RahiZzYyY</h1><h1>McGiggles</h1><h1>BrownDynamite</h1>'
    )
  })
})

jest.mock('request')
const getCountry = require('./exercises.js')

describe('Countries', () => {
  test('find the country with most cities', () => {
    request.mockClear()
    getCountry.getMostCities()

    console.log = jest.fn()
    request.mock.calls[0][1](
      {},
      {},
      JSON.stringify({
        results: [
          {
            name: 'Narnia',
            cities: 100
          },
          {
            name: 'SpaceJam',
            cities: 48
          },
          {
            name: 'Pluto',
            cities: 250
          },
          {
            name: 'Galaxy',
            cities: 20
          }
        ]
      })
    )
    expect(console.log.mock.calls[0][0]).toEqual('Pluto')
  })
})


jest.mock('request')
const pokemons = require('./exercises.js')

describe('Pokemons', () => {
  test('return 3 pokemon profiles', () => {
    request.mockClear()
    pokemons.createProfile()

    fs.writeFile = jest.fn()
    request.mock.calls[0][1](
      {},
      {},
      JSON.stringify({
        results: [
          {
            name: 'jollyRancher',
            url: 'testing1'
          },
          {
            name: 'johnnyBravo',
            url: 'tesing2'
          },
          {
            name: 'blueEyeDragon',
            url: 'testing3'
          }
        ]
      })
    )
    expect(request.mock.calls.length).toEqual(4)
    request.mock.calls[1][1](
      {},
      {},
      JSON.stringify({
        sprites: {
          front_default: 'testingPicture1'
        }
      })
    )
    request.mock.calls[2][1](
      {},
      {},
      JSON.stringify({
        sprites: {
          front_default: 'testingPicture2'
        }
      })
    )
    request.mock.calls[3][1](
      {},
      {},
      JSON.stringify({
        sprites: {
          front_default: 'testingPicture3'
        }
      })
    )
    expect(fs.writeFile.call.length).toEqual(1)
    expect(fs.writeFile.mock.calls[0][1]).toEqual(
      '<div><p>jollyRancher</p><img src="testingPicture1"/></div><div><p>johnnyBravo</p><img src="testingPicture2"/></div><div><p>blueEyeDragon</p><img src="testingPicture3"/></div>'
    )
  })
})


jest.mock('node-fetch')
const curriculum = require('./exercises.js')
describe('c0d3 lessons', () => {
  it('fs.writeFile should only run once', async () => {
    fetch.mockClear()
    fs.writeFile = jest.fn()
    fetch.mockReturnValue(
      Promise.resolve({
        json: () => {
          return [{ title: 'testing1' }, { title: 'testing2' }]
        }
      })
    )
    await curriculum.getLessons()
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fs.writeFile.mock.calls[0][1]).toEqual(
      '<h1>testing1</h1><h1>testing2</h1>'
    )
  })
})
