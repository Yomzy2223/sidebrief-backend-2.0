const express = require("express");
const {
  CollaboratorLogin,
  CollectorProfileFetcher,
  CollaboratorRegisration,
  CollaboratorPasswordReset,
  CollaboratorPasswordResetLink,
  CollaboratorVerification,
  CollaboratorRemover,
  CollaboratorDocument,
  CollectorDocumentsFetcher,
} = require("./controller");
const router = express.Router();

router.post("/", CollaboratorRegisration);
router.post("/login", CollaboratorLogin);
router.get("/:id", CollectorProfileFetcher);
router.post("/verification/:token", CollaboratorVerification);
router.post("/forgotpassword", CollaboratorPasswordResetLink);
router.post("/passwordreset", CollaboratorPasswordReset);
router.delete("/:id", CollaboratorRemover);
router.post("/document/:collaboratorId", CollaboratorDocument);
router.get("/document/:collaboratorId", CollectorDocumentsFetcher);

module.exports = router;
