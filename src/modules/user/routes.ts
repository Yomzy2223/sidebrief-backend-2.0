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
  UserRegisrationWithGoogle,
  UserGrantorWithGoogle,
} from "./controller";
import validator from "../../middleware/validator";
import {
  validateUserCredentials,
  validateUser,
  validateResetCredentials,
  validateUserUpdateCredentials,
  validateEmail,
  validateUserWithGoogleCredentials,
  validateUserWithGoogle,
} from "../../utils/validation";
const router = express.Router();
import { staffAuth, userAuth } from "../../middleware/auth";
// OAuth routes

router.post("/", validator(validateUser), UserRegisration);
router.post("/login", validator(validateUserCredentials), UserGrantor);

router.post(
  "/google",
  validator(validateUserWithGoogle),
  UserRegisrationWithGoogle
);
router.post(
  "/google/login",
  validator(validateUserWithGoogleCredentials),
  UserGrantorWithGoogle
);

router.get("/:id", userAuth, UserFetcher);
router.get("/", staffAuth, UsersFetcher);
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
