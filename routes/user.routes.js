const express = require("express");
const { getHommeRecords } = require("../controller/admin/homeController");
const { getPortfolio } = require("../controller/admin/portfolioController");
const router = express.Router();

router.get("/home", getHommeRecords);
router.get("/projects", getPortfolio);
module.exports = router;
