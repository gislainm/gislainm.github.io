"use strict";
/** 
* 
* @param {int} num - Given number
* @returns {function} - true if num is prime, otherwise false.
*/
function testPrime(num) {
    for (let i = 2; i < num; i++) {
        if ((num % i) === 0) {
            return false;
        }
    }
    return true;
}
console.log(testPrime(7));
console.log(testPrime(12));