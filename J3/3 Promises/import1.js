const {myObj} = require('./myObj.js');
const {myFunc} = require('./myFun.js');

for(const key in myObj) {
  console.log(myFunc(key, myObj[key]));
}
