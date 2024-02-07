const mongoose = require("mongoose");
const uri =
  "mongodb+srv://dhakalnischal776:NayP1YbkvquUCEnf@cluster0.dxodolq.mongodb.net/portfolio?retryWrites=true&w=majority";
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function dbRun() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (err) {
    console.log(err);
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}

module.exports = dbRun;
