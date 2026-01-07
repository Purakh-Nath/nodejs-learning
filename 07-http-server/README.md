# Building our First HTTP Server

Moving into backend web development, This module covers how to turn a computer into a server using Node.js's built-in `http` module. This is where all the concepts of **Modules**, **File Handling**, and **Asynchronous Programming** finally come together.

---

## 1. The http Module

Node.js provides a built-in package called `http` to handle web requests. Before jumping into external libraries like Express, it's important to understand how to build everything from scratch using `http.createServer()`.

---

## 2. Request and Response (req, res)

The `createServer` method takes a callback function with two critical objects:

- **req (Request):**  
  This is an object containing all the data coming from the user. It tells the server the URL they visited, their IP address, and their browser headers.

- **res (Response):**  
  This is the object used to talk back to the user. We use `res.end()` to send the final data and tell the browser the request is finished.

---

## 3. Port Numbers

A **Port** is like a specific "door" to the server. While a server has one main IP address, it can run many services on different ports. For this project, **Port 8000** was used.

> **Note:** Only one server can occupy a specific port at a time.  
> If you try to run two servers on `8000`, the second one will throw an error.

---

## 4. Basic Routing

Routing is just a fancy way of saying:

> *"Deciding what to show the user based on the link they clicked."*

By checking `req.url`, a simple switch case can handle different pages like:

- `/` → Home Page  
- `/about` → About Page  
- `/contact` → Contact Page  

---

## Experimentation

Instead of just sending a `"Hello"` message, I integrated the **File Handling** knowledge.  
Every time a user visits a page, the server asynchronously logs the details in a `server.txt` file.

---

## My Implementation

```javascript
const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  console.log("Request Recieved");
  console.log("Request Headers", req.headers);
  const log = `${Date.now()} : ${req.url} New Request from ${
    req.socket.remoteAddress
  }\n`;
  fs.appendFile("server.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        res.end("About Page");
        break;
      case "/contact":
        res.end("Contact Page");
        break;
      default:
        res.end("404 Page Not Found");
        break;
    }
  });
  // res.end("Hello From Server");
});

myServer.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
```
## Key Observations

- **req.headers:**  
  This shows a lot of hidden information about the user, such as the browser they are using.

- **Async Logging:**  
  By placing the `switch` case inside the `fs.appendFile` callback, we ensure the log is written asynchronously without blocking the server’s execution.

- **req.socket.remoteAddress:**  
  This allows us to track the IP address of the user visiting the site.

- **Manual Restart:**  
  Every time the code is changed, the server must be stopped (`Ctrl + C`) and restarted to apply the updates.