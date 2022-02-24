"use strict";
const assert = require("assert");

/* imports from the calcDownpayment.js */
const functionModule = require("./calcDownpayment");
const calcDownPayment = functionModule.calcDownPayment;

describe("return downpayment on the house", function () {
    it("The cost of the house is 40000", function () {
        assert.equal(calcDownPayment(40000), 2000);
    });
    it("The cost of the house is 50000", function () {
        assert.equal(calcDownPayment(50000), 2500);
    });
    it("The cost of the house is 100000", function () {
        assert.equal(calcDownPayment(100000), 7500);
    });
});
