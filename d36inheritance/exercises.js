"use strict";
/*eslint-disable */
let head = {
    glasses: 1
};
let table = {
    pen: 3,
    __proto__: head
};
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};
let pockets = {
    money: 2000,
    __proto__: bed
};

console.log("expect 3: ", pockets.pen);
console.log("expect 1: ", bed.glasses);

// let methods = {
//     getFUllName: function () { return this.firstname + ' ' + this.lastname; },
//     getAge: function () { return new Date().getFullYear() - this.birthDate.getFullYear(); }
// }
// function Date(date) {
//     this.getFullYear = function () {
//         let newDate = date.split("-");
//         return Number(newDate[0]);
//     }
// }


let methods = {
    getFullName: getFullName,
    getAge: getAge
}

function User(firstname, lastname, birthDate) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthDate = birthDate;
}
User.prototype = methods

let user1 = new User('John', 'Smith', new Date('2000-10-01'));
let user2 = new User('Edward', 'Hopkins', new Date('1991-11-14'));

function getFullName() { return this.firstname + ' ' + this.lastname; }
function getAge() { return new Date().getFullYear() - this.birthDate.getFullYear(); }

console.log(user1.getFullName()); //John Smith 
console.log(user1.getAge()); //21

function f(a, b) {
    console.log(a + b);
}

Function.prototype.defer = function (ms) {
    let f = this;
    return function(...arg){
        setTimeout(()=>f.apply(this,arg),1000)
    };
}



f.defer(1000)(1, 2); 