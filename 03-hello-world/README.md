# Hello World in Node.js

This section introduces writing and running your first Node.js script.  
It explains how JavaScript runs in a Node.js environment, how it differs from the browser, and how to initialize a Node.js project using NPM.

---

## Running JavaScript in Node.js

In Node.js, JavaScript does not require an HTML file or a browser.

You simply:
1. Create a `.js` file
2. Run it using the `node` command

Example:

```bash
node hello.js
```
The code is executed directly by the Node.js runtime in the terminal.

## Node.js vs Browser Environment

Although Node.js and browsers both use the V8 JavaScript engine, their environments are very different.

What is NOT Available in Node.js

Node.js is a server-side runtime, so browser-specific features are not included.
- No window object
- No DOM (document, getElementById, etc.)
- No UI-related functions like alert()

Trying to use these will result in errors.

## What Node.js Provides Instead

Node.js focuses on backend and system-level capabilities, such as:
- File system access
- Cryptography
- Network and server APIs
- Process and OS-level features

This makes Node.js suitable for building servers, APIs, and backend tools.

## Understanding package.json

The package.json file is the configuration file of a Node.js project.
It stores:
- Project metadata (name, version)
- Dependencies
- Custom scripts

## Initializing a Project

Run the following command inside your project folder:
```bash
npm init
```
This will guide you through creating a ```package.json``` file.

To skip prompts and use defaults:
```bash
npm init -y
```
## Using NPM Scripts

Instead of running scripts manually with node, you can define shortcuts.

Example ```package.json``` :
```
{
  "name": "03-hello-world",
  "version": "1.0.0",
  "description": "",
  "license": "ISC",
  "author": "purakhnath jyani",
  "type": "commonjs",
  "main": "hello.js",
  "scripts": {
    "start": "node hello.js"
  }
}
```
Now you can run your project using :
```npm start```

## How to Run This Project
---
## Step 1: Initialize the Project

```npm init -y```

## Step 2: Run the Script Directly
``` node hello.js``` or ```node index.js```

## Step 3: Run Using NPM Script
```npm start```

## File Overview

```hello.js``` – Main JavaScript file

```package.json``` – Project configuration and scripts

## Summary

- Node.js runs JavaScript outside the browser
- Browser-specific APIs are not available in Node.js
- Node.js provides system-level capabilities instead
- ```package.json``` manages project configuration
- NPM scripts simplify running applications