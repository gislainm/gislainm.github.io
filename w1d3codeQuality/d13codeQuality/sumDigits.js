"use strict";
module.exports = { sumDigits };
/**
 * 
 * @param {int} num - a number 
 * @returns {function} - sum of the number's digits
 */
function sumDigits(num) {
    let sum = 0;
    let remNum = num;
    while (remNum > 0) {
        sum += remNum % 10;
        remNum = Math.floor(remNum / 10);
    }
    return sum;
}