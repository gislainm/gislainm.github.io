"use strict";
/*eslint-disable */
let Abe = {
    name: "Abe",
    children: [{
        name: "Homer",
        children: [{ name: "Bart", children: null }, { name: "Lisa", children: null }, { name: "Maggie", children: null }]
    }]
}

// let Abe = {
//     name: "Abe",
//     children: [{
//         name: "Homer", children: [{ name: "Bart", children: null }, { name: "Lisa", children: null }]
//     }]
// }

//Question 1
function printName(node) {
    if (Array.isArray(node.children)) {
        console.log(node.name);
        for (let element of node.children) {
            printName(element);
        }
    } else {
        console.log(node.name);
    }
}
//printName(Abe);

//Question 2
function contains(tree, target) {
    if (tree.name == target) {
        return true;
    } else if (Array.isArray(tree.children)) {
        for (let element of tree.children) {
            return contains(element, target);
        }
    } else {
        return false;
    }
}
//console.log(contains(Abe, "Gislain"));

//Question 3
function containingTree(tree, target) {
    if (tree.name == target) {
        return tree;
    } else if (Array.isArray(tree.children)) {
        let newTree = null;
        for (let element of tree.children) {
            if (containingTree(element, target)) {
                newTree = containingTree(element, target)
            }
        }
        return newTree;
    } 
}
console.log(containingTree(Abe, "Gisa"));

function ListNode(node){
    
}