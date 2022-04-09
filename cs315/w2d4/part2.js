"use strict";
/*eslint-disable */
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

function printNameOfNode(node) {
    if (node.children == null) {
        console.log(node.name + ": " + node.value)
    } else {
        console.log(node.name + ": " + node.value);
        for (let element of node.children) {
            printNameOfNode(element);
        }
    }
}


printNameOfNode(node1);
