import express from "express";
import { userAuth, staffAuth } from "../../middleware/auth";
const router = express.Router();

import {
  DeleteDocument,
  UpdateDocument,
  GetAllDocumentsByUserId,
  GetDocument,
  CreateUserDocument,
} from "./controller";

router.post("/:userId", CreateUserDocument);
router.get("/user/:userId", GetAllDocumentsByUserId);
router.get("/:id", GetDocument);
router.put("/:id", UpdateDocument);
router.delete("/:id", DeleteDocument);

export default router;
