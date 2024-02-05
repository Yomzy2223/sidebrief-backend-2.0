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
  ServiceSubFormCreator,
  ServiceSubFormFetcher,
  ServiceASubFormFetcher,
  ServiceSubFormModifier,
  ServiceSubFormRemover,
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
  "/allByServiceCategory/:serviceCategoryId",

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
router.get("/formByService/:serviceId", ServiceFormByServiceFetcher);
router.delete("/form/:id", staffAuth, ServiceFormRemover);

router.post(
  "/subform/:serviceFormId",
  staffAuth,

  ServiceSubFormCreator
);
router.get("/subforms/:serviceFormId", ServiceSubFormFetcher);
router.get("/subform/:id", ServiceASubFormFetcher);

router.put(
  "/subform/:id",
  staffAuth,

  ServiceSubFormModifier
);
router.delete("/:id", staffAuth, ServiceSubFormRemover);
export default router;
