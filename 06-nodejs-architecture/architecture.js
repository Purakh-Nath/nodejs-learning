const fs = require("fs");
const os = require("os");

// 1. Checking CPU Cores (Determines max thread pool size)
console.log("Total CPU Cores available:", os.cpus().length);

console.log("Start of Program");

// 2. BLOCKING Operation (Synchronous)
// The code will STOP here until the file is fully read.
console.log("1. Starting Sync Read...");
const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log("Result:", result);
console.log("2. Sync Read Finished.");

console.log("\nMoving to Async");

// 3. NON-BLOCKING Operation (Asynchronous)
// Node sends this to the thread pool and moves to the next line immediately.
console.log("3. Starting Async Read...");
fs.readFile("./contacts.txt", "utf-8", (err, data) => {
    if (data) console.log("Result (Async):", data);
});
console.log("4. It ran immediately without waiting for the file");

console.log("End of Program File");