import express from "express";
import { userAuth, staffAuth } from "../../middleware/auth";
import validator from "../../middleware/validator";
import { validateBank } from "../../utils/validation";
const router = express.Router();

import {
  DeleteBank,
  UpdateBank,
  GetAllBanks,
  GetBank,
  CreateBank,
} from "./controller";

router.post("/", staffAuth, validator(validateBank), CreateBank);
router.get("/", GetAllBanks);
router.get("/:id", userAuth, GetBank);
router.put("/:id", staffAuth, validator(validateBank), UpdateBank);
router.delete("/:id", staffAuth, DeleteBank);

export default router;
