const express = require("express");
const router = express.Router();

const {
  GetAll,
  DeleteBank,
  GetBank,
  GetAllBanks,
  CreateBank,
} = require("../controller/bankController");

router.post("/", CreateBank);
router.get("/", GetAllBanks);
router.get("/:id", GetBank);
// router.put("/:id", GetAll);
router.delete("/:id", DeleteBank);

module.exports = router;
