"use strict";
/*eslint-disable*/

function printNumbers(from, to) {
    let count = from;
    let timerId = setInterval(function () {
        console.log(count);
        if (count == to) {
            clearInterval(timerId);
        } else {
            count++;
        }
    }, 1000);
    return "Yasss boiiii"
}
console.log(printNumbers(1,5))

function printNumber2(from, to) {
    let count = from;
    setTimeout(function go() {
        console.log(count);
        if (count < to) {
            setTimeout(go, 1000);
            count++;
        }
    }, (from * 1000))
    return "your boiiii"
}
console.log(printNumber2(5, 9));