"use-strict";
/*eslint-disable*/

const arr = [1, 5, 16, 3, 108];

arr.forEach(function (element) {
    if (element % 2 === 0) {
        console.log(element);
    };
});

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const array = [1, 5, 18, 2, 77, 108];
const evensHelper = array.filter(isEven);
const evenElements = array.filter(element => (element % 2 === 0));
const firstEven = array.find(element => (element % 2 === 0));
const indexOfFirstEven = array.findIndex(element => (element % 2 === 0));

console.log(evenElements);
console.log(firstEven);
console.log(indexOfFirstEven);
console.log(evensHelper)