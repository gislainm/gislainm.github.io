"use strict";
/* global assert copyArray concat concatArrElement findMin findMax combineObjs destructureAssign destructureCall*/

/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page. 
*/
/*
const assert = require("assert");  //always need this with node
const myExports = require("./spread.js");  //with node need the name of your file with your functions here
const copyArray = myExports.copyArray;  //do this for all of the functions used in the Mocha tests
const concat = myExports.concat;
const findMin = myExports.findMin;
const combineObjs = myExports.combineObjs;
const findMax = myExports.findMax;
const concatArrElement = myExports.concatArrElement;
const destructureAssign = myExports.destructureAssign;
const destructureCall = myExports.destructureCall;
*/



/*
a)	Copy an array
b)	Concatenate arrays into a new array
c)	Concatenate an array and a new array element
d)	Use an array as arguments
e)	Use Math.min and Math.max
f)	Combine several objects into a single object

*/


describe("spread operator tests", function () {
    it("tests clone array", function () {
        const oldArr = [1, 2, 3];
        const newArr = copyArray(oldArr);
        assert.deepEqual(newArr, oldArr);
        // oldArr.push[4];
        newArr.push(4);
        assert.deepEqual(oldArr, [1, 2, 3]);
    });

    it("tests concatenate arrays", function () {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        assert.deepEqual(concat(arr1, arr2), [1, 2, 3, 4, 5, 6]);
    });

    it("tests concatenate arrays and a new array element", function () {
        const arr1 = [1, 2, 3];
        const newElement = 6;
        assert.deepEqual(concatArrElement(arr1, newElement), [1, 2, 3, 6]);
    });

    it("tests Math.min", function () {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6, 7, 8, 0];
        assert.strictEqual(findMin(...arr1), 1);
        assert.strictEqual(findMin(...arr2), 0);
    });

    it("tests Math.max", function () {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6, 7, 8, 0];
        assert.strictEqual(findMax(...arr1), 3);
        assert.strictEqual(findMax(...arr2), 8);
    });

    it("tests combine objects", function () {
        const obj1 = { prop1: 1, prop2: 2 };
        const obj2 = { prop3: 1, prop4: 2 };

        assert.deepEqual(combineObjs(obj1, obj2), { prop1: 1, prop2: 2, prop3: 1, prop4: 2 });
    });


});

describe("rest operator tests", function () {
    it("tests rest operator in a destructuring assignment", function () {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        assert.deepEqual(destructureAssign(arr), [3, 4, 5, 6, 7]);
    });

    it("tests rest operator in a function call", function () {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        assert.deepEqual(destructureCall(arr), [3, 4, 5, 6, 7]);
    });
});