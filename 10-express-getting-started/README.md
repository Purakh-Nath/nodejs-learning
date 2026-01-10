#  Started with Express.js

I have finally moved from raw Node.js to **Express**, and it feels like upgrading from a cycle to a sports car. This module covers why we use frameworks and how Express handles all the "boring" parts of backend development for us.

---

## Why Express? (The Problem it Solves)
Before Express, my `index.js` was becoming an "ugly" mess of `switch` cases and nested `if/else` blocks to check HTTP methods and paths. 

### The Old Way (Painful):
- Manually checking `req.url` and `req.method`.
- Installing the `url` package just to read a name from the link.
- Writing complex logic for every single page.

### The Express Way (Clean):
Express handles the routing, method checking, and URL parsing automatically. I don't even need the `http` module anymore because Express uses it internally.

---

### 1. `app.get()` & `app.post()`
Instead of one big "Handler" function, I can now write small, specific functions for each route. 
- `app.get('/about', ...)` only runs when someone visits the About page using a GET request. It’s much cleaner.

### 2. Built-in Query Parsing
This was a huge relief,I uninstalled the `url` package. Express automatically parses query parameters and puts them in **`req.query`**.
> *Example:* `localhost:8000/about?name=purakhnath` -> `req.query.name` gives me "purakhnath" instantly.

### 3. `res.send()` vs `res.end()`
In Express, we use **`res.send()`**. It’s smarter than the native `res.end()` because it automatically sets the correct content type (like telling the browser it's receiving text or HTML) so we don't have to.

### 4. Simplified `app.listen()`
I don't need to manually create a server using `http.createServer`. I can just call `app.listen(8000)`, and Express handles the rest.

---

## How to Run the Project

1. Install dependencies:
   `npm install`

2. Start the server:
   `node index.js` or `node --watch index.js`

The server will run on `http://localhost:8000`

## Summary
- Express is a "Minimalist" framework it doesn't add clutter; it just makes Node.js easier to use.
- Routing is now method-based (app.get, app.post).
- req.query is a built-in feature, saving us from external dependencies.
- It makes the code Modular and much easier to maintain as the project grows.