"use strict";
/*eslint-disable */
// function add(a, b) {
//     add()
// }
// console.log(add(2, 3));
//console.log(add());

function findLetterRec(str, letter) {
    if (str.length == 0) {
        return 0;
    }
    if (str.charAt(0) == letter) {
        return 1 + findLetterRec(str.substr(1), letter);
    } else {
        return 0 + findLetterRec(str.substr(1), letter);
    }
}

function addArrNumRec(arr) {
    if (arr.length == 0) {
        return 0;
    } else {
        arr.splice(0, 1);
        return arr[0] + addArrNumRec(arr)
    }
}

function powerRec(num, exp) {
    if (exp == 0)
        return 1;
    else
        return num * powerRec(num, exp - 1);
}

function factorialRec(num) {
    if (num == 1)
        return 1;
    else
        return num * factorialRec(num - 1)
}

function findSecEmployeeRec(arr, pos) {
    if (pos == 1)
        return arr[pos].name + " " + arr[pos].salary;
    else
        return findSecEmployeeRec(arr, pos + 1)
}

let array = [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }];
let array2 = [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }];

function salarySum(arr) {
    let sum = 0;
    for (let element of arr) {
        sum += element.salary;
    }
    return sum;
}
function salarySumRec(arr) {
    if (arr.length == 0)
        return 0;
    else
        return arr[0].salary + salarySumRec(arr.slice(1))
}

let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }], //subdepartments
        internals: [{ name: 'Jack', salary: 1300 }]
    }
}

// function sumSalaries(department) {
//     if (Array.isArray(department)) {
//         return department.reduce((prev, current) => prev + current.salary, 0);
//     } else {
//         let sum = 0;
//         for (let subdep of Object.values(department)) {
//             sum += sumSalaries(subdep);
//         }
//         return sum;
//     }
// }

function getEmployeeNameInArray(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev.concat(current.name), []);
    } else {
        let sum = [];
        for (let subdep of Object.values(department)) {
            sum = sum.concat(getEmployeeNameInArray(subdep));
        }
        return sum;
    }
}

function getEmployeeNamesInObject(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev.concat({ name: current.name }), []);
    } else {
        let sum = [];
        for (let subdep of Object.values(department)) {
            sum = sum.concat(getEmployeeNamesInObject(subdep));
        }
        return sum;
    }
}

function getEmployeesObject(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => {
            prev[current.name] = current.salary
            return prev;
        }, {});
    } else {
        let sum = {};
        for (let subdep of Object.values(department)) {
            let subdepObj = getEmployeesObject(subdep);
            for (let key in subdepObj) {
                sum[key] = subdepObj[key];
            }
        }
        return sum;
    }
}

function getSubDeps(department) {
    console.log(department);
    if (Array.isArray(department)) {
        return "";
    } else {
        let sum = [];
        for (let subdep in department) {
            getSubDeps(department[subdep]);
            sum = sum.concat(subdep);
        }
        return sum;
    }
}
console.log(getSubDeps(company))
// let company = {
//     sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
//     development: {
//         sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }], //subdepartments
//         internals: [{ name: 'Jack', salary: 1300 }]
//     }
// }