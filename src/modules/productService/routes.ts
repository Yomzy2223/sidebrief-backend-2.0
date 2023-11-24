import express from "express";
import { staffAuth, userAuth } from "../../middleware/auth";
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
router.post("/:serviceCategoryId", staffAuth, ProductServiceCreator);
router.get("/", ProductServicesFetcher);
router.get("/:id", userAuth, ProductServiceFetcher);
router.get(
  "/category/:serviceCategoryId",
  userAuth,
  ProductServiceByCategoryFetcher
);
router.put("/:id", staffAuth, ProductServiceModifier);
router.delete("/:id", staffAuth, ProductServiceRemover);

// service form route
router.post("/forms/:serviceId", staffAuth, ServiceFormCreator);
router.put("/forms/:id", staffAuth, ServiceFormModifier);
router.get("/forms/all", ServiceFormsFetcher);
router.get("/forms/:id", userAuth, ServiceFormFetcher);
router.get("/forms/service/:serviceId", userAuth, ServiceFormByServiceFetcher);
router.delete("/forms/:id", staffAuth, ServiceFormRemover);
export default router;
