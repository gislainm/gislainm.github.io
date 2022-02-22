"use strict";

function calcDistance(x1, y1, x2, y2) {
    let distance = (Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))).toFixed(2)
    return `The distance between the 2 points is: ${distance}`;
}
console.log("expect 7.07 : ", calcDistance(0, 0, 5, 5));