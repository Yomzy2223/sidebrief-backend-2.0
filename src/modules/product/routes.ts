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
  AddServiceId,
  CreateProduct,
  GetAllProductQA,
  GetAllProductsByUserId,
  GetAllServicesQA,
  GetProductById,
  ProductSubmission,
} from "./controller";
const router = express.Router();

router.post(
  "/",
  validator(initializeProductCredentials),

  CreateProduct
);
router.get("/:userId", GetAllProductsByUserId);
router.get("/:id", GetProductById);

router.post("/serviceId", AddServiceId);
router.post("/form/:productId", validator(producQACredentials), AddProductQA);
// router.get("/form/:productId", GetAllServicesQA);
router.get("/form/:productId", GetAllProductQA);
router.post(
  "/submission/:productId",
  validator(submitProductCredentials),

  ProductSubmission
);

export default router;
