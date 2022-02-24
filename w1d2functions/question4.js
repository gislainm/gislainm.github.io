"use strict";
/* eslint-disable */
function sumDigits(num) {
    let sum = 0;
    let remNum = num;
    while (remNum > 0) {
        sum += remNum % 10;
        remNum = Math.floor(remNum / 10);
    }
    return sum;
}

function multDigits(num) {
    let product = 1;
    let remNum = num;
    while (remNum > 0) {
        product *= (remNum % 10);
        remNum = Math.floor(remNum / 10);
    }
    return product;
}
console.log(sumDigits(8));
console.log(multDigits(8));