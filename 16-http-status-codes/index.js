const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let users = [
    { id: 1, name: "Purakhnath" },
    { id: 2, name: "Siddharth" },
    { id: 3, name: "Jayant" },
];

// GET all users — 200 OK
app.get("/api/users", (req, res) => {
  console.log("Client Headers:", req.headers);
  res.setHeader("X-MyName", "Purakhnath Jyani");
  return res.status(200).json(users);
});

// GET single user — 404 if not found
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.status(200).json(user);
});

// POST user — 201 Created or 400 Bad Request
app.post("/api/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ msg: "Name is required" });
  }

  const newUser = { id: users.length + 1, name };
  users.push(newUser);

  return res.status(201).json({ status: "created", user: newUser });
});

// Form test — 200 OK
app.post("/api/form", (req, res) => {
  console.log("Form Body:", req.body);
  return res.status(200).json({ received: req.body });
});

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});