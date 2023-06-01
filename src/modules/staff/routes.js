const express = require("express");
const {
  StaffLogin,
  StaffProfileFetcher,
  StaffRegisration,
  StaffPasswordReset,
  StaffPasswordResetLink,
  StaffVerification,
  StaffRemover,
} = require("./controller");
const router = express.Router();

router.post("/", StaffRegisration);
router.post("/login", StaffLogin);
router.get("/:id", StaffProfileFetcher);
router.post("/verification/:token", StaffVerification);
router.post("/forgotpassword", StaffPasswordResetLink);
router.post("/passwordreset", StaffPasswordReset);
router.delete("/:id", StaffRemover);

module.exports = router;
