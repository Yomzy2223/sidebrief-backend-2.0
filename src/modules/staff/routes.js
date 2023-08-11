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
const validator = require("../../middleware/validator");
const {
  validateStaff,
  validateUserCredentials,
  validateResetCredentials,
  validateEmail,
} = require("../../utils/validation");
const router = express.Router();

router.post("/", StaffRegisration);
router.post("/login", validator(validateUserCredentials), StaffLogin);
router.get("/:id", StaffProfileFetcher);
router.post("/verification/:token", StaffVerification);
router.post(
  "/forgotpassword",
  validator(validateEmail),
  StaffPasswordResetLink
);
router.post(
  "/passwordreset",
  validator(validateResetCredentials),
  StaffPasswordReset
);
router.delete("/:id", StaffRemover);

module.exports = router;
