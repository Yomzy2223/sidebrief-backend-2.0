import express from "express";
import { userAuth } from "../../middleware/auth";
const router = express.Router();

import {
  DeleteDocument,
  UpdateDocument,
  GetAllDocumentsByUserId,
  GetDocument,
  CreateUserDocument,
} from "./controller";

router.post("/:userId", userAuth, CreateUserDocument);
router.get("/user/:userId", userAuth, GetAllDocumentsByUserId);
router.get("/:id", userAuth, GetDocument);
router.put("/:id", userAuth, UpdateDocument);
router.delete("/:id", userAuth, DeleteDocument);

export default router;
