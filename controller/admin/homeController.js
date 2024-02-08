const asyncHandler = require("express-async-handler");
const Home = require("../../model/homeModel");

const createHome = asyncHandler(async (req, res) => {
  const { welcomeMessage, description } = req.body;
  const existingHome = await Home.findOne();
  if (!existingHome) {
    await Home.create(req.body);
    const saveHome = await Home.findOne();
    res.json({ saveHome });
  } else {
    throw new Error("Home record already exists");
  }
});

module.exports = { createHome };
