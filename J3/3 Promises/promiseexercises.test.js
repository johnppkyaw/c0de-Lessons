jest.mock('node-fetch')
jest.mock('fs')
const fetch = require('node-fetch')
const fs = require('fs')
const curriculum = require('./promiseexercises')

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
