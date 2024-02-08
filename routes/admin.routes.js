const express = require("express");
const { createHome } = require("../controller/admin/homeController");
const router = express.Router();

router.post("/create-home", createHome);

module.exports = router;
