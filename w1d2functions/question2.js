"use strict";
/*
          Input                                      Processing                            Output
   --------------------------------------------------------------------------------------------------------------------------
   -Initial amount                          -calculate the monthly interest rate           -account balance after the specified years.
   -Annual interest rate                    -calculate the payment number by
                                              multiplying the number of years by months
   -number of years to compute for          -calculte interest rate every month and
                                              add it to the balance.
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
console.log("expect 110.47:", returnBalance(100, 10, 1));
console.log("expect 16470.09:", returnBalance(10000, 5, 10));