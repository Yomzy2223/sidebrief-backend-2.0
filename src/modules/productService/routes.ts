import express from "express";
const router = express.Router();

import {
  ProductServiceByCategoryFetcher,
  ProductServiceCreator,
  // ProductServiceModifier,
  ProductServiceRemover,
  ProductServiceFetcher,
  ProductServicesFetcher,
} from "./controller";

router.post("/", ProductServiceCreator);
router.get("/", ProductServicesFetcher);
router.get("/:id", ProductServiceFetcher);
router.get("/:serviceCategoryId", ProductServiceByCategoryFetcher);
//router.put("/:id", ProductServiceModifier);
router.delete("/:id", ProductServiceRemover);

export default router;
