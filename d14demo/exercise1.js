"use strict"
/* eslint-disable */
const scores = [10, 20, 30, 40, 50]

function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let result = sum / (arr.length);
    return result;
}
const average = findAverage(scores);
console.log(average);

const randomArr = [];
for (let i = 0; i < 10; i++) {
    randomArr[i] = Math.floor(Math.random() * 10);
}
const average2 = findAverage(randomArr);
console.log(average2);
