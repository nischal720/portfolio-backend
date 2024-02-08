const mongoose = require("mongoose");
const { Schema } = mongoose;

const homeSchema = new Schema({
  welcomeMessage: String,
  featuredProjects: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
});

const Home = mongoose.model("home", homeSchema);

module.exports = Home;
