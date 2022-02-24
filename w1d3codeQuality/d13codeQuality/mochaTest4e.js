"use strict";
const assert = require("assert");

/* imports calcDistance.js */
const functionModule = require("./calcDistance.js");
const calcDistance = functionModule.calcDistance;

describe("Calculates the distance between two points", function () {
    it("x1 is 0, y1 is 0, x2 is 5, y2 is 5 ", function () {
        assert.equal(calcDistance(0, 0, 5, 5), 7.07);
    });
});