// server.js
const express = require("express");
const dbRun = require("./config/dbconfig");
const app = express();
const port = process.env.PORT || 9000;

dbRun();
// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, this is your portfolio backend!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
