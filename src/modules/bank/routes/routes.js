const express = require("express");
const router = express.Router();

const {
  GetAll,
  DeleteBank,
  GetBank,
  GetAllBanks,
  CreateBank,
  UpdateBank,
} = require("../controller/bankController");

router.post("/", CreateBank);
router.get("/", GetAllBanks);
router.get("/:id", GetBank);
router.put("/:id", UpdateBank);
router.delete("/:id", DeleteBank);

module.exports = router;
