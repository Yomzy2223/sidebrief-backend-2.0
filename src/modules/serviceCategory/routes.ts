import express from "express";
import { userAuth, staffAuth } from "../../middleware/auth";
import validator from "../../middleware/validator";
import {
  validateServiceCategory,
  validateServiceCategoryForm,
} from "../../utils/validation";
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
  ServiceACategoryFormFetcher,
} from "./controller";

router.post(
  "/",
  staffAuth,
  validator(validateServiceCategory),
  ServiceCategoryCreator
);
router.get("/", ServiceCategoriesFetcher);
router.get("/:id", ServiceCategoryFetcher);
router.put(
  "/:id",

  validator(validateServiceCategory),
  ServiceCategoryModifier
);
router.delete("/:id", staffAuth, ServiceCategoryRemover);

router.post(
  "/form/:serviceCategoryId",
  staffAuth,
  validator(validateServiceCategoryForm),
  ServiceCategoryFormCreator
);
router.get("/form/:serviceCategoryId", ServiceCategoryFormFetcher);
router.get("/form/:id", ServiceACategoryFormFetcher);

router.put(
  "/form/:id",
  staffAuth,
  validator(validateServiceCategoryForm),
  ServiceCategoryFormFetcher
);
export default router;
