const express = require("express");
const { userAuth, staffAuth } = require("../../middleware/auth");
const validator = require("../../middleware/validator");
const { validateBank } = require("../../utils/validation");
const router = express.Router();

const {
  DeleteBank,
  UpdateBank,
  GetAllBanks,
  GetBank,
  CreateBank,
} = require("./controller");

router.post("/", staffAuth, validator(validateBank), CreateBank);
router.get("/", GetAllBanks);
router.get("/:id", userAuth, GetBank);
router.put("/:id", staffAuth, validator(validateBank), UpdateBank);
router.delete("/:id", staffAuth, DeleteBank);

module.exports = router;
