const mongoose = require("mongoose");

async function dbRun() {
  try {
    // Connect to the MongoDB cluster
    await mongoose.connect(process.env.MONGODB_URL);
    // console.log("DB connected");
  } catch (e) {
    console.log("could not connect", e);
  }
}

module.exports = dbRun;
