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
} = require("./controller");
const router = express.Router();

router.post("/", UserRegisration);
router.post("/login", UserGrantor);
router.get("/:id", UserFetcher);
router.get("/", UsersFetcher);
router.post("/verification/:token", UserVerification);
router.post("/forgotpassword", UserPasswordResetLink);
router.post("/passwordreset", UserPasswordReset);
router.put("/update", UserProfileModifier);

module.exports = router;