const express = require("express");
const { createHome } = require("../controller/admin/homeController");
const { postPortfolio } = require("../controller/admin/portfolioController");
const router = express.Router();

//Api for home
router.post("/create-home", createHome);

//API for portfolio
router.post("/create-portfolio", postPortfolio);

module.exports = router;
