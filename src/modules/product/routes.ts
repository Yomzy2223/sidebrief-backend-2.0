import express from "express";
import { userAuth, staffAuth } from "../../middleware/auth";
import validator from "../../middleware/validator";
import { validateCountry } from "../../utils/validation";
import {
  AddProductQA,
  CreateProduct,
  GetAllProductQA,
  GetAllProductsByUserId,
  GetAllServicesQA,
  ProductSubmission,
} from "./controller";
const router = express.Router();

router.post("/", CreateProduct);
router.get("/:userId", GetAllProductsByUserId);
router.post("/qa", AddProductQA);
router.get("/service/qa", GetAllServicesQA);
router.get("/qa", GetAllProductQA);
router.post("/submission", ProductSubmission);

export default router;
