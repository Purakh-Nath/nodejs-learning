const fs = require("fs");

// Writing Files
// Synchronous (Blocks execution)
fs.writeFileSync("./test.txt", "Hello from Node.js");

// Asynchronous (Non-blocking, needs a callback)
fs.writeFile("./test.txt", "Hello from Node.js asynchronous", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File written successfully");
    }
});

// Reading Files
// Read Sync: Returns data directly. 'utf-8' is needed to get human-readable text.
const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);

// Read Async: Passes data into the callback function.
fs.readFile("./contacts.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}); 

// Updating & Managing Files
// Appending: Adds a timestamp to the file without deleting existing content.
fs.appendFileSync("./test.txt", new Date().toLocaleString() + "\n");

// Copying: Creates a duplicate of the file.
fs.cpSync("./test.txt", "./copy1.txt");

// Deleting (Unlinking): Removes the file from the system.
fs.unlinkSync("./copy1.txt");

// File Stats & Folders
// Getting file information (size, birthtime, etc.)
console.log(fs.statSync("./test.txt"));
console.log("Is it a file?:", fs.statSync("./test.txt").isFile());

// Creating Directories (Recursive allows creating nested folders)
fs.mkdirSync("mydocsnew/a/b", { recursive: true });