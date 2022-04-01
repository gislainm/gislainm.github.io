"use strict";
/*eslint-disable */
window.onload = function () {
    document.getElementById("addButton").onclick = add;
    document.getElementById("saveButton").onclick = save;
    let table = document.getElementsByTagName("table")[0];
    table.onmouseover = function () { changeColor(true) };
    table.onmouseleave = function () { changeColor(false) };
}

function changeColor(bool) {
    let trs = document.getElementsByTagName("tr");
    if (trs.length > 0) {
        for (let item of trs) {
            item.style.backgroundColor = bool ? "Yellow" : "";
        }
    }

}

function add() {
    let itemName = (document.getElementById("name")).value;
    let category = (document.getElementById("category")).value;
    let quantity = (document.getElementById("quantity")).value;
    let rating = (document.getElementById("rating")).value;
    let table = document.getElementById("myTable");
    if (itemName === "") {
        alert("Enter item name");
    } else if (category === "") {
        alert("Enter the category");
    } else if (quantity === "") {
        alert("Enter the quantity")
    } else if (rating === "") {
        alert("Enter the rating")
    } else if (!(Number(quantity))) {
        alert("Quantity has to be a number");
        document.getElementById("quantity").style.backgroundColor = "red";
    } else {
        document.getElementById("quantity").style.backgroundColor = "";
        let newRow = table.insertRow(-1);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
        let cell5 = newRow.insertCell(4);
        let cell6 = newRow.insertCell(5);
        cell1.innerHTML = itemName;
        cell2.innerHTML = category;
        cell3.innerHTML = quantity;
        cell4.innerHTML = rating;
        cell5.innerHTML = "<button id='editButton' onclick='edit(this)'>Edit</button>";
        cell6.innerHTML = "<button id='removeButton' onclick='remove(this)'>Remove</button>"
        console.log(document.getElementById("removeButton"));
        console.log(document.getElementById("editButton"));
    }


}
function remove(obj) {
    obj.parentNode.parentNode.outerHTML = "";
}
let arrayOfValues;
function edit(nw) {
    let rowObj = nw.parentNode.parentNode
    arrayOfValues = rowObj.childNodes;
    document.getElementById("name").value = arrayOfValues[0].innerHTML;
    document.getElementById("category").value = arrayOfValues[1].innerHTML;
    document.getElementById("quantity").value = arrayOfValues[2].innerHTML;
    document.getElementById("rating").value = arrayOfValues[3].innerHTML;
    //rowObj.outerHTML = "";
}

function save() {
    let itemName = (document.getElementById("name")).value;
    let category = (document.getElementById("category")).value;
    let quantity = (document.getElementById("quantity")).value;
    let rating = (document.getElementById("rating")).value;
    arrayOfValues[0].innerHTML = itemName;
    arrayOfValues[1].innerHTML = category;
    arrayOfValues[2].innerHTML = quantity;
    arrayOfValues[3].innerHTML = rating;
}
