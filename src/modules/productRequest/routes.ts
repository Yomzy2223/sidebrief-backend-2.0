import express from "express";
import { userAuth } from "../../middleware/auth";
import validator from "../../middleware/validator";
import {
  initializeProductRequestCredentials,
  productQACredentials,
  productIdCredentials,
  submitProductRequestCredentials,
} from "../../utils/validation/productRequest";
import {
  AddProductRequestQA,
  AddProductId,
  CreateProductRequest,
  GetAllProductRequestQA,
  GetAllProductRequestsByUserId,
  GetAllRequestProdcutQA,
  GetAllRequestServiceQA,
  GetProductRequestById,
  ProductRequestSubmission,
  GetAllProductRequestQAByQuestion,
  GetAllProductRequestsByServiceId,
} from "./controller";
const router = express.Router();

router.post(
  "/",
  userAuth,
  validator(initializeProductRequestCredentials),
  CreateProductRequest
);
router.get("/user/:userId", userAuth, GetAllProductRequestsByUserId);
router.get("/:id", GetProductRequestById);
router.get("/service/:serviceId", GetAllProductRequestsByServiceId);

router.post(
  "/productId",
  validator(productIdCredentials),
  userAuth,
  AddProductId
);
router.post(
  "/form/:requestId",
  userAuth,
  // validator(producQACredentials),
  AddProductRequestQA
);
router.get("/service/form/:requestId", GetAllRequestServiceQA);
router.get("/product/form/:requestId", GetAllRequestProdcutQA);
router.get("/form/:requestId", GetAllProductRequestQA);
router.get("/formByQuestion", GetAllProductRequestQAByQuestion);
router.post("/submission/:requestId", userAuth, ProductRequestSubmission);

export default router;
