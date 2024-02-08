const mongoose = require("mongoose");
const { Schema } = mongoose;

const portfolioSchema = new Schema({
  title: String,
  description: String,
  projects: [
    {
      title: String,
      description: String,
      imageUrl: String,
      technologies: [{ name: String, url: String }],
    },
  ],
});

const Portfolio = mongoose.model("portfolio", portfolioSchema);

module.exports = Portfolio;
