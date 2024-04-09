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

describe('longestString function', () => {
  it('should find the longest string from the beginning of an object', () => {
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    expect(fn.longestString(info)).toEqual('arrogant')
  })
  it('should find the longest string from the end of an object', () => {
    const leaders = {
      vermilion: 'Surge',
      cinnabar: 'Blaine',
      fuchsia: 'Koga',
      saffron: 'Sabrina'
    }
    expect(fn.longestString(leaders)).toEqual('Sabrina')
  })
  it('should return the empty string for an empty object', () => {
    expect(fn.longestString({})).toEqual('')
  })
})

describe('keyOfLongestString function', () => {
  it('should find key of longest string in the beginning of an object', () => {
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    expect(fn.keyOfLongestString(info)).toEqual('ironman')
  })
  it('should find key of longest string at the end of an object', () => {
    const leaders = {
      vermilion: 'Surge',
      cinnabar: 'Blaine',
      fuchsia: 'Koga',
      saffron: 'Sabrina'
    }
    expect(fn.keyOfLongestString(leaders)).toEqual('saffron')
  })
  it('should return undefined (no key) for an empty object', () => {
    expect(fn.keyOfLongestString({})).toEqual(undefined)
  })
})

describe('removeLongestString function', () => {
  it('should remove the longest string in the beginning of an object', () => {
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    fn.removeLongestString(info)
    expect(info).toEqual({ spiderman: 'naive', hulk: 'strong' })
  })
  it('should remove the longest string at the end of an object', () => {
    const leaders = {
      vermilion: 'Surge',
      cinnabar: 'Blaine',
      fuchsia: 'Koga',
      saffron: 'Sabrina'
    }
    fn.removeLongestString(leaders)
    expect(leaders).toEqual({
      vermilion: 'Surge',
      cinnabar: 'Blaine',
      fuchsia: 'Koga'
    })
  })
  it('should work on an empty object', () => {
    const imEmpty = {}
    fn.removeLongestString(imEmpty)
    expect(imEmpty).toEqual({})
  })
})

describe('commas function', () => {
  it('should separate three items', () => {
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    expect(fn.commas(info)).toEqual('arrogant, naive, strong')
  })
  it('should put no commas if only one element', () => {
    expect(fn.commas(['funny'])).toEqual('funny')
  })
  it('should return an empty string if no elements', () => {
    expect(fn.commas([])).toEqual('')
  })
})

describe('headers function (part 1)', () => {
  it('should create h1s for 3 items', () => {
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    expect(fn.headers(info)).toEqual(
      '<h1>ironman</h1><h1>spiderman</h1><h1>hulk</h1>'
    )
  })
  it('should create headers for 4 elements', () => {
    const leaders = {
      vermilion: 'Surge',
      cinnabar: 'Blaine',
      fuchsia: 'Koga',
      saffron: 'Sabrina'
    }
    expect(fn.headers(leaders)).toEqual(
      '<h1>vermilion</h1><h1>cinnabar</h1><h1>fuchsia</h1><h1>saffron</h1>'
    )
  })
  it('should return an empty string if no elements', () => {
    expect(fn.headers([])).toEqual('')
  })
})

describe('headers function (part 2)', () => {
  it('should create h1s for 3 items', () => {
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    // The line breaks are just for ease of reading;
    //   they won't count as part of the expected
    //   solution since they're escaped with \
    const exp =
      '<h1>ironman: arrogant</h1>\
<h1>spiderman: naive</h1><h1>hulk: strong</h1>'
    expect(fn.headers2(info)).toEqual(exp)
  })
  it('should create headers for 4 elements', () => {
    const leaders = {
      vermilion: 'Surge',
      cinnabar: 'Blaine',
      fuchsia: 'Koga',
      saffron: 'Sabrina'
    }
    const exp =
      '<h1>vermilion: Surge</h1>\
<h1>cinnabar: Blaine</h1><h1>fuchsia: Koga</h1>\
<h1>saffron: Sabrina</h1>'
    expect(fn.headers2(leaders)).toEqual(exp)
  })
  it('should return an empty string if no elements', () => {
    expect(fn.headers2([])).toEqual('')
  })
})


describe('headers function (part 3)', () => {
  it('should create h1s for 3 items', () => {
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    const exp =
      '<div><h1>ironman</h1><h2>arrogant</h2></div>\
<div><h1>spiderman</h1><h2>naive</h2></div>\
<div><h1>hulk</h1><h2>strong</h2></div>'
    expect(fn.headers3(info)).toEqual(exp)
  })
  it('should create headers for 4 elements', () => {
    const leaders = {
      vermilion: 'Surge',
      cinnabar: 'Blaine',
      fuchsia: 'Koga',
      saffron: 'Sabrina'
    }
    const exp =
      '<div><h1>vermilion</h1><h2>Surge</h2></div>\
<div><h1>cinnabar</h1><h2>Blaine</h2></div>\
<div><h1>fuchsia</h1><h2>Koga</h2></div>\
<div><h1>saffron</h1><h2>Sabrina</h2></div>'
    expect(fn.headers3(leaders)).toEqual(exp)
  })
  it('should return an empty string if no elements', () => {
    expect(fn.headers3([])).toEqual('')
  })
})
