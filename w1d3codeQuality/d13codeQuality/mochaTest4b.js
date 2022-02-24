"use strict";
const assert = require("assert");

/* imports sumDigits.js */
const functionModule = require("./sumDigits");
const sumDigits = functionModule.sumDigits;

describe("Return the sum of number's digits", function () {
    it("The number is 1234", function () {
        assert.equal(sumDigits(1234), 10);
    });
    it("The number is 102", function () {
        assert.equal(sumDigits(102), 3);
    });
    it("The number is 8", function () {
        assert.equal(sumDigits(8), 8);
    });
});