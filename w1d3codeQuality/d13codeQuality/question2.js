"use strict";
module.exports = { computeSalesCommission };
/**
 * 
 * @param {boolean} salaried - true if the agent is salaried, false otherwise
 * @param {int} salesAmount - sales amount
 * @returns {function} - sales commission
 */
function computeSalesCommission(salaried, salesAmount) {
    let commission = 0;
    if (salaried) {
        if (salesAmount < 300) {
            return 0;
        } else if (salesAmount <= 500) {
            commission = 0.01 * salesAmount;
            return commission;
        } else if (salesAmount > 500) {
            commission = ((500 * 0.01) + ((salesAmount - 500) * 0.02));
            return commission;
        }
    } else {
        if (salesAmount < 300) {
            return 0;
        } else if (salesAmount <= 500) {
            commission = 0.02 * salesAmount;
            return commission;
        } else if (salesAmount > 500) {
            commission = (500 * 0.02) + ((salesAmount - 500) * 0.03);
            return commission;
        }
    }
}