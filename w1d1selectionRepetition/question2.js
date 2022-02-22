const prompt = require("prompt-sync")();
let age = Number(prompt('What is your age? '));
while (age < 18) {
    console.log ('Your age is under 18');
    age = Number(prompt('What is your age? '));
}
console.log('You are an adult.')