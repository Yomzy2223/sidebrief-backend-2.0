const express = require("express");
const {
  UserRegisration,
  UserFetcher,
  UserGrantor,
  UsersFetcher,
  UserVerification,
  UserPasswordResetLink,
  UserPasswordReset,
  UserProfileModifier,
  UserRemover,
} = require("./controller");
const validator = require("../../middleware/validator");
const {
  validateUserCredentials,
  validateUser,
  validateResetCredentials,
  validateUserUpdateCredentials,
} = require("../../utils/validation");
const router = express.Router();

router.post("/", validator(validateUser), UserRegisration);
router.post("/login", validator(validateUserCredentials), UserGrantor);
router.get("/:id", UserFetcher);
router.get("/", UsersFetcher);
router.post("/verification/:token", UserVerification);
router.post("/forgotpassword", UserPasswordResetLink);
router.post(
  "/passwordreset",
  validator(validateResetCredentials),
  UserPasswordReset
);
router.put(
  "/:id",
  validator(validateUserUpdateCredentials),
  UserProfileModifier
);
router.delete("/:id", UserRemover);

module.exports = router;
