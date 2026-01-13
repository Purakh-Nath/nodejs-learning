# Building a REST API with Node.js and Express

This project marks a significant step in backend development. Instead of working with simple static responses, I built a complete RESTful API that handles real data operations. The server manages a dataset of 1,000 users and implements full CRUD functionality with persistent storage.

## What This Project Does

The server provides two distinct interfaces serving different purposes:

**Server-Side Rendering (SSR)**: When you visit `/users` in a browser, you get a fully rendered HTML page. This approach is useful for SEO and direct browser consumption.

**REST API**: Routes prefixed with `/api/` return raw JSON data. These endpoints are designed for consumption by frontend applications, mobile apps, or other services.

This **dual-interface (Hybrid Server)** approach demonstrates how a single Express server can serve both traditional web pages and modern API-driven applications.

## Core Concepts Implemented

### Working with Mock Data

Since a production database isn't part of this learning phase, I generated a realistic dataset using Mockaroo. The `MOCK_DATA.json` file contains 1,000 user records with properties like id, first_name, last_name, and email. This setup mimics real-world scenarios where you're working with substantial datasets.

### Dynamic Routing with Path Parameters

Rather than creating individual routes for each user, the API uses dynamic path segments. When someone requests `/api/users/42`, Express captures that `42` as a parameter. The route handler then searches the users array for a matching ID.

One critical detail: `req.params.id` comes in as a string, but our JSON data uses numeric IDs. This means comparisons need explicit type conversion using `Number(id)`, otherwise the strict equality operator will always return false.

### Middleware for Request Body Parsing

Express doesn't automatically parse incoming request data. When a client sends data in a POST or PATCH request, that data arrives as a raw stream. Middleware functions intercept the request before it reaches your route handlers and transform that stream into usable JavaScript objects.

Two middleware functions handle this:

`express.json()` parses JSON payloads from the request body.

`express.urlencoded({ extended: true })` handles form-encoded data, which is common when submitting HTML forms.

Without these middleware functions, `req.body` would be undefined, and you'd have no way to access the data clients send to your server.

### Persistent Data Storage

The most significant advancement in this project is making data changes permanent. In earlier experiments, modifications only existed in memory and disappeared when the server restarted. Now, every create, update, or delete operation writes the entire users array back to `MOCK_DATA.json` using the Node.js file system module.

The `fs.writeFile()` function handles this persistence. After modifying the in-memory array, the code stringifies it with proper formatting and overwrites the JSON file. This approach simulates database behavior until we integrate a real database solution.

## API Endpoints

### Get All Users
```
GET /api/users
```
Returns the complete array of user objects as JSON. This endpoint has no parameters and simply dumps the entire dataset.

### Get User by ID
```
GET /api/users/:id
```
Retrieves a single user matching the provided ID. The route extracts the ID from the URL, converts it to a number, and searches the array. If no match is found, it returns the user object.

### Create New User
```
POST /api/users
```
Accepts user data in the request body and creates a new record. The server generates an ID by adding 1 to the current array length, merges it with the provided data, pushes it to the array, and writes everything back to the file. Returns a success message on completion.

### Update User
```
PATCH /api/users/:id
```
Modifies specific fields of an existing user. The route finds the user by ID, then updates only the fields present in the request body. This partial update approach means clients can change just an email address without resending the entire user object. Changes are saved to the file immediately.

### Delete User
```
DELETE /api/users/:id
```
Removes a user from the dataset. The route filters out the user with the matching ID, reassigns the filtered array to the users variable, and persists the change. The response confirms which user ID was removed.

### View Users in Browser
```
GET /users
```
Renders an HTML page displaying all user first names in an unordered list. This route demonstrates server-side rendering by building an HTML string using template literals and array mapping.

## Error Handling

The API includes basic error responses for common scenarios. When a requested user ID doesn't exist, routes return a 404 status code with a clear error message. If file writing fails during create, update, or delete operations, the server responds with a 500 status code indicating a server-side problem.

These status codes follow HTTP conventions and help clients understand what went wrong without needing to parse response bodies for error indicators.

## Testing with Postman

Browsers naturally perform GET requests when you enter a URL, but testing POST, PATCH, and DELETE operations requires specialized tools. Postman provides a graphical interface for crafting requests with custom headers, bodies, and methods.

## Testing with Postman


When testing this API, you can observe status codes, response times, and payload sizes. For example, a successful POST returns status 200, while attempting to update a non-existent user returns 404. These details help verify that the API behaves correctly under different conditions.

## Technical Decisions

**Why `let` instead of `const` for users?** The delete operation reassigns the users variable to a filtered array. JavaScript's `const` prevents reassignment, so using `let` is necessary for this pattern.

**Why `JSON.stringify(users, null, 2)`?** The additional parameters format the JSON output with 2-space indentation. This makes the file human-readable, which is helpful during development when you need to manually inspect the data.

**Why check `!user` before proceeding?** Without existence checks, attempting to update or delete non-existent users could cause unexpected behavior. Returning early with error responses makes the API more robust and easier to debug.

## What I Learned

Building this API finally made Express click for me. Before this, a lot of it felt like magic. Request handling isn't magic; it's a series of functions processing data in sequence. Middleware sits in the middle of that sequence, transforming raw requests into something useful.

I used to think changing an array was **saving data**. Now I understand that nothing is really saved unless it is written to a file or database. Arrays exist in RAM and vanish when the process ends. Files persist on disk. Any real application needs a strategy for moving data between these two layers.

Working with 1,000 users made me realize how slow simple loops could get if the data grows. Searching through 1,000 users with `.find()` works fine, but with 100,000 users, you'd need better approaches like indexing or database queries.

The difference between rendering HTML server-side versus returning JSON highlighted two distinct architectural patterns. Traditional web applications render on the server. Modern applications separate frontend and backend, communicating through APIs. This project implements both patterns in one codebase.

## Running the Project

Start the server with `node index.js` or `node --watch index.js`. It listens on port 8000. Visit `http://localhost:8000/users` in a browser to see the HTML view. Use Postman or curl to interact with the `/api/users` endpoints for full CRUD operations.

The MOCK_DATA.json file must exist in the same directory as index.js. Any changes you make through the API will modify this file directly, so keep a backup if you want to reset to the original dataset.

## Final Notes

This project is part of my learning journey with Node.js and Express.  
It is not meant to be perfect or production-ready, but it shows how the core ideas work: routing, middleware, CRUD, and persistence.

I will keep improving this as I learn databases, authentication, and better project structure.