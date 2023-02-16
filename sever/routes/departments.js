const express = require("express");
const {
  departmentsInformation,
} = require("../controllers/department/department");
const router = express.Router();

router.get("/:id", departmentsInformation);

module.exports = router;
