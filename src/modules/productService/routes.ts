import express from "express";
import { staffAuth, userAuth } from "../../middleware/auth";
import validator from "../../middleware/validator";
import {
  validateProductService,
  validateServiceForm,
} from "../../utils/validation/productService";
const router = express.Router();

import {
  ProductServiceByCategoryFetcher,
  ProductServiceCreator,
  ProductServiceModifier,
  ProductServiceRemover,
  ProductServiceFetcher,
  ProductServicesFetcher,
  ServiceFormByServiceFetcher,
  ServiceFormCreator,
  ServiceFormFetcher,
  ServiceFormModifier,
  ServiceFormRemover,
  ServiceFormsFetcher,
} from "./controller";

// Product service route
router.post(
  "/:serviceCategoryId",

  validator(validateProductService),
  ProductServiceCreator
);
router.get("/", ProductServicesFetcher);
router.get("/:id", ProductServiceFetcher);
router.get(
  "/category/:serviceCategoryId",

  ProductServiceByCategoryFetcher
);
router.put(
  "/:id",

  validator(validateProductService),
  ProductServiceModifier
);
router.delete("/:id", ProductServiceRemover);

// service form route
router.post(
  "/forms/:serviceId",
  //
  validator(validateServiceForm),
  ServiceFormCreator
);
router.put(
  "/forms/:id",
  //
  validator(validateServiceForm),
  ServiceFormModifier
);
router.get("/forms/all", ServiceFormsFetcher);
router.get("/forms/:id", ServiceFormFetcher);
router.get("/forms/service/:serviceId", ServiceFormByServiceFetcher);
router.delete("/forms/:id", ServiceFormRemover);
export default router;
