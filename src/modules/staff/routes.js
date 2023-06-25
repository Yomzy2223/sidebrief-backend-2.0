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
} = require("../../utils/validation");
const router = express.Router();

router.post("/", validator(validateStaff), StaffRegisration);
router.post("/login", validator(validateUserCredentials), StaffLogin);
router.get("/:id", StaffProfileFetcher);
router.post("/verification/:token", StaffVerification);
router.post("/forgotpassword", StaffPasswordResetLink);
router.post(
  "/passwordreset",
  validator(validateResetCredentials),
  StaffPasswordReset
);
router.delete("/:id", StaffRemover);

module.exports = router;
