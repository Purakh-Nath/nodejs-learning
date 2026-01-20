# Project Overview

This is a simple Node.js project that connects to MongoDB. It lets you create, read, update, and delete users. It uses MVC architecture to keep the code organized.

## Where the Code Is

The full working code for this project is here:

https://github.com/Purakh-Nath/nodejs-learning/tree/main/18-nodejs-mongodb-connection

All files, folders, and MVC structure described below are implemented in that folder.

## Why This Project Exists

I built this to learn how Node.js works with MongoDB.
At first, everything was in one file. That worked, but it became hard to read and manage.
So I organized the code into folders the way real projects do.

## Tech Used

- Node.js for the server
- Express for handling HTTP requests
- MongoDB for the database
- Mongoose to make MongoDB easier to use

## Folder Structure Explained

The main code is in the `src` folder. Here's why:

- `app.js`: Sets up Express and routes. It's the main app file.
- `config/db.js`: Handles the database connection.
- `controllers/user.controller.js`: Has the logic for user operations.
- `models/user.model.js`: Defines what a user looks like in the database.
- `routes/user.routes.js`: Maps URLs to controller functions.

Outside `src`:

- `index.js`: Starts the server and connects to DB.
- `package.json`: Lists dependencies and scripts.

This structure keeps things separate. Models handle data, controllers handle logic, routes handle URLs.

## What MVC Means in This Project

MVC stands for Model-View-Controller. In this app:

- **Model**: The user model. It defines the data structure and talks to MongoDB.
- **View**: There isn't one here. This is an API, so it returns JSON, not HTML.
- **Controller**: Handles the business logic. It gets data from requests, uses the model, and sends responses.

MVC helps organize code. Without it, everything would be in one file, which is hard to manage.

## How Request Flows in This Code

Here's how a request works:

1. Someone sends a request to `/api/users` (for example).
2. The route in `user.routes.js` matches the URL and calls the right controller function.
3. The controller function in `user.controller.js` gets the data from the request.
4. It uses the model in `user.model.js` to talk to MongoDB.
5. The model saves or gets data from the database.
6. The controller sends a response back as JSON.

For example, to create a user:

- POST to `/api/users`
- Route calls `controller.createUser`
- Controller checks the body, creates user with model
- Model saves to DB
- Controller returns the new user

## Models Explained

The model is in `user.model.js`. It uses Mongoose to define a schema.

A user has:
- firstName (required)
- lastName
- email (required, unique)
- jobTitle

The model exports a Mongoose model. Controllers use this to interact with the DB.

## Controllers Explained

The controller is in `user.controller.js`. It has functions for each operation:

- `createUser`: Makes a new user. Checks if body is empty or missing fields.
- `getUsers`: Gets all users.
- `getUser`: Gets one user by ID.
- `updateUser`: Updates a user.
- `deleteUser`: Deletes a user.

Each function uses the User model. It handles errors like "user not found".

## Routes Explained

Routes are in `user.routes.js`. It uses Express Router.

It maps HTTP methods and paths to controller functions:

- POST / → createUser
- GET / → getUsers
- GET /:id → getUser
- PATCH /:id → updateUser
- DELETE /:id → deleteUser

In `app.js`, these routes are mounted at `/api/users`.

## App & Server Setup

In `app.js`:

- Import Express and routes.
- Create app.
- Use `express.json()` to parse JSON bodies.
- Mount routes at `/api/users`.
- Export the app.

In `index.js`:

- Import app and DB connect function.
- Connect to DB.
- Start server on port 8000.

## How to Run

First, install dependencies:

```
npm install
```

Make sure MongoDB is running locally on port 27017.

Then:

```
npm start
```

The server runs on http://localhost:8000.

## Database Setup

Install MongoDB locally. It connects to `mongodb://localhost:27017/Purakh-App-1`.

The database name is "Purakh-App-1". It creates collections automatically.

## API Endpoints

All endpoints are under `/api/users`.

- POST /api/users: Create user. Send JSON with firstName, email, etc.
- GET /api/users: Get all users.
- GET /api/users/:id: Get one user.
- PATCH /api/users/:id: Update user.
- DELETE /api/users/:id: Delete user.

Responses are JSON. Errors have status codes like 400 or 404.

## What I Learned

MVC makes code easier to read and change. Separating concerns helps.

I learned how Mongoose schemas work. Unique fields, required fields.

Error handling is important. Checking for empty bodies prevents crashes.

## Problems I Faced

DB connection sometimes fails if MongoDB isn't running.

Forgot to check for required fields, got validation errors.

Had to restart server a lot during development.

## Next Steps

Add more validation, like email format.

Add authentication.

Use environment variables for DB URL.

Maybe add a frontend.