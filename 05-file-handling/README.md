# File Handling in Node.js

**fs (File System)** module. This is one of the most powerful built-in modules in Node.js because it allows the server to interact directly with the computer's hard drive, something standard browser-side JavaScript cannot do for security reasons.


---

- **The fs Module**: Since it is built into Node.js, We don't need to install anything. I just use `require("fs")`.
- **Synchronous vs. Asynchronous**: This was the biggest takeaway.
  - **Sync methods** (like `writeFileSync`) **block** the execution of the code until the file operation is done. They return values directly.
  - **Async methods** (like `writeFile`) are **non-blocking**. They don't return values; instead, they require a callback function to handle the result or any errors.The result is received later via the callback.
- **Data Persistence**: Using `appendFileSync` allows us to add data to a file without overwriting what's already there. This is perfect for creating log files.
- **File Metadata**: I learned how to use `fs.statSync` to check things like file size, creation date, and whether a path is a file or a directory.
- **Directory Management**: Using `{ recursive: true }` with `mkdirSync` allows us to create nested folders (like `a/b/c`) in one go.

## Experimentation & Code

I practiced various operations to see how Node interacts with the disk. Here is the code I implemented:

```javascript
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
```

## File Overview

| File/Folder   | Description                                      |
|---------------|--------------------------------------------------|
| `file.js`     | The main script where I tested all fs operations. |
| `test.txt`    | A file generated and updated by the script.      |
| `contacts.txt`| A sample file I used for testing read operations.|
| `mydocsnew/`  | A directory structure created using Node.js.     |

## Summary

- **Browser JS** `cannot` touch the file system; **Node.js** `can`.
- **Sync** is easier for simple logic, but **Async** is better for performance-heavy applications.
- Always provide an **encoding** (like `utf-8`) when reading files to avoid getting a raw Buffer.
- `appendFile` is the **industry standard** for building logging systems.

---