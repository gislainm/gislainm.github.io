"use strict";
/*eslint-disable */

function area() { return this.side * this.side }
const square1 = {
    side: 5,
};
square1.__proto__ = { area: area }

function Square(side) {
    this.side = side
};
Square.prototype = square1.__proto__;

class Square2 {
    constructor(side) {
        this.side = side;
    }
    area() { return this.side * this.side }
}



console.log("expect 25: ", square1.area())
console.log("expect 1: ", Object.getOwnPropertyNames(square1).length);
const constSquare1 = new Square(7);
console.log("expect 49: ", constSquare1.area());
console.log("expect 1: ", Object.getOwnPropertyNames(constSquare1).length);
const classSquare = new Square2(10);
console.log("expect 100: ", classSquare.area());
console.log("expect 1: ", Object.getOwnPropertyNames(classSquare).length);

let array = [1, 2, 3, 4, 5];
console.log(array.join("$"))


function makeCounter() {
    let count = 0;
    return function innerfunc() {
        count++;
        return count;
    }
}

let count1 = makeCounter();
let count2 = makeCounter();
count1();
count2();
count1();
console.log(count1());
console.log(count2());

function a() {
    console.log(x); // consult Global for x and print 20 from Global
}
function b() {
    const x = 10;
    a(); // consult Global for a 
}
const x = 20;

console.log(b());
let arr1 = [2, 3, 4,];
let [num1, num2, num3] = arr1;
let max = Math.max(num1, num2, num3)
console.log(max);

function foo() { console.log(this); }
const bob = {
    log: function () {
        console.log(this);
    }
};
console.log(this); // this in global scope is window object (or {} in Node)
foo(); //foo() is called by global window object
bob.log();//log() is called by the object, bob 

const y = { a: 1, b: 2, add: () => { return this.a + this.b } }
console.log("NaN:", y.add()); //NaN
let plus = () => {
    this.a = this.a + 1;
    return this.a;
};
console.log(plus())

let john = { name: "John", surname: "Smith", age: 10 };
let pete = { name: "Pete", surname: "Hunt", age: 20 };
let people = [john, pete];
function map(arr) {
    return arr.map((item, index) => {
        let newObject = {};
        newObject.fullName = item.name + " " + item.surname;
        newObject.id = index + 1;
        return newObject;
    })
}
console.log(map(people));

function countdown(from) {
    let count = from - 1;
    let timerId = setInterval(function () {
        if (count >= 0) {
            console.log(count);
            count--
        } else {
            clearInterval(timerId);
        }
    }, 1000);
    return from;
}
console.log(countdown(2));

function makeSecureStack() {
    const array = [];
    return function (element, operation) {
        if (operation === "push") {
            array.push(element);
            return;
        } else if (operation === "pop") {
            return array.pop();

        } else {
            return [...array];
        }
    }
}
const secure = makeSecureStack();
secure(1, "push");
secure(2, "push");
secure(3, 'push');
console.log("expect 3:", secure(null, "pop"));
console.log("expect undefined: ", secure(55, "push"));
console.log("expect [1,2,55: ", secure(null, "view"));

function Incrementer(start) {
    this._value = start,
        this.increment = function (num) {
            this._value += num;
            return this._value;
        }
    this.decrement = function (num) {
        this._value -= num;
        return this._value;
    }
}
let increment = new Incrementer(100);
console.log(increment.increment(10));
console.log(increment.increment(10));
console.log(increment.decrement(10))