"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
module.exports = { double, times100, myMap }; //add all of your function names here that you need for the node mocha tests

/**
 * @param {int} num - Is the input number 
 *@returns {number} double of the input
 */
function double(num) {
    return num * 2;
}


/**
 * @param {int} num - Is the input number
 * @returns {number} 100 times the input number
 */
function times100(num) {
    return num * 100;
}


/**
 * @param {array} arr - Is the input array
 * @param {function} inputFunction - Is a function input
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(arr, inputFunction) {
    let newArr = [];
    for (let element of arr) {
        newArr.push(inputFunction(element));
    }
    return newArr;
}

/**
 * 
 * @param {num} num - input number 
 * @returns {function} - input number times 3
 */
let anonymousFunc = function (num) { return num * 3; };
let arrowFunc = (num) => { return num * 3; };



