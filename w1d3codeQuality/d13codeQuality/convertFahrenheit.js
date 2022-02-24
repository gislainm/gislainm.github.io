"use strict";
module.exports = { convertFahrenheit };
/**
 * 
 * @param {int} temperature - temperature in fahrenheit 
 * @returns {function} - temperature in celcius
 */
function convertFahrenheit(temperature) {
    let tempCelcius = (temperature - 32) * (5 / 9);
    if ((tempCelcius % 1) !== 0) {
        return tempCelcius.toFixed(4);
    } else {
        return tempCelcius;
    }

}