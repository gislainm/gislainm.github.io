"use strict";
/*eslint-disable */
let simpleObject = { a: 1, b: 2, c: { a: [1, 2] } }
let json = {
    "glossary": {
        "title": "example glossary",
        "GlossSeeAlso": {
            "title": "S",
            "GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
                    "SortAs": "SGML",
                    "GlossSeeAlso": "Standard Generalized Markup Language",
                    "Acronym": "SGML",
                    "Abbrev": "ISO 8879:1986",
                    "GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
                        "GlossSeeAlso": ["GML", "XML", "S"]
                    },
                    "GlossSee": "markup"
                }
            }
        }
    }
};

//Question 1
function countKeys(obj) {
    let count = 0;
    for (let key in obj) {
        if ((typeof (obj[key]) == 'object') && (!Array.isArray(obj[key]))) {
            let newCount = count + countKeys(obj[key]);
            count = newCount + count;
        } else {
            count = count + 1;
        }
    }
    return count;
}
console.log(countKeys(simpleObject));


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
//console.log(listLeaves(json));


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
//console.log(findAllKeysWithGivenValue(json, 'S'))


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
console.log(findValuesOfGivenKey(json, 'GlossSeeAlso'))

//console.log(JSON.stringify(json));