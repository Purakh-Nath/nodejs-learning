# Hello MongoDB

Till now, all my projects were using a JSON file like `MOCK_DATA.json`. It was fine for learning REST APIs, but it had big problems. If the server stopped, sometimes my data felt unsafe. Also, once the file gets big, it becomes slow and messy to work with.

This is where I move from fake storage to a real database: **MongoDB**.

---

## What is MongoDB?

**MongoDB** is a NoSQL database that differs from traditional SQL databases like MySQL. Instead of using tables with fixed rows and columns, MongoDB stores data as documents resembling JavaScript objects.

---

## Why I'm Using MongoDB

- **Flexibility**: I don't need to make all decisions on day one. If I later want to add fields like `bio` or `profile_pic`, I can just add them.
- **BSON Compatibility**: It uses BSON, which is an enhanced version of JSON that is more efficient for machines. Since I'm already familiar with JSON in Node.js, this transition feels natural.
- **Performance**: MongoDB is designed to handle large amounts of data and high traffic efficiently.

---

## How MongoDB Organizes Data

Initially, the structure of MongoDB confused me since I was accustomed to tables. Here's how it is organized:

- **Database**: The primary container for a project.  
  *Example*: `PurakhDB`
  
- **Collection**: Similar to a table but more flexible.  
  *Example*: `users`, `products`
  
- **Document**: A single record resembling a JavaScript object.  
  *Example*: One user's data

The hierarchical order is:

Database → Collection → Document

Once I grasped this structure, everything started to fall into place.

---

## Installing MongoDB

Setting up MongoDB requires a bit of effort, but once it's running, it feels robust.

### Windows:

1. Download the MongoDB Community Edition for Windows.
2. Choose the latest stable version.
3. During installation, select "Install as a Service" to ensure it starts automatically.
4. Install **MongoDB Compass** - it provides a visual way to interact with your data.

### Mac (with Homebrew):

```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```
### MongoDB Shell (mongosh)

- Previously called `mongo`, it is now referred to as `mongosh`.

- Windows: Comes bundled with the installer.
- Mac & Windows : You can start it by typing:
```bash
mongosh
```
### First Commands I Tried

 - Before using MongoDB in my Node.js app, I tested it directly in the shell to make sure everything was working.

```bash
mongosh
```
It connected successfully:
```bash
Using MongoDB: 8.2.3
Using Mongosh: 2.6.0
```
Then I tried some basic commands:
```bash
show dbs
use PurakhDB
db.createCollection("users")
db.users.insertOne({ name: "Purakhnath", role: "Developer" })
db.users.find()
```
This is what MongoDB returned:

```bash
{ ok: 1 }

{
  acknowledged: true,
  insertedId: ObjectId('696a0bd91f824ce539628ca0')
}

[
  {
    _id: ObjectId('696a0bd91f824ce539628ca0'),
    name: 'Purakhnath',
    role: 'Developer'
  }
]

```

Seeing my own data saved and returned from the database made it feel real.
It looks just like a JavaScript object, so it didn't feel strange at all.

### What I Learned
- MongoDB integrates naturally with Node.js, as both utilize JSON-like data.
- My data remains intact even after restarting the server or my PC.
- The shell is invaluable for verifying if data is being saved correctly.
- Initially, the absence of tables felt strange, but I've come to appreciate the flexibility.

### Summary
- NoSQL means there are no fixed tables.
- Data is stored as documents within collections.
- The overarching structure is: Database → Collection → Document.

Helpful links:
- MongoDB download: https://www.mongodb.com/try/download/community
- MongoDB Compass: https://www.mongodb.com/products/compass
- Mongosh docs: https://www.mongodb.com/docs/mongodb-shell/