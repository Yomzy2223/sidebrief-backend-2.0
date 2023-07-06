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
const passport = require("passport");
const { staffAuth, userAuth } = require("../../middleware/auth");
// OAuth routes
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth" }),
  (req, res) => {
    // Redirect or perform any additional logic after successful authentication
    res.status(200).json({ data: req.user });
  }
);

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
  userAuth,
  validator(validateUserUpdateCredentials),
  UserProfileModifier
);
router.delete("/:id", staffAuth, UserRemover);

module.exports = router;
