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
  userAuth,
  CreateProduct
);
router.get("/:userId", userAuth, GetAllProductsByUserId);
router.post("/qa", validator(producQACredentials), userAuth, AddProductQA);
router.get("/service/qa", userAuth, GetAllServicesQA);
router.get("/qa", userAuth, GetAllProductQA);
router.post(
  "/submission",
  validator(submitProductCredentials),
  userAuth,
  ProductSubmission
);

export default router;
