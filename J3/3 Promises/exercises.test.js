const fs = require('fs');
const fn = require('./exercises.js');

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
