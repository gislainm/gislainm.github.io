const prompt = require("prompt-sync")();
let num = prompt("what is the number: ")
let arr = [];
let total = 0;
for (let i = 0; i < num.length; i++){
    arr.push (num[i])
}
for (let j = 0; j < arr.length; j++){
    total += Number(arr[j]);
}
console.log(total);