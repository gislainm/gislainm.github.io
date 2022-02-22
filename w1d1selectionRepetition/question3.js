const prompt = require("prompt-sync")();
let initialAmount = Number(prompt('What is your initial amount: '));
let interestRate = Number(prompt('What the annual interest rate: '))/100;
let numberOfMonths = Number(prompt('What is the number of years to compound: ')) * 12;
let compoundInterest = ((initialAmount * ((1 + interestRate) ** numberOfMonths)) - initialAmount);
console.log(compoundInterest);
