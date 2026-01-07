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