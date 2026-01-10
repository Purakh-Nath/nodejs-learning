const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello From Home Page");
});

app.get("/about", (req, res) => {
    return res.send("Hello From About Page" + " Hey " + req.query.name);
});

app.post("/signup", (req, res) => {
    return res.send("Hello From Signup Page");
});

// const myServer = http.createServer(app);

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});
