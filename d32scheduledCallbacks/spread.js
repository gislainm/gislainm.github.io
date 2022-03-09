"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = { copyArray, concat, findMin, combineObjs, findMax, concatArrElement, destructureAssign, destructureCall}; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {array} arr -input array
 * @returns {array} - copy of input array  
 */
function copyArray(arr) {
    return [...arr];
}

/**
 * 
 * @param {array} arr1 - input array
 * @param {array} arr2 - input array
 * @returns {array} - array containing arr1 and arr2
 */
function concat(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * 
 * @param {array} arr1 - input array
 * @param {variable} x - input variable
 * @returns {array} - array combining input array and variable
 */
function concatArrElement(arr1, x) {
    return [...arr1, x];
}

/**
 * 
 * @param  {array} numbers -inpur array of numbers
 * @returns {num} - minimum number in the input array
 */
function findMin(...numbers) {
    return Math.min(...numbers);
}

function findMax(...numbers) {
    return Math.max(...numbers);
}

/**
 * 
 * @param {object} obj1 -input object
 * @param {object} obj2 -input object
 * @returns {object} - object combining the two input objects
 */
function combineObjs(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

//Write code to illustrate the use of the rest operator
/**
 * 
 * @param {array} arr - input array 
 * @returns {array} - array of some elements from input array
 */
function destructureAssign(arr) {
    let [elem1, elem2, ...rest] = arr;
    return rest;
}

/**
 * 
 * @param {array} - input array
 * @returns {array} - array of some elements from input array
 */
function destructureCall([x, y, ...rest]) {
    return rest;
}