const express = require("express");
const {
  StaffLogin,
  StaffProfileFetcher,
  StaffRegisration,
} = require("./controller");
const router = express.Router();

router.post("/", StaffRegisration);
router.post("/login", StaffLogin);
router.get("/:id", StaffProfileFetcher);
// router.get("/", GetAllUsers);

module.exports = router;
