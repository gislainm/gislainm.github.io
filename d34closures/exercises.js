"use strict";
/*eslint-disable*/

// function makeCounter() {
//     let count = 0;
//     let innerFunc = function () {
//         count = count + 1;
//         return count;
//     };
//     return innerFunc;
// }

// let counter1 = makeCounter();
// let counter2 = makeCounter();
// counter1();
// counter1();
// counter2();

// console.log(counter1());
// console.log(counter2());

// function makeCounter() { // instead of:
//     // let count = 0
//     function counter() {
//         counter.count += 1;
//         return counter.count; //instead of return count
//     };
//     counter.count = 0;
//     return counter;
// }
// let counter = makeCounter();
// console.log(counter); // 1

// let x = 1;

// function func() {
//     console.log(x); // ? 
//     console.log(y);
//     let y = 2;
   
// }
// func();

function sum(num1){
return function(num2){
    return num1 + num2;
}
}
console.log(sum(4)(-2))
