"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator, sortDecreasing, copySorted, mapToNames, mapToObject, sortByAge, getAverageAge, shuffle }; 
//add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {array} arr - input array 
 * @param {num} a - number to be the lower limit of the array 
 * @param {num} b - number to be the higher limit of the array
 * @returns {arr} - new array with all elements within the limit of a and b
 */
function filterRange(arr, a, b) {
  let newArr = arr.filter(item => item >= a && item <= b);
  return newArr;
}

/**
 * 
 * @param {arr} arr - input array
 * @param {num} a - number to be the lower limit of the array 
 * @param {num} b - number to be the higher limit of the array
 * @returns {undefined} - returns nothing
 */
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] < a) || (arr[i] > b)) {
      arr.splice(i, 1);
    }
  };
}

/**
 * @returns {object} - object with calculate and addMethod methods
 */
function Calculator() {
  this["*"] = (a, b) => +a * +b,
    this["+"] = (a, b) => +a + +b,
    this["/"] = (a, b) => +a / +b,
    this["**"] = (a, b) => (+a) ** (+b),
    this["-"] = (a, b) => +a - +b,
    this.calculate = function (str) {
      let numArr = str.split(" ");
      for (let prop in this) {
        if (numArr[1] === prop) {
          return this[prop](numArr[0], numArr[2]);
        };
      };
    },
    this.addMethod = function (name, func) {
      for (let prop in this) {
        if (name === prop) {
          func = this[prop]();
        };
      };
    }
}

/**
 * 
 * @param {arr} arr - input array 
 * @returns {array} - with unique elements from the input array
 */
function unique(arr) {
  let uniqueArr = [];
  for (let element of arr) {
    if (!uniqueArr.includes(element)) {
      uniqueArr.push(element);
    }
  }
  return uniqueArr;
}


/**
 * 
 * @param {array} array - input array 
 * @returns {object} - with all of the elements of the input array grouped togethed
 */
function groupById(array) {
  return array.reduce(function (previousValue, item) {
    previousValue[item.id] = item;
    return previousValue;
  }, {})
}

/**
 * 
 * @param {array} arr - input array 
 * @returns {array} - input array sorted in descending order
 */
function sortDecreasing(arr) {
  return arr.sort((a, b) => b - a);
}

/**
 * 
 * @param {array} arr - input array of strings 
 * @returns {array} - a copy of input array sorted
 */
function copySorted(arr) {
  let copyArr = arr.map((item) => item);
  return copyArr.sort();
}

/**
 * 
 * @param {array} arr - array of objects 
 * @returns {array} - array of only names from the input array of objects
 */
function mapToNames(arr) {
  let names = arr.map(item => item.name);
  return names;
}

/**
 * 
 * @param {array} arr - input array of objects 
 * @returns {array} - array of objects with name and surname properties removed and fullname property added
 */
function mapToObject(arr) {
  let usersMapped = arr.map(function (item) {
    item.fullName = item.name + " " + item.surname;
    delete item.name;
    delete item.surname;
    return item;
  });
  return usersMapped;
}

/**
 * 
 * @param {array} arr - array of objects 
 * @returns {array} - return an array of objects sorted by age
 */
function sortByAge(arr) {
  let newArr = arr.sort(function (a, b) {
    if (a.age > b.age) {
      return -1;
    } else if (a.age < b.age) {
      return 1;
    } else if (a.age = b.age) {
      return 0;
    }
  });
  return newArr;
}

/**
 * 
 * @param {array} arr - input array 
 * @returns {array} - input array with all the elements shuffled around
 */
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

/**
 * 
 * @param {arr} arr - input array of objects 
 * @returns {num} - average of all the ages in the array's objects
 */
function getAverageAge(arr) {
  let average = arr.reduce((sum, element) => sum + element.age, 0) / arr.length;
  return average;
}
