"use strict";
/*eslint-disable */
let simpleObject = { a: 1, b: 2, c: { a: [1, 2] } }

//Question 1
function countKeys(obj) {
    let count = 1;
    for (let key in obj) {
        if ((typeof (obj[key]) == 'object') && (!Array.isArray(obj[key]))) {
            count = count + countKeys(obj[key]);
        } else {
            count = count + 1;
        }
    }
    return count;
}
//console.log(countKeys(simpleObject));


//Question 2
function listLeaves(obj) {
    let leavesArr = [];
    for (let key in obj) {
        if ((typeof (obj[key]) == 'object') && (!Array.isArray(obj[key]))) {
            leavesArr = leavesArr.concat(listLeaves(obj[key]));
        } else {
            leavesArr = leavesArr.concat([{ [key]: obj[key] }]);
        }
    }
    return leavesArr;
}
//console.log(listLeaves(simpleObject));


//Question 3
function findAllKeysWithGivenValue(obj, value) {
    let keysWithValue = [];
    for (let key in obj) {
        if ((typeof (obj[key]) == 'object')) {
            if (Array.isArray(obj[key])) {
                for (let element of obj[key]) {
                    if (element == value) {
                        keysWithValue = keysWithValue.concat([key]);
                    }
                }
            } else {
                keysWithValue = keysWithValue.concat(findAllKeysWithGivenValue(obj[key], value));
            }
        } else {
            if (obj[key] == value)
                keysWithValue = keysWithValue.concat([key]);
        }
    }
    return keysWithValue;
}
//console.log(findAllKeysWithGivenValue(simpleObject, 1))


//Question 4
function findValuesOfGivenKey(obj, value) {
    let values = [];
    for (let key in obj) {
        if (key == value) {
            values = values.concat([obj[key]]);
        }
        if ((typeof (obj[key]) == 'object')) {
            if (Array.isArray(obj[key])) {
                for (let element of obj[key]) {
                    if (typeof (element) == 'object' && !Array.isArray(element)) {
                        values = values.concat(findValuesOfGivenKey(element, value));
                    }
                }
            } else {
                values = values.concat(findValuesOfGivenKey(obj[key], value));
            }
        }
    }
    return values;
}
//console.log(findValuesOfGivenKey(simpleObject, 'a'))