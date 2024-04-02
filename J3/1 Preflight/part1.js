function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

function firstLongerThan(arr, num) {
  return arr.find(ele => {
    return ele.length > num;
  })
}

function getReturnValues(arr) {
  return arr.map(ele => {
    return ele();
  });
}

const zeroSquare = (num, arr=[]) => {
  if (arr.length === num) return arr;
  const row = new Array(num).fill(0, 0);
  arr.push(row);
  return zeroSquare(num, arr);  
}
console.log(zeroSquare(4));

module.exports = {
  mergeArrays,
  firstLongerThan,
  getReturnValues,
  zeroSquare
}
