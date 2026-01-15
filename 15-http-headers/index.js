const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const users = [
  { id: 1, name: "Purakhnath" },
];

// Reading client headers
app.get("/api/users", (req, res) => {
  console.log("Client Headers:", req.headers);

  // Setting custom response header
  res.setHeader("X-MyName", "Purakhnath Jyani");

  return res.json(users);
});

// Simple route to test form data
app.post("/api/form", (req, res) => {
  console.log("Form Body:", req.body);
  return res.json({ received: req.body });
});

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});