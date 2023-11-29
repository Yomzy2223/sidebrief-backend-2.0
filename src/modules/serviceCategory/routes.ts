import express from "express";
import { userAuth, staffAuth } from "../../middleware/auth";
import validator from "../../middleware/validator";
import {
  validateServiceCategory,
  serviceFormCredentials,
} from "../../utils/validation/serviceCategory";
const router = express.Router();

import {
  ServiceCategoryCreator,
  ServiceCategoriesFetcher,
  ServiceCategoryFetcher,
  ServiceCategoryModifier,
  ServiceCategoryRemover,
  ServiceCategoryFormCreator,
  ServiceCategoryFormFetcher,
  ServiceCategoryFormModifier,
} from "./controller";

router.post(
  "/",
  // staffAuth,
  validator(validateServiceCategory),
  ServiceCategoryCreator
);
router.get("/", ServiceCategoriesFetcher);
router.get("/:id", userAuth, ServiceCategoryFetcher);
router.put(
  "/:id",
  staffAuth,
  validator(validateServiceCategory),
  ServiceCategoryModifier
);
router.delete("/:id", staffAuth, ServiceCategoryRemover);

router.post(
  "/form",
  staffAuth,
  validator(serviceFormCredentials),
  ServiceCategoryFormCreator
);
router.get("/forms/:id", ServiceCategoryFormFetcher);
router.put(
  "/form/:id",
  staffAuth,
  validator(serviceFormCredentials),
  ServiceCategoryFormModifier
);
export default router;
