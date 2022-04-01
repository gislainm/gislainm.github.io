"use strict";
/*eslint-disable */
function pageLoad() {
    document.getElementById("ok").onclick = add;
}
function add() {
    console.log("Add");
}
window.onload = pageLoad;