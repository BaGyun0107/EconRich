const express = require("express");
const {
  currentInformation,
  jobHistory,
} = require("../controllers/employee/employee");
const router = express.Router();

router.get("/currentinformation/:id", currentInformation);
router.get("/jobHistory/:id", jobHistory);

module.exports = router;
