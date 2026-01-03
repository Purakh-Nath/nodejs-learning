# Node.js Basics

This repository is created while learning Node.js step by step.  
It is based on a beginner-friendly video tutorial and is meant to help beginners understand what Node.js is, why it exists, and how JavaScript runs outside the browser.

---

## What is Node.js?

Node.js is not a framework.  
Node.js is not a library.

Node.js is a **JavaScript runtime environment**.

That means:

- It allows us to run JavaScript outside the browser
- We can run JavaScript directly on our computer or server

### Before Node.js

- JavaScript could only run inside browsers such as Chrome or Firefox

### After Node.js

- JavaScript can create servers
- JavaScript can read and write files
- JavaScript can build backend APIs

---

## How Node.js Works (Simple Explanation)

### The Browser Problem

Browsers can run JavaScript because they include a JavaScript engine.

For example:

- Chrome uses the V8 JavaScript engine

However, browsers do not allow:

- File system access
- Network port access
- Operating system level operations

### What Node.js Did

The creator of Node.js:

- Took the V8 JavaScript engine
- Embedded it inside a C++ program
- Added access to:
  - File system
  - Network
  - Operating system

As a result, JavaScript became powerful enough for backend development.

---

## Browser JavaScript vs Node.js

| Feature | Browser JavaScript | Node.js |
|------|------------------|--------|
| Runs in | Browser | Terminal / Server |
| File system access | No | Yes |
| DOM access | Yes | No |
| Backend APIs | No | Yes |
| Web servers | No | Yes |

---

## Running JavaScript with Node.js

### Using Node REPL (Quick Test)

Open your terminal and type:

```bash
node
```
Now you can run JavaScript directly:

```bash
2 + 5
```

```bash
console.log("Hello from Node.js")
```
Exit the REPL using:
```bash
.exit
```
Create a file called index.js.
```bash
const message = "Welcome to Node.js learning!";
const nodeVersion = process.version;

console.log(message);
console.log("Node Version:", nodeVersion);

function add(a, b) {
  return a + b;
}
console.log("Sum of 10 and 20 =", add(10, 20));
```
Run the file using:
```bash
node index.js
```
## What You Will Learn Next

- Creating a web server using the http module
- Working with files using the fs module
- Understanding how backend APIs work
- Using NPM packages
- Building real backend projects

## Prerequisites

- Before learning Node.js, you should know basic JavaScript:
- let and const
- Functions
- Arrays and objects
- Basic asynchronous concepts

## Why This Repository Exists

- To document my learning journey
- To build a strong Node.js foundation
- To follow real-world backend practices

---
## Final Note

This repository is beginner-focused.
As I learn more, this repository will grow step by step.
If you are also learning Node.js, feel free to follow along.
