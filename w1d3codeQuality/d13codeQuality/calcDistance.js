"use strict";
module.exports = { calcDistance };
/**
 * 
 * @param {int} x1 - x1 coordinate
 * @param {int} y1 - y1 coordinate
 * @param {int} x2 - x2 coordinate
 * @param {int} y2 - y2 coordinate
 * @returns {function} - The distance between two points
 */
function calcDistance(x1, y1, x2, y2) {
    let distance = (Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))).toFixed(2);
    return distance;
}