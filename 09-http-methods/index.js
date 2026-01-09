const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();

  const myUrl = url.parse(req.url, true);

  // Logging the method
  const log = `${Date.now()}: [${req.method}] ${
    req.url
  } New Request Received\n`;

  fs.appendFile("server.txt", log, (err) => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method === "GET") {
          res.end("Home Page - You are using a GET request.");
        }
        break;

      case "/about":
        res.end("Hi, I'm a developer learning HTTP Methods.");
        break;

      case "/signup":
        if (req.method === "GET") {
          // Signup Form
          res.end("This is a GET request: Here is your Signup Form.");
        } else if (req.method === "POST") {
          //  database query
          res.end("This is a POST request: Successfully signed up.");
        }
        break;

      default:
        res.end("404 Not Found");
    }
  });
});

myServer.listen(8000, () => console.log("Server Started on Port 8000"));