# Handling URLs and Query Parameters

In this module, I learned how to break down a URL and extract specific data from it. This is exactly how sites like Google and YouTube handle search results or how Amazon shows specific products based on IDs.

---

## 1. The Anatomy of a URL

A URL (Uniform Resource Locator) is much more than just a web address. It consists of:

- **Protocol:** `http://` or `https://` (rules for communication).
- **Domain:** `localhost:8000` (the human-friendly name for our server).
- **Path:** `/about` or `/search` (the specific location on the server).
- **Query Parameters:** `?myname=purakhnath` (extra information sent to the server).

---

## 2. The url Module

The native `req.url` in Node.js provides a single string containing the path and the query. To actually use the data inside, I used the `url` module.

- **`url.parse(req.url, true)`**: By passing `true`, Node.js automatically converts the query string into a clean JavaScript object that we can easily read.

---

## 3. Pathname vs. URL

I discovered that if I don't parse the URL, visiting `/about?myname=purakhnath` would trigger a 404 error because the server thinks the path is the whole string.

By using `myUrl.pathname`, the server only looks at `/about` for routing and keeps the `myname` part separate for logic.

---

## Experimentation: Making the Server Dynamic

I updated the server to not just show pages, but to actually "read" what the user is sending through the URL.

### My Implementation:

```javascript
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
```
## Key Observations

- **Handling Favicon:** Browsers automatically request `/favicon.ico`. I added a check to ignore this so it doesn't clutter my logs or logic.

- **`myUrl.query`:** This is where the magic happens. If I visit `localhost:8000/about?myname=purakhnath`, `myUrl.query.myname` gives me exactly `"purakhnath"`.

- **Dynamic Search:** By visiting `localhost:8000/search?search_query=nodejs+architecture`, I can see how servers process search terms.

- **The Query String:** Multiple parameters can be sent using the `&` symbol (e.g., `?name=purakhnath&id=1`), and Node.js will parse them all into the query object.