"use strict";
/*eslint-disable */
let a = { value: "A", next: { value: "B", next: { value: "C" } } };
let b = a.next;
let c = a.next.next;
a.next = c;
a.next.next = { value: "B" };
function printList(list) {
    if (list == null)
        return;
    else
        console.log(list.value);
    printList(list.next);
}
// printList(a);
function getNumOfList(list) {
    if (list == null) {
        return 0;
    } else {
        return 1 + getNumOfList(list.next);
    }
}

function collectVal(list) {
    let arr = [];
    while (list != null) {
        arr.push(list.value);
        list = list.next;
    }
    return arr;
}

function collectValRec(list) {
    if (list == null)
        return [];
    else
        return [list.value].concat(collectValRec(list.next));
}
console.log(collectValRec(a));