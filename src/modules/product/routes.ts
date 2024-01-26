import express from "express";
import { userAuth } from "../../middleware/auth";
import validator from "../../middleware/validator";
import {
  initializeProductCredentials,
  producQACredentials,
  submitProductCredentials,
} from "../../utils/validation/product";
import {
  AddProductQA,
  CreateProduct,
  GetAllProductQA,
  GetAllProductsByUserId,
  GetAllServicesQA,
  ProductSubmission,
} from "./controller";
const router = express.Router();

router.post(
  "/",
  validator(initializeProductCredentials),

  CreateProduct
);
router.get("/:userId", GetAllProductsByUserId);
router.post("/qa", validator(producQACredentials), AddProductQA);
router.get("/service/qa", GetAllServicesQA);
router.get("/qa", GetAllProductQA);
router.post(
  "/submission",
  validator(submitProductCredentials),

  ProductSubmission
);

export default router;
