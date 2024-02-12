import express from "express";
import { userAuth } from "../../middleware/auth";
import validator from "../../middleware/validator";
import {
  initializeProductCredentials,
  producQACredentials,
  producServiceIdCredentials,
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
  GetAllProductQAByQuestion,
} from "./controller";
const router = express.Router();

router.post(
  "/",
  userAuth,
  validator(initializeProductCredentials),
  CreateProduct
);
router.get("user/:userId", userAuth, GetAllProductsByUserId);
router.get("/:id", GetProductById);

router.post(
  "/serviceId",
  validator(producServiceIdCredentials),
  userAuth,
  AddServiceId
);
router.post(
  "/form/:productId",
  userAuth,
  // validator(producQACredentials),
  AddProductQA
);
// router.get("/form/:productId", GetAllServicesQA);
router.get("/form/:productId", GetAllProductQA);
router.get("/formByQuestion", GetAllProductQAByQuestion);
router.post("/submission/:productId", userAuth, ProductSubmission);

export default router;
