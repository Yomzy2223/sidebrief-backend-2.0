import express from "express";
import { userAuth, staffAuth } from "../../middleware/auth";
import validator from "../../middleware/validator";
import { validateServiceCategory } from "../../utils/validation";
const router = express.Router();

import {
  ServiceCategoryCreator,
  ServiceCategoriesFetcher,
  ServiceCategoryFetcher,
  ServiceCategoryModifier,
  ServiceCategoryRemover,
} from "./controller";

router.post(
  "/",
  staffAuth,
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

export default router;
