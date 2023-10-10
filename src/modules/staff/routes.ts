import express from "express";
import {
  StaffLogin,
  StaffProfileFetcher,
  StaffRegisration,
  StaffPasswordReset,
  StaffPasswordResetLink,
  StaffVerification,
  StaffRemover,
} from "./controller";
import validator from "../../middleware/validator";
import {
  validateStaff,
  validateUserCredentials,
  validateResetCredentials,
  validateEmail,
} from "../../utils/validation";
const router = express.Router();

router.post("/", validator(validateStaff), StaffRegisration);
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

export default router;
