"use strict";
/*eslint-disable */
function Sensor(id, name, type, manufacturer, events) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.manufacturer = manufacturer;
    this.events = events;
}
let frontDoor = new Sensor(1, "Front Door Sensor", 34, " Climax", [{ time: 100, name: " Door Closed" }, { time: 101, name: "Door Opened" }])

let motionSensor = new Sensor(2, " Motion Sensor", 43, "NYCE", [{ time: 100, name: "Motion Detected" }]);
let porticoLight = new Sensor(3, "Portico Light", 54, "Osram", [{ time: 100, name: "Light off" }]);
let mainEntrance = new Sensor(4, "Main Entrance", 34, "Climax", [{ time: 100, name: "Door Closed" }]);
let list = [frontDoor, motionSensor, porticoLight, mainEntrance]; //,lightBulb]

function filterSensorType(arr, type) {
    return arr.filter(item => item.type === type)
}

function collectManufacturers(list) {
    let arr = [];
    for (const elm of list) {
        if (!arr.includes(elm.manufacturer)) {
            arr.push(elm.manufacturer);
        }
    }
    return arr;
}

function getTheLatestEventOfSensor(arr, id) {
    let sensor = arr.find(item => item.id === id);
    return sensor.events.reduce((initial, currentValue) => {
        if (initial.time < currentValue.time) {
            initial = currentValue;
        }
        return initial;
    }, { time: 0 })
}


console.log("expect array of sensor objects with ids 1 and 4: ", filterSensorType(list, 34));
console.log("expect climax, NYCE, Osram: ", collectManufacturers(list));
console.log("expect {time: 101, name:'Door Opened'}: ", getTheLatestEventOfSensor(list, 1));

function myFind(arr, func) {
    for (let element of arr) {
        if (func(element)) {
            return element;
        } else {
            return -1;
        }
    }
}