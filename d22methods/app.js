"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {num} initialValue - initial value
 * @param {num} increment - increment value
 * @returns {obj} - creater accumulator object 
 */
function Accumulator(initialValue, increment) {
   this.currentValue = initialValue,
      this.increment = increment,
      this.accumulate = function () {
         this.currentValue = (this.currentValue + this.increment);
      },
      this.report = function () {
         return this.currentValue;
      };
   //implement this
}


/**
 * @returns {Calculator} - this is a constructor function
 */
function Calculator() {
   this.setValues = function (aaa, bbb) {
      this.aaa = aaa,
         this.bbb = bbb;
   },
      this.sum = function () {
         return (this.aaa + this.bbb);
      },
      this.mul = function () {
         return (this.aaa * this.bbb);
      };
   //implement this
}