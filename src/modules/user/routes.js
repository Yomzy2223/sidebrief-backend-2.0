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
  SuccessfulGmail,
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
// OAuth routes
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // Redirect or perform any additional logic after successful authentication
    console.log("cccchhecdcc");
    res.redirect("/success");
  }
);

router.get("/success", SuccessfulGmail);

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
