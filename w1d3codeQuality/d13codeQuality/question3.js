"use strict";
module.exports = { returnBalance };
/**
 * 
 * @param {int} initAmount - initial account balance
 * @param {int} annualInterestRate - annual interest rate for the saving account
 * @param {int} numOfYears - number of years to compute compound interest for
 * @returns {function} - final account balance after computing for the compound interest
 */
function returnBalance(initAmount, annualInterestRate, numOfYears) {
    let accBalance = initAmount;
    const monthlyInterest = annualInterestRate / 100 / 12;
    const paymentNum = numOfYears * 12;
    for (let i = 1; i <= paymentNum; i++) {
        accBalance = accBalance + (accBalance * monthlyInterest);
    }
    return accBalance.toFixed(2);
}