
console.log("Hello! JavaScript is running in Node.js");

// Demonstrating environment differences
try {
  console.log(window);
} catch (error) {
  console.log("window is not available in Node.js (expected behavior)");
}

try {
  alert("This will not work in Node.js");
} catch (error) {
  console.log("alert() is not available in Node.js (expected behavior)");
}
console.log("Script execution completed");
