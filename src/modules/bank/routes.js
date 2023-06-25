const express = require("express");
const { userAuth, staffAuth } = require("../../middleware/auth");
const validator = require("../../middleware/validator");
const { validateBank } = require("../../utils/validation");
const router = express.Router();

const {
  BankRemover,
  BankFetcher,
  BanksFetcher,
  BankCreator,
  BankModifier,
} = require("./controller");

router.post("/", staffAuth, validator(validateBank), BankCreator);
router.get("/", BanksFetcher);
router.get("/:id", userAuth, BankFetcher);
router.put("/:id", staffAuth, validator(validateBank), BankModifier);
router.delete("/:id", staffAuth, BankRemover);

module.exports = router;
