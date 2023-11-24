import express from "express";
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
router.post("/:serviceCategoryId", ProductServiceCreator);
router.get("/", ProductServicesFetcher);
router.get("/:id", ProductServiceFetcher);
router.get("/category/:serviceCategoryId", ProductServiceByCategoryFetcher);
router.put("/:id", ProductServiceModifier);
router.delete("/:id", ProductServiceRemover);

// service form route
router.post("/forms/:serviceId", ServiceFormCreator);
router.put("/forms/:id", ServiceFormModifier);
router.get("/forms/all", ServiceFormsFetcher);
router.get("/forms/:id", ServiceFormFetcher);
router.get("/forms/service/:serviceId", ServiceFormByServiceFetcher);
router.delete("/forms/:id", ServiceFormRemover);
export default router;
