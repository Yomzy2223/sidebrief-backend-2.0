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

router.post("/", BankCreator);
router.get("/", BanksFetcher);
router.get("/:id", BankFetcher);
router.put("/:id", BankModifier);
router.delete("/:id", BankRemover);

module.exports = router;
