"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
module.exports = { maxOfThree, sum, multiply, findLongestWord, reverseArray, reverseArrayInPlace, scoreExams, generateArray }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} num1 - is a number
 * @param {number} num2 - is a number 
 * @param {number} num3 - is a number
 * @returns {number} - largest of num1, num2, num3
 */
function maxOfThree(num1, num2, num3) {
    if ((num1 >= num2) && (num1 >= num3)) {
        return num1;
    } else if ((num2 >= num1) && (num2 >= num3)) {
        return num2;
    } else {
        return num3;
    }
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
    let result = 0;
    for (let number of arr) {
        result += number;
    }
    return result;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} product of arr numbers
 */
function multiply(arr) {
    let result = 1;
    for (let number of arr) {
        result *= number;
    }
    return result;
}

/**
 * 
 * @param {array} arr - array of strings 
 * @returns {function} - the longest word in the array
 */
function findLongestWord(arr) {
    let longestWord = "";
    for (let element of arr) {
        if (element.length > longestWord.length) {
            longestWord = element;
        }
    }
    return (longestWord.length);
}

/**
 * 
 * @param {array} arr - array of elements
 * @returns {array} - new array which is arr reversed
 */
function reverseArray(arr) {
    let newArray = [];
    for (let element of arr) {
        newArray.unshift(element);
    }
    return newArray;
}

/**
 * 
 * @param {array} arr - array of elements 
 * @returns {array} - original array reversed
 */
function reverseArrayInPlace(arr) {
    let newArray = [];
    for (let element of arr) {
        newArray.unshift(element);
    }
    arr = newArray;
    return arr;
}

/**
 * 
 * @param {array} studentAnswers - multidimensional array of students' answers
 * @param {array} correctAnswers - array of correct answers
 * @returns {array} - array of correct answers for each student
 */
function scoreExams(studentAnswers, correctAnswers) {
    let scoreArray = [];
    let studentScore = 0;

    for (let array of studentAnswers) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === correctAnswers[i]) {
                studentScore += 1;
            }
        }
        scoreArray.push(studentScore);
        studentScore = 0;
    }
    return scoreArray;
}

/**
 * 
 * @param {int} num1 - first number 
 * @param {int} num2 - second number 
 * @returns {array} - multidimensional array
 */
function generateArray(num1, num2) {
    let finalArray = [];
    let count = 1;
    for (let i = 1; i <= num1; i++) {
        finalArray.push([]);
    }
    for (let j = 0; j < finalArray.length; j++) {
        // eslint-disable-next-line id-length
        for (let k = 0; k < num2; k++) {
            finalArray[j].push(count);
            count += 1;
        }
    }
    return finalArray;
}