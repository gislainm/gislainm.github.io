"use strict";
/*eslint-disable */
let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }], //subdepartments
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};
let simpleObject = { a: 1, b: 2, c: { a: [1, 2] } };

function sumSalaries(obj) {
    let sum = 0;
    for (let department in obj) {
        if (Array.isArray(obj[department])) {
            sum = sum + obj[department].reduce((previousV, currentV) => previousV + currentV.salary, 0);
        } else {
            sum = sum + sumSalaries(obj[department]);
        }
    }
    return sum;
}
//console.log(sumSalaries(company))

function getEmployeeNamesObjectsArray(obj) {
    let employees = [];
    for (let department in obj) {
        if (Array.isArray(obj[department])) {
            for (let employee of obj[department])
                employees = employees.concat([{ name: employee.name }])
        } else {
            employees = employees.concat(getEmployeeNamesObjectsArray(obj[department]));
        }
    }
    return employees;
}

//console.log(getEmployeeNamesObjectsArray(company));

function getEmployeeNameSalary(obj) {
    let employeeSalaryObject = {};
    for (let department in obj) {
        if (Array.isArray(obj[department])) {
            let employee = obj[department].reduce((previousV, currentV) => {
                previousV[currentV.name] = currentV.salary;
                return previousV;
            }, {})
            for (let key in employee) {
                employeeSalaryObject[key] = employee[key];
            }
        } else {
            let moreEmployee = getEmployeeNameSalary(obj[department]);
            // console.log(moreEmployee);
            for (let key in moreEmployee) {
                employeeSalaryObject[key] = moreEmployee[key];
            }
        }
    }
    return employeeSalaryObject;
}

//console.log(getEmployeeNameSalary(company));

function getEmployeeNameInArray(obj) {
    let employees = [];
    for (let department in obj) {
        if (Array.isArray(obj[department])) {
            employees = employees.concat(obj[department].reduce((previous, current) => {
                return previous.concat([current.name])
            }, []))
        } else {
            employees = employees.concat(getEmployeeNameInArray(obj[department]))
        }
    }
    return employees;
}
//console.log(getEmployeeNameInArray(company));

// function obb(obj) {
//     let real = {};
//     let final = {};
//     for (let prop of Object.values(obj)) {
//         if (Array.isArray(prop)) {
//             for (let x of prop) {
//                 let arr = Object.values(x);
//                 real[arr[0]] = arr[1];
//             }
//         } else
//             final = obb(prop);

//     }
//     return Object.assign(real, final);
// }
// console.log(obb(company));

function countKeys(obj) {
    let count = 1;
    for (let element of Object.values(obj)) {
        if (typeof (element) != "object" || Array.isArray(element)) {
            count = count + 1;
        } else {
            count = count + countKeys(element);
        }
    }
    return count;
}
//console.log(countKeys(simpleObject));

function listLeaves(obj) {
    let leaves = [];
    for (let key in obj) {
        if (typeof (obj[key]) == "object") {
            if (Array.isArray(obj[key])) {
                leaves = leaves.concat([{ [key]: obj[key] }])
            } else {
                leaves = leaves.concat(listLeaves(obj[key]));
            }
        } else {
            leaves = leaves.concat([{ key: obj[key] }]);
        }
    }
    return leaves;
}
//console.log(listLeaves(simpleObject));

function findAllKeysWithGivenValue(obj, target) {
    let matchingKey = [];
    for (let key in obj) {
        if (obj[key] == target) {
            matchingKey = matchingKey.concat([key]);
        } else if (Array.isArray(obj[key])) {
            for (let element of obj[key]) {
                if (element == target) {
                    matchingKey = matchingKey.concat([key])
                }
            }
        } else if (typeof (obj[key]) == 'object') {
            matchingKey = matchingKey.concat(findAllKeysWithGivenValue(obj[key], target))
        }
    }
    return matchingKey;
}
//console.log(findAllKeysWithGivenValue(simpleObject, 1));

function findValuesOfGivenKey(obj, target) {
    let values = [];
    for (let key in obj) {
        if ([key] == target) {
            values = values.concat([obj[key]]);
        }
        if (typeof (obj[key]) == "object" && !Array.isArray(obj[key])) {
            values = values.concat(findValuesOfGivenKey(obj[key], target))
        }
    }
    return values;
}
let simpleObject1 = { a: 1, b: 2, c: { a: [1, 2] } };
//console.log(findValuesOfGivenKey(simpleObject1, 'a'))
// let str="Gislain"
// console.log(str.toUpperCase())

let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};
let node4 = {
    name: "label",
    value: "Name",
    children: null
};
let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};
let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};
let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
};

function printName(obj) {
    console.log(obj.name + ":" + obj.value);
    if (Array.isArray(obj.children)) {
        for (let child of obj.children) {
            printName(child);
        }
    }
}
//printName(node1);

function printArr(obj) {
    let listArr = [];
    listArr = listArr.concat([obj.name + ":" + obj.value]);
    if (Array.isArray(obj.children)) {
        for (let child of obj.children) {
            listArr = listArr.concat(printArr(child));
        }
    }
    return listArr;
}
//console.log(printArr(node1));

function TreeNode(value) {
    this.value = value;
    this.descendents = [];
}
// create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');
// associate root with is descendents
// abe.descendents.push(homer);
// homer.descendents.push(bart, lisa, maggie);

function printTreeName(tree) {
    console.log(tree.value);
    if (tree.descendents.length > 0) {
        for (let child of tree.descendents) {
            printTreeName(child);
        }
    }
}
//printTreeName(abe);
function contains(tree, target) {
    if (tree.value == target) {
        return true;
    }
    if (tree.descendents.length > 0) {
        for (let child of tree.descendents) {
            if (contains(child, target) == true) {
                return true
            }
        }
    }
    return false;
}

//console.log(contains(abe, "Abe"));

function containingTree(tree, target) {
    if (tree.value == target) {
        return tree;
    } else if (tree.descendents.length > 0) {
        for (let child of tree.descendents) {
            if (containingTree(child, target) != null) {
                return containingTree(child, target);
            }
        }
    }
    return null;
}
//console.log(containingTree(abe, "Maggie"));




function TreeNode(value) {
    this.value = value;
    this.descendent = [];
}
let president = new TreeNode("President");
let administrationvp = new TreeNode("administrationvp")
let investmentvp = new TreeNode("investmentvp")
let finacialM = new TreeNode("finacial Manager")
let Hr = new TreeNode("Hr Manager")
let Reseach = new TreeNode("Reseach Director")
president.descendent.push(administrationvp, investmentvp);
administrationvp.descendent.push(finacialM, Hr);
investmentvp.descendent.push(Reseach);

function countNode(tree) {
    let count = Object.keys(tree).length;
    console.log(Object.keys(tree));
    // for (let key in tree) {
    //     if(tree[key])
    // }
    return count;
}
console.log(countNode(president));
console.log(JSON.stringify(president));

function leafArr(tree) {
    let arr = [];
    if (tree.descendent.length == 0) {
        arr = arr.concat([tree]);
    } else {
        for (let child of tree.descendent) {
            arr = arr.concat(leafArr(child));
        }
    }
    return arr;
}
//console.log(leafArr(president));