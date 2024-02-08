const asyncHandler = require("express-async-handler");
const Home = require("../../model/homeModel");

const createHome = asyncHandler(async (req, res) => {
  const existingHome = await Home.findOne();
  if (!existingHome) {
    await Home.create(req.body);
    const saveHome = await Home.findOne();
    res.json(saveHome);
  } else {
    throw new Error("Home record already exists");
  }
});

const getHommeRecords = asyncHandler(async (req, res) => {
  try {
    const homeRecords = await Home.find();
    const responseData = homeRecords?.map((d) => {
      return {
        welcomeMeassage: d.welcomeMessage,
        description: d.description,
      };
    });
    res.json(...responseData);
  } catch (e) {
    throw new Error(e);
  }
});

module.exports = { createHome, getHommeRecords };
