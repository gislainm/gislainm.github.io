"use strict";
const assert = require("assert");

/* imports multDigits.js */
const functionModule = require("./multDigits.js");
const multDigits = functionModule.multDigits;

describe("Returns the product of all the number's digits", function () {
    it("The number is 1234", function () {
        assert.equal(multDigits(1234), 24);
    });
    it("The number is 102", function () {
        assert.equal(multDigits(102), 0);
    });
    it("The number is 8", function () {
        assert.equal(multDigits(8), 8);
    });
});
