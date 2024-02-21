import express from "express";
import { staffAuth, userAuth } from "../../middleware/auth";
import validator from "../../middleware/validator";
import {
  validateProductService,
  validateProductForm,
} from "../../utils/validation/product";
const router = express.Router();

import {
  ProductCreator,
  ProductByServiceFetcher,
  ProductFetcher,
  ProductModifier,
  ProductRemover,
  ProductsFetcher,
  ProductFormCreator,
  ProductFormByProductFetcher,
  ProductFormFetcher,
  ProductFormModifier,
  ProductFormRemover,
  ProductFormsFetcher,
  ProductSubFormCreator,
  ProductSubFormsFetcher,
  ProductSubFormFetcher,
  ProductSubFormModifier,
  ProductSubFormRemover,
} from "./controller";

// Product  route
router.post(
  "/:serviceId",
  staffAuth,
  validator(validateProductService),
  ProductCreator
);
router.get("/", ProductsFetcher);
router.get("/:id", ProductFetcher);
router.get(
  "/Service/:serviceId",

  ProductByServiceFetcher
);
router.put(
  "/:id",
  staffAuth,
  validator(validateProductService),
  ProductModifier
);
router.delete("/:id", staffAuth, ProductRemover);

// product form route
router.post(
  "/form/:productId",
  staffAuth,
  // validator(validateProductForm),
  ProductFormCreator
);
router.put(
  "/form/:id",
  staffAuth,
  // validator(validateProductForm),
  ProductFormModifier
);
router.get("/form/all", ProductFormsFetcher);
router.get("/form/:id", ProductFormFetcher);
router.get("/formByProduct/:productId", ProductFormByProductFetcher);
router.delete("/form/:id", staffAuth, ProductFormRemover);

router.post(
  "/subform/:formId",
  staffAuth,

  ProductSubFormCreator
);
router.get("/subforms/:formId", ProductSubFormsFetcher);
router.get("/subform/:id", ProductSubFormFetcher);

router.put(
  "/subform/:id",
  staffAuth,

  ProductSubFormModifier
);
router.delete("/:id", staffAuth, ProductSubFormRemover);
export default router;
