"use strict";
module.exports = { calcDownPayment };
/**
 * 
 * @param {int} cost - the cost of the house
 * @returns {function} - the downpayment for the house
 */
function calcDownPayment(cost) {
    let payment = 0;
    if (cost < 50000) {
        payment = cost * 0.05;
        return payment;
    } else if (cost < 100000) {
        payment = 2500 + (0.1 * (cost - 50000));
        return payment;
    } else if (cost < 200000) {
        payment = 7500 + (0.15 * (cost - 100000));
        return payment;
    } else if (cost >= 200000) {
        payment = 20000 + (0.1 * (cost - 200000));
        return payment;
    }
}