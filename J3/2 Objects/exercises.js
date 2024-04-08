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


module.exports = {
  addKV,
  filterNonKeys,
  addDescriptions,
  countOccurrences
}
