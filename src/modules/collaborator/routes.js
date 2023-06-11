const express = require("express");
const {
  CollaboratorLogin,
  CollectorProfileFetcher,
  CollaboratorRegisration,
  CollaboratorPasswordReset,
  CollaboratorPasswordResetLink,
  CollaboratorVerification,
  CollaboratorRemover,
} = require("./controller");
const router = express.Router();

router.post("/", CollaboratorRegisration);
router.post("/login", CollaboratorLogin);
router.get("/:id", CollectorProfileFetcher);
router.post("/verification/:token", CollaboratorVerification);
router.post("/forgotpassword", CollaboratorPasswordResetLink);
router.post("/passwordreset", CollaboratorPasswordReset);
router.delete("/:id", CollaboratorRemover);

module.exports = router;
