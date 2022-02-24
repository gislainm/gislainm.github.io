"use strict";
const assert = require("assert");

/* imports convertFahrenheit.js */
const functionModule = require("./convertFahrenheit.js");
const convertFahrenheit = functionModule.convertFahrenheit;

describe("Converts temperature from Fahrenheit to Celcius", function () {
    it("Temperation in Fahrenheit is 32", function () {
        assert.equal(convertFahrenheit(32), 0);
    });
    it("Temperation in Fahrenheit is 0", function(){
        assert.equal(convertFahrenheit(0), -17.7778);
    });
    it("Temperation in Fahrenheit is 212", function (){
        assert.equal(convertFahrenheit(212), 100);
    });
    it("Temperation in Fahrenheit is 100", function(){
        assert.equal(convertFahrenheit(100), 37.7778);
    });
});