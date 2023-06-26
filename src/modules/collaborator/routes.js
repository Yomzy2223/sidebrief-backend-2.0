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
const validator = require("../../middleware/validator");
const {
  validateCollaborator,
  validateUserCredentials,
  validateResetCredentials,
} = require("../../utils/validation");
const router = express.Router();

router.post("/", validator(validateCollaborator), CollaboratorRegisration);
router.post("/login", validator(validateUserCredentials), CollaboratorLogin);
router.get("/:id", CollectorProfileFetcher);
router.post("/verification/:token", CollaboratorVerification);
router.post("/forgotpassword", CollaboratorPasswordResetLink);
router.post(
  "/passwordreset",
  validator(validateResetCredentials),
  CollaboratorPasswordReset
);
router.delete("/:id", CollaboratorRemover);
router.post("/document/:collaboratorId", CollaboratorDocument);
router.get("/document/:collaboratorId", CollectorDocumentsFetcher);

module.exports = router;
