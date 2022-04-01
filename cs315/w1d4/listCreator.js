"use strict";
/*eslint-disable */
window.onload = pageLoad;
//let newValue;
//let button;
function pageLoad() {
    let newValue = document.getElementById("input");
    let button = document.getElementById("add")
    button.onclick = add;

    function add() {
        document.getElementById("output").innerHTML += newValue.value + '\n';
        this.style.backgroundColor = "green";
        this.style.color = "white";
        setTimeout(returnColor, 3000);
        function returnColor() {
            button.style.backgroundColor = "white"
            button.style.color = "black"
        }

    }
}
// function add() {
//     document.getElementById("output").innerHTML += newValue.value + '\n';
//     this.style.backgroundColor = "green";
//     this.style.color = "white";

// }3ey