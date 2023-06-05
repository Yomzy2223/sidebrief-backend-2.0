const express = require("express");
const { userAuth, staffAuth } = require("../../middleware/auth");
const router = express.Router();

const {
  ServiceCategoryCreator,
  ServiceCategoriesFetcher,
  ServiceCategoryFetcher,
  ServiceCategoryModifier,
  ServiceCategoryRemover,
} = require("./controller");

router.post("/", staffAuth, ServiceCategoryCreator);
router.get("/", ServiceCategoriesFetcher);
router.get("/:id", userAuth, ServiceCategoryFetcher);
router.put("/:id", staffAuth, ServiceCategoryModifier);
router.delete("/:id", staffAuth, ServiceCategoryRemover);

module.exports = router;
