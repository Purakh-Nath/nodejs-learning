const express = require("express");
const fs = require("fs");
const app = express();

// Built-in Middleware
app.use(express.urlencoded({ extended: false }));

// Custom Middleware 1
app.use((req, res, next) => {
    console.log("Hello from Middleware 1");
    
    // We can add custom data to the request object
    req.myUserName = "Purakhnath"; 

    // logging using File System
    const logData = `${Date.now()}: ${req.method} ${req.path}\n`;
    fs.appendFile("log.txt", logData, (err) => {
        next(); // Move to the next checkpoint
    });
});

//Custom Middleware 2
app.use((req, res, next) => {
    console.log("Hello from Middleware 2", req.myUserName);
    // next(); 
    // If I do not call next(), the request will HANG here
    next();
});

//The Final Route
app.get("/api/users", (req, res) => {
    console.log("Inside the Route Handler", req.myUserName);
    return res.json({ message: "Success" });
});

app.listen(8000, () => console.log("Server Started"));