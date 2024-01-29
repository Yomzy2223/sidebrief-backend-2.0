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
  staffAuth,
  validator(validateProductService),
  ProductServiceCreator
);
router.get("/", ProductServicesFetcher);
router.get("/:id", ProductServiceFetcher);
router.get(
  "/:serviceCategoryId",

  ProductServiceByCategoryFetcher
);
router.put(
  "/:id",
  staffAuth,
  validator(validateProductService),
  ProductServiceModifier
);
router.delete("/:id", staffAuth, ProductServiceRemover);

// service form route
router.post(
  "/form/:serviceId",
  staffAuth,
  // validator(validateServiceForm),
  ServiceFormCreator
);
router.put(
  "/form/:id",
  staffAuth,
  // validator(validateServiceForm),
  ServiceFormModifier
);
router.get("/form/all", ServiceFormsFetcher);
router.get("/form/:id", ServiceFormFetcher);
router.get("/form/:serviceId", ServiceFormByServiceFetcher);
router.delete("/form/:id", staffAuth, ServiceFormRemover);
export default router;
