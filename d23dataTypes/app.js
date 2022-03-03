"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { ucFirst, getMaxSubSum, truncate, camelize, checkSpam, extractCurrencyValue }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {string} str - input string 
 * @returns {string} - the first letter capitalized
 */
function ucFirst(str) {
  if (str === "") {
    return "";
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }

}

/**
 * 
 * @param {string} str - input string 
 * @returns {boolean} - checks if spam word are included in the input string
 */
function checkSpam(str) {
  const newStr = str.toLowerCase();
  return newStr.includes("viagra") || newStr.includes("xxx");

}

/**
 * 
 * @param {string} str - input string
 * @param {num} maxlength - maximum length of string
 * @returns {string} - string not longed than the maximum length
 */
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let newStr = str.slice(0, maxlength - 1);
    return newStr + "…";
  } else {
    return str;
  }
}

/**
 * 
 * @param {string} money - input amount of money 
 * @returns {num} - the value of money in number and without the dollar sign
 */
function extractCurrencyValue(money) {
  const moneyValue = money.slice(1)
  return parseInt(moneyValue);
}



/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { 
      partialSum += item; 
      maxSum = Math.max(maxSum, partialSum); 
      if (partialSum < 0) partialSum = 0; 
    }
  
    return maxSum;
}

/**
 * 
 * @param {string} str - input string 
 * @returns {string} - input string in camelCase form
 */
function camelize(str) {
  if (str === "") {
    return "";
  } else if (str.includes("-")) {
    let strArr = str.split("-");
    let newStr = strArr[0];
    for (let i = 1; i < strArr.length; i++) {
      let newWord = strArr[i].slice(1);
      newStr = newStr + (strArr[i][0].toUpperCase() + newWord);
    }
    return newStr;

  } else {
    return str;
  }
}



