const express = require("express");
const { currentInformation } = require("../controllers/employee/employee");
const router = express.Router();

/* GET home page. */
router.get("/:id", currentInformation);

module.exports = router;
