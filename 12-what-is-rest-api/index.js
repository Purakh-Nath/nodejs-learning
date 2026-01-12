const express = require("express");
const app = express();

app.use(express.json());

/*
WRONG (Action-based URLs)
GET    /getUsers
POST   /createUser
PATCH  /updateUser/1
DELETE /deleteUser/1

RIGHT (REST / Resource-based URLs)
GET    /users
POST   /users
PATCH  /users/:id
DELETE /users/:id

Rule: URLs use NOUNS (resources).
Action is decided by the HTTP method.
*/

// GET -> Read users
app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Purakhnath" }]);
});

// POST -> Create user
app.post("/users", (req, res) => {
  res.status(201).json(req.body);
});

// PATCH -> Update user
app.patch("/users/:id", (req, res) => {
  res.json({ id: req.params.id, ...req.body });
});

// DELETE -> Remove user
app.delete("/users/:id", (req, res) => {
  res.sendStatus(204);
});

app.listen(8000, () => console.log("REST API running on port 8000"));