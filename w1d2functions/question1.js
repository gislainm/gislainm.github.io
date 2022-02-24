"use strict";
/**
 * 
 * @param {boolean} salaried - worker agent salaried or not
 * @param {int} salesAmount - sales amount 
 * @returns {function} - sales commission
 */
function computeSalesCommission(salaried, salesAmount) {
    let commission = 0;
    if (salaried) {
        if (salesAmount < 300) {
            return "There is no commission";
        } else if (salesAmount <= 500) {
            commission = 0.01 * salesAmount;
            return `The commission is $${commission}`;
        } else if (salesAmount > 500) {
            commission = ((500 * 0.01) + ((salesAmount - 500) * 0.02));
            return `The commission is $${commission}`;
        }
    } else {
        if (salesAmount < 300) {
            return "There is no commission"
        } else if (salesAmount <= 500) {
            commission = 0.02 * salesAmount;
            return `The commission is $${commission}`;
        } else if (salesAmount > 500) {
            commission = (500 * 0.02) + ((salesAmount - 500) * 0.03);
            return `The commission is $${commission}`;
        }
    }
}
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));