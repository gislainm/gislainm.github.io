function myCallback(func, arg) {
    console.log(func(arg));
    return "yay";
}

function cube(num) {
    return num * num * num;
}

console.log(myCallback(cube, 3));