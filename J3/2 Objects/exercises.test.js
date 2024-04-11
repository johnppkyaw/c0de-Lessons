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

describe('forEach function', () => {
  it('should run a function 3 times on 3 elements', () => {
    const fun = jest.fn()
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    info.forEach(fun)
    expect(fun).toHaveBeenCalledTimes(3)
  })
  it('should run a function 0 times on an empty object', () => {
    const fun = jest.fn()
    const imEmpty = {}
    imEmpty.forEach(fun)
    expect(fun).not.toHaveBeenCalled()
  })
  it('should let functions access object values & positions', () => {
    const vals = []
    const fun = (_k, v, i) => {
      vals.push(i + v)
    }
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    info.forEach(fun)
    expect(vals).toEqual(['0arrogant', '1naive', '2strong'])
  })
})

describe('filter function', () => {
  const leaders = {
    vermilion: 'Surge',
    cinnabar: 'Blaine',
    fuchsia: 'Koga',
    saffron: 'Sabrina'
  }
  it('should filter based on keys', () => {
    const seven = k => {
      return k.length === 7
    }
    const result = leaders.filter(seven)
    expect(result).toEqual({ fuchsia: 'Koga', saffron: 'Sabrina' })
  })
  it('should filter based on keys', () => {
    const six = (_k, v) => {
      return v.length < 6
    }
    const result = leaders.filter(six)
    expect(result).toEqual({ vermilion: 'Surge', fuchsia: 'Koga' })
  })
  it('should return an empty object if no matches', () => {
    const celadon = k => {
      return k === 'Celadon'
    }
    const result = leaders.filter(celadon)
    expect(result).toEqual({})
  })
})

describe('reduce function', () => {
  it('should let functions access keys, values, & positions', () => {
    const fun = (acc, key, value, i) => {
      return acc + `${key}-${i}-${value},`
    }
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    const result = info.reduce(fun, '')
    const exp = 'ironman-0-arrogant,spiderman-1-naive,hulk-2-strong,'
    expect(result).toEqual(exp)
  })
  it('should return the starting value if the object is empty', () => {
    const imEmpty = {}
    const result = imEmpty.reduce(() => {}, 'I am Groot')
    expect(result).toEqual('I am Groot')
  })
})

describe('getCharCount function', () => {
  it('should count letters in an array of 3 strings', () => {
    const result = ['Charmander', 'Charmeleon', 'Charizard'].getCharCount()
    expect(result).toEqual({
      C: 3,
      h: 3,
      a: 5,
      r: 5,
      m: 2,
      n: 2,
      d: 2,
      e: 3,
      l: 1,
      o: 1,
      i: 1,
      z: 1
    })
  })
  it('should handle an empty array', () => {
    const result = [].getCharCount()
    expect(result).toEqual({})
  })
  it('should count characters in empty strings', () => {
    const result = ['Pallet', '', 'Pewter', '', 'Saffron'].getCharCount()
    expect(result).toEqual({
      P: 2,
      a: 2,
      l: 2,
      e: 3,
      t: 2,
      w: 1,
      r: 2,
      S: 1,
      f: 2,
      o: 1,
      n: 1
    })
  })
})

describe('getMostCommon function', () => {
  it('should return a number as the most common', () => {
    const result = [9, 8, 7, 8, 7, 7, 7].getMostCommon()
    expect(result).toEqual(7)
  })
  it('should return a string as the most common', () => {
    const arr = ['Batman', 8, 7, 'Batman', 'Robin']
    const result = arr.getMostCommon()
    expect(result).toEqual('Batman')
  })
  it('should return first element if all equally common', () => {
    const types = ['grass', 'poison', 'fire', 'flying', 'water', 'bug']
    const result = types.getMostCommon()
    expect(result).toEqual('grass')
  })
  it('should return null on an empty array', () => {
    const result = [].getMostCommon()
    expect(result).toEqual(null)
  })
})

