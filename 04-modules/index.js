// To use our local file, we use require() with a current directory  './'
// If we do not use './', Node looks in built-in packages or node_modules
const math = require("./math");

console.log("Welcome to Node Modules!");

// Accessing functions from the math module
console.log("Result of Addition:", math.add(2, 4));
console.log("Result of Subtraction:", math.sub(10, 5));

// We can also destructure for cleaner code
// const { add, sub } = require("./math");