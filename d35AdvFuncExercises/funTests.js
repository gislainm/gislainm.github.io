"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
//module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {array} arr - input array
 * @param {function} func - input function
 * @returns {array} - new array 
 */
function myMap(arr, func) {
    let newArr = [];
    for (let element of arr) {
        newArr.push(func(element));
    }
    return newArr;
}

/**
 * 
 * @param {array} arr - input array
 * @param {function} func - input function
 * @returns {array} - new array
 */
function myFilter(arr, func) {
    let newArr = [];
    for (let element of arr) {
        if (func(element)) {
            newArr.push(element);
        }
    }
    return newArr;
}

/**
 * 
 * @param {array} arr - input array
 * @param {function} func -input function
 * @param {num} initialValue - input number
 * @returns {undefined} - new value
 */
function myReduce(arr, func, initialValue) {
    let currentValue = func(initialValue, arr[0]);
    for (let i = 1; i < arr.length; i++){
        currentValue = func(currentValue,arr[i]);
    }
    return currentValue;
}