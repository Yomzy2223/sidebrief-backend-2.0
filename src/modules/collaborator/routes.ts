import express from "express";
import {
  CollaboratorLogin,
  CollectorProfileFetcher,
  CollaboratorRegisration,
  CollaboratorPasswordReset,
  CollaboratorPasswordResetLink,
  CollaboratorVerification,
  CollaboratorRemover,
  CollaboratorDocument,
  CollectorDocumentsFetcher,
  ControllerProfileModifier,
} from "./controller";
import validator from "../../middleware/validator";
import {
  validateCollaborator,
  validateUserCredentials,
  validateResetCredentials,
  validateDocument,
  validateEmail,
  validateUserUpdateCredentials,
} from "../../utils/validation";
const router = express.Router();

router.post("/", validator(validateCollaborator), CollaboratorRegisration);
router.post("/login", validator(validateUserCredentials), CollaboratorLogin);
router.get("/:id", CollectorProfileFetcher);
router.post("/verification/:token", CollaboratorVerification);
router.post(
  "/forgotpassword",
  validator(validateEmail),
  CollaboratorPasswordResetLink
);
router.post(
  "/passwordreset",
  validator(validateResetCredentials),
  CollaboratorPasswordReset
);
router.delete("/:id", CollaboratorRemover);
router.post(
  "/document/:collaboratorId",
  validator(validateDocument),
  CollaboratorDocument
);
router.get("/document/:collaboratorId", CollectorDocumentsFetcher);
router.put(
  "/:id",
  validator(validateUserUpdateCredentials),
  ControllerProfileModifier
);
export default router;
