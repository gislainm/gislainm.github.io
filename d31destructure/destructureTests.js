"use strict";
/* global assert topSalary cloneObject assignment*/
/* eslint-disable quotes   */

/* comment out the node specific code when going to the browser
const assert = require("assert");
const myExports = require("./destructure.js");
const topSalary = myExports.topSalary;  //do this for all of the functions used in the Mocha tests
const getDateAgo = myExports.getDateAgo;
const getLocalDay = myExports.getLocalDay;
const getWeekday = myExports.getWeekday;
const formatDate = myExports.formatDate;
const getLastDayOfMonth = myExports.getLastDayOfMonth;
const assignment = myExports.assignment;
const cloneObject = myExports.cloneObject;
*/

/* 
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
describe("topSalary", function () {
  it("returns top-paid person", function () {
    let salaries = {
      "John": 100,
      "Pete": 300,
      "Mary": 250
    };

    assert.equal(topSalary(salaries), "Pete");
  });

  it("returns null for the empty object", function () {
    console.log("topsalary: ", topSalary({}));
    assert.strictEqual(topSalary({}), null);
  });
});

describe("destructuring assignment", function () {
  it("returns destructured object into variables", function () {
    let user = {
      name: "John",
      years: 30
    };
    assert.equal(assignment(user), "John+30+false");
  });
});

describe("clones object using JSON", function () {
  it("checks strict equality of given object and clone object", function () {
    let user = {
      name: "John Smith",
      age: 35
    };
    assert.equal(cloneObject(user), false);
  });
});