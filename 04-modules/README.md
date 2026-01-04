# Module : Understanding Node.js Modules

Today, I took a deeper dive into how Node.js handles code organization. I explored a crucial concept: **Modular Programming**. Instead of writing 1000 lines in one file (which is a nightmare to maintain), we split our logic into smaller, reusable pieces called modules.

In Node.js, every JavaScript file is treated as a separate module. By default, code inside a file is private. To share it, we must explicitly export it.

---

## What I Learned

- **What is a Module?** Basically, every JavaScript file in Node is a module.
- **The `require()` Function:** This is how we import code from other files. 
    - Use `./filename` for local files.
    - Just the `name` for built-in modules (like `fs`, `os`, or `http`).
- **`module.exports` vs `exports`:** - `module.exports` is what the `require` function actually returns. By default, it's an empty object `{}`.
    - We can attach functions, variables, or even entire classes to it to make them "public."
- **Destructuring:** A cleaner and more modern way to import only the specific functions you need from a module.
- **Node.js vs Browser:** Node focuses on system-level capabilities (File system, OS) rather than UI (DOM, Window).

---

## Experimentation

I created a simple `math.js` file that handles basic arithmetic and successfully imported it into `hello.js`. 

### `math.js` (The Module)
```javascript
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// Exporting as an object so both functions are available
module.exports = {
    add,
    sub,
};
```

### `index.js` (The Main Script)
```javascript
const math = require("./math");

console.log("Result of Addition:", math.add(2, 4));
console.log("Result of Subtraction:", math.sub(10, 5));
```
> **Note:**  
> If you try to require a local file **without** the `./` prefix, Node.js will throw a  
> `MODULE_NOT_FOUND` error because it starts searching in **global/internal libraries**  
> instead of our project folder.

***How to Run***

## Step 1: Initialize the Project
`npm init -y`
## Step 2: Run the Script Directly
`node index.js`
## Step 3: Run Using NPM Script
Ensure your `package.json` has a start script, then run:

`npm start`

## File Overview
`math.js` – Contains the core mathematical logic and functions.

`index.js` – The main entry point that requires and uses the math module.

`package.json` – Project configuration, metadata, and scripts.

## Summary
- Modularity: Prevents code clutter and makes debugging easier.
- Exporting: module.exports is the "bridge" that allows code to leave a file.
- Importing: require() is the "bridge" that brings code into a file.