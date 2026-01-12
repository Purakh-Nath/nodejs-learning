const express = require("express");
const fs = require("fs");
let users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

app.use(express.json());
// Middleware to parse form data into req.body
app.use(express.urlencoded({ extended: true }));

// Routes

// /api/users -> API endpoint that returns JSON data


app.get("/api/users", (req, res) => {
    res.json(users);
});


// /users -> returns an HTML page
// Example of SSR (Server-Side Rendering)

app.get("/users" , (req, res) => {
    const html = `
    <h1>Users</h1>
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
});


app.get("/api/users/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === Number(id));
    res.json(user);
});

app.post("/api/users", (req, res) => {
    const user = { id: users.length + 1, ...req.body };
    users.push(user);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) return res.status(500).json({ message: "File write failed" });
        res.json({ message: "User created successfully" });
    });
});


app.patch("/api/users/:id", (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email } = req.body;
    const user = users.find((user) => user.id === Number(id));
    if (!user) return res.status(404).json({ message: "User not found" });

    if (first_name) user.first_name = first_name;
    if (last_name) user.last_name = last_name;
    if (email) user.email = email;

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) return res.status(500).json({ message: "File write failed" });
        res.json({ message: `User with id ${id} updated successfully` });
    });
});


app.delete("/api/users/:id", (req, res) => {
    const { id } = req.params;
    const exists = users.some(user => user.id === Number(id));
    if (!exists) return res.status(404).json({ message: "User not found" });

    users = users.filter((user) => user.id !== Number(id));

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) return res.status(500).json({ message: "File write failed" });
        res.json({ message: `User with id ${id} deleted successfully` });
    });
});


app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});