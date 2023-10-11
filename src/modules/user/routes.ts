import express from "express";
import {
  UserRegisration,
  UserFetcher,
  UserGrantor,
  UsersFetcher,
  UserVerification,
  UserPasswordResetLink,
  UserPasswordReset,
  UserProfileModifier,
  UserRemover,
} from "./controller";
import validator from "../../middleware/validator";
import {
  validateUserCredentials,
  validateUser,
  validateResetCredentials,
  validateUserUpdateCredentials,
  validateEmail,
} from "../../utils/validation";
const router = express.Router();
import passport from "passport";
import { staffAuth, userAuth } from "../../middleware/auth";
// OAuth routes
// router.get(
//   "/auth/google",
//   passport.authenticate("google-signup", { scope: ["profile", "email"] })
// );

// router.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/auth" }),
//   (req, res) => {
//     // Redirect or perform any additional logic after successful authentication
//     res.status(200).json({ data: req.user });
//   }
// );

// router.get(
//   "/auth/google/signin",
//   passport.authenticate("google-signin", { scope: ["profile", "email"] })
// );

// router.get(
//   "/auth/login/google/callback",
//   passport.authenticate("google", { failureRedirect: "/auth" }),
//   (req, res) => {
//     // Redirect or perform any additional logic after successful authentication
//     res.status(200).json({ data: req.user });
//   }
// );

router.post("/", validator(validateUser), UserRegisration);
router.post("/login", validator(validateUserCredentials), UserGrantor);
router.get("/:id", userAuth, UserFetcher);
router.get("/", UsersFetcher);
router.post("/verification/:token", UserVerification);
router.post("/forgotpassword", validator(validateEmail), UserPasswordResetLink);
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

export default router;
