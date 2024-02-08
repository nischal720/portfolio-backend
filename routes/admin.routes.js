const express = require("express");
const {
  createHome,
  getHommeRecords,
} = require("../controller/admin/homeController");
const router = express.Router();

router.post("/create-home", createHome);
router.get("/home", getHommeRecords);

module.exports = router;
