"use strict";
/*
          Input                                      Processing                            Output
   -----------------------------------------------------------------------------------------------------
        - house cost          |     - if cost less than 50k then                 |    down payment amount
                              |       compute 5% of the cost                     |
                              |     - if cost is between $50K and 100K then      |
                              |       compute 1000 + 10% of (cost - $50K)        |              
                              |     - if cost is between 100K and 200K then      | 
                              |          compute 2000 + 15% of (cost - $100K)    |
                              |      - if cost is above 200k then                |
                              |         compute $5000 + 10% of (cost - $200K)    |
*/

function calcDownPayment(cost) {
    let payment = 0;
    if (cost < 50000) {
        payment = cost * 0.05;
        return `Your Down Payment is $${payment}`
    } else if (cost < 100000) {
        payment = 2500 + (0.1 * (cost - 50000));
        return `Your Down Payment is $${payment}`;
    } else if (cost < 200000) {
        payment = 7500 + (0.15 * (cost - 100000));
        return `Your Down Payment is $${payment}`;
    } else if (cost >= 200000) {
        payment = 20000 + (0.1 * (cost - 200000));
        return `Your Down Payment is $${payment}`;
    }
}
console.log("expect 2000: ", calcDownPayment(40000));
console.log("expect 2500: ", calcDownPayment(50000));
console.log("expect 7500: ", calcDownPayment(100000));
console.log("expect 25000: ", calcDownPayment(250000));