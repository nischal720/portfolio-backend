const mongoose = require("mongoose");
const { Schema } = mongoose;

const portfolioSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: Array, required: true },
  company: { name: String, url: String },
});

const Portfolio = mongoose.model("projects", portfolioSchema);

module.exports = Portfolio;
