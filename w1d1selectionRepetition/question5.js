const prompt = require("prompt-sync")();
let houseCost = Number(prompt("What is the cost of the house? "));
let downPayment = 0;
if (houseCost < 50000){
    downPayment = houseCost * 0.05;
    console.log(`The down payment is $${downPayment}`);
}else if (houseCost >= 50000 && houseCost < 100000){
    downPayment = 1000 + (0.1 * (houseCost - 50000));
    console.log(`The down payment is $${downPayment}`);
}else if (houseCost >= 100000 && houseCost < 200000){
    downPayment = 2000 + (0.15 * (houseCost - 100000));
    console.log(`The down payment is $${downPayment}`);
}else if (houseCost >= 200000){
    downPayment = 5000 + (0.1 * (houseCost - 200000));
    console.log(`The down payment is $${downPayment}`);
}