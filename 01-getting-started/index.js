//Run using -> node index.js

const message = "Welcome to Node.js learning!";
const nodeVersion = process.version;

console.log(message);
console.log("Node Version:", nodeVersion);

function add(a, b) {
  return a + b;
}
console.log("Sum of 10 and 20 =", add(10, 20));