const fn = require('./exercises.js');

describe('addKV function', () => {
  it('should add a key and value to an object', () => {
    const marvel = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    fn.addKV(marvel, 'antman', 'funny')
    expect(marvel.antman).toEqual('funny')
  })
  it('should add a key and value to an object', () => {
    const marvel = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong',
      antman: 'funny'
    }
    fn.addKV(marvel, 'wonderwoman', 'smart')
    expect(marvel.wonderwoman).toEqual('smart')
  })
  it('should add a key and value to an object', () => {
    const marvel = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong',
      antman: 'funny',
      wonderwoman: 'smart'
    }
    const b = ['leader', 'honest']
    fn.addKV(marvel, 'captainamerica', ['leader', 'honest'])
    expect(marvel.captainamerica).toEqual(b)
  })
})


describe('filterNonKeys function', () => {
  const avengers = ['ironman', 'strange', 'thor', 'spiderman', 'hulk']
  const info = {
    ironman: 'arrogant',
    spiderman: 'naive',
    hulk: 'strong'
  }
  it('should return an empty array when filtering on an empty object', () => {
    const result = fn.filterNonKeys(avengers, {})
    expect(result).toEqual([])
  })
  it('should return an empty array when starting with an empty array', () => {
    const result = fn.filterNonKeys([], info)
    expect(result).toEqual([])
  })
  it('should return an empty array if no matches are found', () => {
    const b = ['batman', 'superman', 'flash']
    const result = fn.filterNonKeys(b, info)
    expect(result).toEqual([])
  })
})

describe('addDescriptions function', () => {
  it('should add 3 descriptions to corresponding names', () => {
    const characters = [
      { name: 'ironman' },
      { name: 'spiderman' },
      { name: 'hulk' }
    ]
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    fn.addDescriptions(characters, info)
    expect(characters).toEqual([
      { name: 'ironman', description: 'arrogant' },
      { name: 'spiderman', description: 'naive' },
      { name: 'hulk', description: 'strong' }
    ])
  })
  it('should not add descriptions to objects without names', () => {
    const characters = [
      { tonyStark: 'ironman' },
      { peterParker: 'spiderman' },
      { name: 'hulk' }
    ]
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    fn.addDescriptions(characters, info)
    expect(characters).toEqual([
      { tonyStark: 'ironman' },
      { peterParker: 'spiderman' },
      { name: 'hulk', description: 'strong' }
    ])
  })
  it('should ignore unmatched keys', () => {
    const characters = [
      { name: 'ironman' },
      { name: 'rocket' },
      { name: 'drax' }
    ]
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    fn.addDescriptions(characters, info)
    expect(characters).toEqual([
      { name: 'ironman', description: 'arrogant' },
      { name: 'rocket' },
      { name: 'drax' }
    ])
  })
})

describe('countOccurrences function', () => {
  it('should count occurrences of strings', () => {
    const abc = ['abc', 'a', 'abc', 'b', 'abc', 'a', 'b', 'c', 'abc']
    const result = fn.countOccurrences(abc)
    expect(result).toEqual({ abc: 4, a: 2, b: 2, c: 1 })
  })
  it('should count occurrences of numbers', () => {
    const nums = [0, 3, 3, 1, 0, 0, 3, 0, 0, 2]
    const result = fn.countOccurrences(nums)
    expect(result).toEqual({ 0: 5, 3: 3, 1: 1, 2: 1 })
  })
  it('should return an empty object for an empty array', () => {
    const result = fn.countOccurrences([])
    expect(result).toEqual({})
  })
})
