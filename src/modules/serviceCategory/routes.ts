import express from "express";
import { userAuth, staffAuth } from "../../middleware/auth";
import validator from "../../middleware/validator";
import {
  validateServiceCategory,
  validateServiceCategoryForm,
  validateServiceCategorySubForm,
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
  ServiceCategoryFormRemover,
  ServiceCategorySubFormCreator,
  ServiceCategorySubFormFetcher,
  ServiceCategorySubFormModifier,
  ServiceACategorySubFormFetcher,
  ServiceCategorySubFormRemover,
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
router.get("/forms/:serviceCategoryId", ServiceCategoryFormFetcher);
router.get("/form/:id", ServiceACategoryFormFetcher);

router.put(
  "/form/:id",
  staffAuth,
  validator(validateServiceCategoryForm),
  ServiceCategoryFormModifier
);
router.delete("/:id", staffAuth, ServiceCategoryFormRemover);

router.post(
  "/subform/:formId",
  staffAuth,
  validator(validateServiceCategorySubForm),
  ServiceCategorySubFormCreator
);
router.get("/subforms/:formId", ServiceCategorySubFormFetcher);
router.get("/subform/:id", ServiceACategorySubFormFetcher);

router.put(
  "/subform/:id",
  staffAuth,
  validator(validateServiceCategorySubForm),
  ServiceCategorySubFormModifier
);
router.delete("/:id", staffAuth, ServiceCategorySubFormRemover);
export default router;
