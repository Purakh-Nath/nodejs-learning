# Node.js Installation and Setup

This section covers how to install Node.js on your system, understand the available versions, and verify that everything is working correctly.

By the end of this step, you will have Node.js and NPM installed and ready to use.

---

## Downloading Node.js

To install Node.js, visit the official website:

https://nodejs.org

You will see two versions available for download.

### LTS (Long Term Support)

- Stable and recommended for most users
- Best choice for learning and production use
- Receives security and bug fixes for a long time

Node.js follows an even and odd versioning strategy:

- Even-numbered versions (16, 18, 20) are LTS
- These versions are considered stable

### Current Version

- Includes the latest features
- May contain experimental or unstable changes
- Not recommended for production or beginners

Odd-numbered versions (17, 19, 21) fall under this category.

For most users, **always choose the LTS version**.

---

## Installing Node.js

1. Download the installer for your operating system (Windows, macOS, or Linux)
2. Run the installer
3. Follow the setup steps and accept the default options
4. Finish the installation

Node.js automatically installs **NPM (Node Package Manager)** along with it.

---

## Verifying the Installation

After installation, verify that Node.js and NPM are correctly set up.

### Check Node.js Version

Open your terminal and run:

```bash
node --version
```
If Node.js is installed correctly, you will see a version number such as:
```bash
v24.x.x
```
### Check NPM Version

NPM is used to manage external packages and libraries.

Run:
```bash
npm -v
```
If a version number appears, NPM is installed correctly.

### Running JavaScript Using Node.js
-> Using the Node REPL

- Node.js provides an interactive environment called REPL (Read–Eval–Print Loop).

Start it by typing:
```bash
node
```
Now you can run JavaScript directly:
```bash
console.log("Hello Node.js");
2 + 3
```
Exit the REPL using:
```bash
.exit
```
### Creating a Script File

Create a file named index.js to test your setup.
```bash
const username = "Developer";
const currentYear = new Date().getFullYear();

console.log(`Hello, ${username}! Welcome to Node.js.`);
console.log(`The current year is ${currentYear}.`);
```
Run the file using:
```bash
node index.js
```
If you see the expected output, your Node.js setup is complete.

### Summary
- Install the LTS version of Node.js for stability
- NPM comes bundled with Node.js
- Use node -v and npm -v to verify installation
- Use Node REPL or script files to run JavaScript
