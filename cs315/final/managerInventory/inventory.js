"use strict";
/*eslint-disable */
window.onload = function () {
    document.getElementById("addButton").onclick = add;
    document.getElementById("saveButton").onclick = save;
    document.getElementById("");
    let sortList = document.getElementById("sortDropdown");
    sortList.onchange = sortElements;
    let filterList = document.getElementById("filterDropdown");
    filterList.onchange = filterElements;
}

function replaceTable(arr) {
    tableChildren.remove();
    table.innerHTML = "<tbody> <tr><th>Product Name</th><th>Category</th><th>Quantity</th><th>Rating</th><th class='button'>Edit</th><th class='button'>Remove</th></tr></tbody>";
    for (let element of arr) {
        let itemName = element.name;
        let category = element.category;
        let quantity = element.quantity;
        let rating = element.rating;
        let id = element.id;
        let newRow = table.insertRow(-1);
        newRow.id = id;
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
        cell6.innerHTML = "<button id='removeButton' onclick='remove(this)'>Remove</button>";
    }
}

let contentArr = [];
let table = document.getElementById("myTable");
let tableChildren = table.children[0];
function sortElements() {
    let sortBy;
    for (let option of this.options) {
        if (option.selected) {
            sortBy = option.value;
        }
    }
    if (sortBy === "name") {
        console.log("sort by name");
        contentArr.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else {
                return 0;
            }
        })
        replaceTable(contentArr);

    } else if (sortBy === "quantity") {
        console.log("sort by quantity");
        contentArr.sort((a, b) => a.quantity - b.quantity);
        replaceTable(contentArr);
    }
}

function filterElements() {
    let filterBy;
    let filtedArr;
    for (let option of this.options) {
        if (option.selected) {
            filterBy = option.value
        }
    }
    if (filterBy === "filterQ") {
        console.log("filter by quantity");
        filtedArr = contentArr.filter(item => item.quantity > 100);
        replaceTable(filtedArr);
    } else if (filterBy === "filterR") {
        console.log("filter by rating");
        filtedArr = contentArr.filter(item => item.rating > 4);
        replaceTable(filtedArr);
    }
}

let idCounter = 1;
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
        //change back the quantity text box to original background color
        document.getElementById("quantity").style.backgroundColor = "";
        let newRow = table.insertRow(-1);
        //give every row an id
        newRow.id = idCounter;
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
        // let button = document.createElement("button");
        // button.onclick = "edit(this)";
        // button.innerHTML = "Edit";
        // cell5.append(button);
        cell6.innerHTML = "<button id='removeButton' onclick='remove(this)'>Remove</button>"
        contentArr.push({ name: itemName, category: category, quantity: quantity, rating: rating, id: idCounter });
        idCounter++;
    }



}

//remove a row from the table when remove button is clicked
function remove(obj) {
    let rowToRemove = obj.parentNode.parentNode;

    //removes the object containing information of the row removed from the content array
    for (let element of contentArr) {
        if (element.id == rowToRemove.id) {
            contentArr.splice(contentArr.indexOf(element), 1);
        }
    }
    rowToRemove.remove();
}
let arrayOfValues;
let rowObj;
function edit(nw) {
    rowObj = nw.parentNode.parentNode
    arrayOfValues = rowObj.childNodes;
    document.getElementById("name").value = arrayOfValues[0].innerHTML;
    document.getElementById("category").value = arrayOfValues[1].innerHTML;
    document.getElementById("quantity").value = arrayOfValues[2].innerHTML;
    document.getElementById("rating").value = arrayOfValues[3].innerHTML;

    console.log(rowObj);
    console.log(contentArr);
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

    //updating the content array after editing
    for (let element of contentArr) {
        if (element.id == rowObj.id) {
            element.name = itemName;
            element.category = category;
            element.quantity = quantity;
            element.rating = rating;
        }
    }
    console.log(rowObj);
    console.log(contentArr)
}