describe('removeDupes function', () => {
  it('should remove 2 sets of duplicate numbers', () => {
    const data = [9, 8, 7, 8, 7, 7, 7]
    data.removeDupes()
    expect(data).toEqual([9])
  })
  it('should remove 1 set of duplicate strings', () => {
    const data = ['ice', 'electric', 'psychic', 'ice', 'ground', 'ice']
    data.removeDupes()
    expect(data).toEqual(['electric', 'psychic', 'ground'])
  })
  it('should remove duplicate boolean values', () => {
    const data = ['grass', false, 'poison', 'electric', false]
    data.removeDupes()
    expect(data).toEqual(['grass', 'poison', 'electric'])
  })
  it("shouldn't remove anything from an array with no dups", () => {
    const data = ['Pewter', 'Saffron', 'Vermilion', 'Veridian']
    data.removeDupes()
    expect(data).toEqual(['Pewter', 'Saffron', 'Vermilion', 'Veridian'])
  })
  it('should leave an empty array unchanged', () => {
    const data = []
    data.removeDupes()
    expect(data).toEqual([])
  })
})


describe('getNext function', () => {
  it('should iterate through 3 elements', () => {
    const arr = ['Edna', 'Optimus', 'Minion']
    let result = arr.getNext()
    expect(result).toEqual('Edna')
    expect(arr.getNext()).toEqual('Optimus')
    expect(arr.getNext()).toEqual('Minion')
  })
  it('should return to beginning once done', () => {
    const arr = [9, 80, 12, 2]
    expect(arr.getNext()).toEqual(9)
    expect(arr.getNext()).toEqual(80)
    expect(arr.getNext()).toEqual(12)
    expect(arr.getNext()).toEqual(2)
    expect(arr.getNext()).toEqual(9)
    expect(arr.getNext()).toEqual(80)
  })
  it('should return undefined for an empty array', () => {
    const arr = []
    expect(arr.getNext()).toEqual(undefined)
  })
  it('should iterate through one element', () => {
    const arr = ['Ironman']
    expect(arr.getNext()).toEqual('Ironman')
    expect(arr.getNext()).toEqual('Ironman')
  })
  it(`shouldn't iterate`, () => {
    const arr = []
    expect(arr.getNext()).toEqual()
    expect(arr.getNext()).toEqual()
    expect(arr.getNext()).toEqual()
    expect(arr.getNext()).toEqual()
  })
})

describe('setMaxSize prototype', () => {
  it('maxSize should stay four', () => {
    const arr = ['Michelangelo', 'Leonardo', 'Raphael']
    arr.setMaxSize(4)
    arr.push('Donatello')
    arr.setMaxSize(3)
    arr.push('Shredder')
    arr.setMaxSize(1)
    arr.push('Splinter')
    expect(arr.length).toEqual(4)
  })
  it('maxSize should increase', () => {
    const arr = ['Michelangelo']
    arr.setMaxSize(2)
    arr.push('Donatello')
    expect(arr.length).toEqual(2)
  })
  it('maxSize keeps array empty', () => {
    const arr = []
    arr.setMaxSize(0)
    arr.push('M', 'L', 'R')
    expect(arr.length).toEqual(0)
  })
})

describe('tiredForEach function', () => {
  jest.useFakeTimers()
  it('should call callback immediately when not tired', () => {
    const callback = jest.fn()
    const arr = ['Edna', 'Optimus', 'Minion']
    arr.tiredForEach(callback, 200)
    expect(callback).toHaveBeenCalled()
  })
  it('should not run function before time has passed', () => {
    const callback = jest.fn()
    const callback2 = jest.fn()
    const arr = ['Edna', 'Optimus', 'Minion']
    arr.tiredForEach(callback, 200)
    arr.tiredForEach(callback2, 200)
    expect(callback2).not.toHaveBeenCalled()
  })
  it('should work again once time has passed', () => {
    const callback = jest.fn()
    const arr = ['Edna', 'Optimus', 'Minion']
    arr.tiredForEach(callback, 200)
    jest.advanceTimersByTime(200)
    arr.tiredForEach(callback, 200)
    expect(callback).toHaveBeenCalledTimes(6)
  })
})
