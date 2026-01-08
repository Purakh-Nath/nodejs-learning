const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if(req.url === '/favicon.ico') {
        return res.end();
    }
  console.log("Request Recieved");
  console.log("Request Headers", req.headers);
  const log = `${Date.now()} : ${req.url} New Request from ${
    req.socket.remoteAddress
  }\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("server.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end("Hi," + username);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("You searched for: " + search);
        break;
      case "/contact":
        res.end("Contact Page");
        break;
      default:
        res.end("404 Page Not Found");
        break;
    }
  });
});

myServer.listen(8000, () => {
  console.log("Server is listening on port 8000");
});