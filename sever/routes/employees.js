const express = require("express");
const {
  employeesInformation,
  jobHistory,
} = require("../controllers/employee/employee");
const router = express.Router();

router.get("/:id", employeesInformation);
router.get("/jobHistory/:id", jobHistory);

module.exports = router;
