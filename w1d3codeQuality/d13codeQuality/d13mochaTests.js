"use strict";
const assert = require("assert");
/* imports from question3.js */

const functionModule = require("./question3.js");
const returnBalance = functionModule.returnBalance;

describe("return final balance", function () {
    it("100 is the initial balance, interest rate is 10% for 1 year", function () {
        assert.equal(returnBalance(100, 10, 1), 110.47);
    });
    it("10000 is the initial balance, interest rate is 5% for 10 years", function () {
        assert.equal(returnBalance(10000, 5, 10), 16470.09);
    });
});