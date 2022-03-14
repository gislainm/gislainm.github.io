"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = { inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
function inArray(arr) {
  return function (element) {
    return arr.includes(element);
  };
}


/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
function inBetween(low, high) {
  let arr = [];
  for (let i = low; i <= high; i++) {
    arr.push(i);
  }
  return function (element) {
    return arr.includes(element);
  };

}

/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
function byField(fieldName) {
  return function (aaa, bbb) {
    return aaa[fieldName] > bbb[fieldName] ? 1 : -1;
  };
}


/**
 * @returns {Function} closure that returns it's number
 */
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let idx = i;
    let shooter = function () { // create a shooter function,
      console.log("I am shooter ", idx); // that should show its number
      return idx; //save the value of i and assign it to shooter variable
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }
  // ...and return the array of shooters
  return shooters;
}

  //army[0](); // the shooter number 0 shows 10
  //army[5](); // and number 5 also outputs 10...
