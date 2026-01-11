// This file exists to demonstrate why dependency versioning matters.
// Check the README for an explanation of versioning and update risks.

const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello From Home Page"));

app.get("/about", (req, res) =>
  res.send(`Hello From About Page Hey ${req.query.name || ""}`)
);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});