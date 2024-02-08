const mangoose = require("mongoose");

const { Schema } = mangoose;

const aboutSchema = new Schema({
  title: String,
  status: { type: Boolean, default: true },
  description: String,
  imageUrl: String,
  dateOfBirth: Date,
  skills: [{ title: String, description: String }],
});

const About = mongoose.model("about", aboutSchema);
module.exports = About;
