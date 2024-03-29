// server.js
const express = require("express");
const bodyParser = require("body-parser");
const dbRun = require("./config/dbconfig");
const { notFounnd, errorHandler } = require("./middlewares/errorHandler");
const adminRoutes = require("./routes/admin.routes");
const userRoutes = require("./routes/user.routes");
const env = require("dotenv").config();
const app = express();
const port = process.env.PORT || 9000;

dbRun();

app.use(bodyParser.json());

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api", userRoutes);


//error handler
app.use(notFounnd);
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
