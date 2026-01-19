# Connecting Node.js with MongoDB

## Overview

This is a simple Node.js API that lets you manage users using a real MongoDB database. You can create, read, update, and delete users through HTTP requests.

I built this to move away from JSON files and start working with a real database. This is where backend started feeling serious.

## Why I Built This

Before this, I was saving data in JSON files. It worked for learning, but:

- Data could break easily
- Files got messy as they grew
- It didn’t feel like real backend work

So I moved to MongoDB with Mongoose to learn how real apps store data.

## Tech Used

- **Node.js** – runs JavaScript on the server
- **Express** – builds API routes
- **MongoDB** – stores data
- **Mongoose** – connects Node with MongoDB

## The Core Idea (How Mongoose Works)

Mongoose works in three simple steps:

1. **Schema** – define what a user looks like
2. **Model** – create a tool to talk to the database
3. **Query** – use that tool to create, read, update, delete data

That's it.

## Setup

Install dependency:

    npm install mongoose


Connect to MongoDB:
```
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Purakh-App-1");
    console.log("MongoDB connected");
  } catch (err) {
    console.log("DB error:", err);
  }
};

module.exports = connectDB;
```

Make sure MongoDB is running before starting the app.

### User Schema
```
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  jobTitle: { type: String },
  gender: { type: String }
}, { timestamps: true });
```

What this means:

- firstName and email are required

- email must be unique

- createdAt and updatedAt are added automatically

### API Behavior

- All routes are under /api/users.

Create User

```
POST /api/users
```


Body:

```
{ "firstName": "purakhnath",
  "email": "purakhnath@mail.com"
}
```

- Get All Users
```
GET /api/users
```

- Get One User
```
GET /api/users/:id
```

Update User
```
PATCH /api/users/:id
```

Delete User
```
DELETE /api/users/:id
```

- MongoDB automatically creates _id for every user.
- That is what we use in :id.


### CRUD with Mongoose

Create:
```
User.create(data)
```

Read:
```
User.find()
User.findById(id)
```

Update:
```
User.findByIdAndUpdate(id, data, { new: true })
```

Delete:
```
User.findByIdAndDelete(id)
```


- All database actions are async, so everything uses async/await.

### Running the Project

Install packages
```
npm install
```

Start MongoDB
(Default: port 27017)

Run server
```
npm start
```

Server runs at:

http://localhost:8000

### Things I Learned

- MongoDB uses _id, not numeric IDs

- _id must be 24 characters

- Mongoose adds __v automatically for versioning

- Field names must match schema exactly

- Async/await is required for database work

### Problems I Faced


- Used wrong ID length → CastError

- Sent last_name instead of lastName → update didn't work

- Update returned old data → fixed using { new: true }

- Empty body caused errors → added checks

- Each mistake taught me something real.

### Key Observations

- Mongoose handles validation like unique emails

- MongoDB creates _id automatically

- Collection names become plural automatically

- Timestamps save time

- Database code is always async

### Summary

- Mongoose connects Node.js and MongoDB.
- Schemas define rules.
- Models do the work.
- Queries change the data.

This step finally made backend feel real.