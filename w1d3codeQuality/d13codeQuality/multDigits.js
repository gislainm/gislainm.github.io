"use strict";
module.exports = { multDigits };
/**
 * 
 * @param {int} num - a number 
 * @returns {function} - product of the number's digits
 */
function multDigits(num) {
    let product = 1;
    let remNum = num;
    while (remNum > 0) {
        product *= (remNum % 10);
        remNum = Math.floor(remNum / 10);
    }
    return product;
}