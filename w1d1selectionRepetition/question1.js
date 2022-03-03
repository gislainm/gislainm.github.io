const prompt = require("prompt-sync")();
let salesmanWages = (prompt('What is your wages: ')).toLowerCase();
let sales = Number(prompt('What is your sales: '));
let commission = 0;
if (salesmanWages === 'salaried') {
    if (sales < 300) {
        console.log('You have no commision.');
    } else if (sales > 300 && sales < 500) {
        commission += (0.01 * sales);
        console.log(`Your commission is: ${commission}`)
    } else if (sales >= 500) {
        commission += (0.02 * sales);
        console.log(`Your commission is: ${commission}`)
    }
} else if (salesmanWages === "not salaried") {
    if (sales < 300) {
        console.log('You have no commision.');
    } else if (sales > 300 && sales < 500) {
        commission += (0.02 * sales);
        console.log(`Your commission is: ${commission}`)
    } else if (sales >= 500) {
        commission += (0.03 * sales);
        console.log(`Your commission is: ${commission}`)
    }
}

