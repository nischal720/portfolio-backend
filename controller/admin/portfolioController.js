const asyncHandler = require("express-async-handler");
const Portfolio = require("../../model/portfolioModel");

const postPortfolio = asyncHandler(async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({
        status: 400,
        message: "No data provided",
      });
      return; // Stop execution if req.body is an empty array
    }

    await Portfolio.create(req.body);
    res.json({ message: "Success" });
  } catch (error) {
    throw new Error(error);
  }
});

const getPortfolio = asyncHandler(async (req, res) => {
  const portfolios = await Portfolio.find();
  const responseData = portfolios?.map((d) => {
    return {
      title: d.title,
      description: d.description,
      technologies: d.technologies,
      company: d.company,
      id: d.id,
    };
  });
  res.json(responseData);
});

module.exports = { postPortfolio, getPortfolio };
