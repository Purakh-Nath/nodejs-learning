const app = require("./src/app");
const connectDB = require("./src/config/db");

connectDB();

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});