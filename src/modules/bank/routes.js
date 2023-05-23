const express = require("express");
const { userAuth, staffAuth } = require("../../middleware/auth");
const router = express.Router();

const {
  BankRemover,
  BankFetcher,
  BanksFetcher,
  BankCreator,
  BankModifier,
} = require("./controller");

router.post("/", staffAuth, BankCreator);
router.get("/", userAuth, BanksFetcher);
router.get("/:id", userAuth, BankFetcher);
router.put("/:id", staffAuth, BankModifier);
router.delete("/:id", staffAuth, BankRemover);

module.exports = router;
