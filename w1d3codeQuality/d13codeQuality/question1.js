"use strict";
module.exports = { isVowel };
/**
 * 
 * @param {string} letter -  Input a letter
 * @returns {function} - true if a letter is a vowel and false if not
 */
function isVowel(letter) {
    if (letter === "a" || letter === "e" || letter === "o" || letter === "u" || letter === "i") {
        return true;
    } else {
        return false;
    }
}