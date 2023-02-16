const express = require("express");
const {
  departmentsInformation,
  salaryIncrease,
} = require("../controllers/department/department");
const router = express.Router();

router.get("/:id", departmentsInformation);
router.patch("/increase/:id", salaryIncrease);

module.exports = router;
