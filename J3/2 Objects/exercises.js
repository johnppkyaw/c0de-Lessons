//Write a function called addKV that takes in an object, 2 strings (key and value), and adds a new key and value to an object.

function addKV(object, key, value) {
  object[key] = value;
}

//Write a function called filterNonKeys that filters an array to only include strings that are also keys in a given object.
function filterNonKeys(arr, obj) {
  return arr.filter(ele => obj[ele]);  
}

//Write a function called addDescriptions that adds a description key to each object in an array. The description should go with the name that matches the key in the input object.
function addDescriptions(objArr, infoObj) {
  for(const obj of objArr) {
    if(infoObj[obj.name]) {
      obj.description = infoObj[obj.name]
    }
  }
}

//Write a function called countOccurrences that returns an object that counts how many times each item occurs in an array.
function countOccurrences(arr) {
  const result = arr.reduce((acc, ele) => {
    acc[ele] = (acc[ele] || 0) + 1
    return acc
  }, {})
  return result;
}

//Write a function called longestString that finds the longest value string in an object.
function longestString(obj) {
  result = Object.values(obj).reduce((acc, ele) => {
    if(ele.length > acc.length) {
      acc = ele;
    }
    return acc;
  },"");
  return result;
}

//Write a function called keyOfLongestString that finds the longest value string but returns its key.
function keyOfLongestString(obj) {
  if(Object.keys(obj).length === 0) return undefined;
  return Object.keys(obj).reduce((acc, ele) => {
    if(obj[ele].length > obj[acc].length) {
      acc = ele;
    }
    return acc;
  });
}

//Use your keyOfLongestString function to write a function called removeLongestString.
function removeLongestString(obj) {
  delete obj[keyOfLongestString(obj)];
}

//Write a function called commas that returns a string of all of an object's values separated by commas.
function commas(obj) {
  return Object.values(obj).join(", ");
}

//Write a function called headers that joins all of an object's keys inside <h1> tags.
function headers(obj) {
  return Object.keys(obj).reduce((acc, el) => {
    acc = acc + `<h1>${el}</h1>`;
    return acc;
  }, "");
}

//Part 2: Modify your function so that it returns both keys and values inside the <h1> tags.

function headers2(obj) {
  return Object.keys(obj).reduce((acc, el) => {
    acc = acc + `<h1>${el}: ${obj[el]}</h1>`;
    return acc;
  }, "");
}

//Part 3: Finally, modify your function so that it returns a string of joined keys and values, separated into <div>s and with keys in <h1>s and values in <h2>s.
function headers3(obj) {
  return Object.entries(obj).reduce((acc, el) => {
    acc = acc + `<div><h1>${el[0]}</h1><h2>${el[1]}</h2></div>`;
    return acc;
  }, "");
}

//Write a forEach function for objects.
Object.prototype.forEach = function(fun, )

module.exports = {
  addKV,
  filterNonKeys,
  addDescriptions,
  countOccurrences,
  longestString,
  keyOfLongestString,
  removeLongestString,
  commas,
  headers,
  headers2,
  headers3
}
