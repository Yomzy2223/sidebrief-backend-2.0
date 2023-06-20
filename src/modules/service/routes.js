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

router.post("/", ServiceCategoryCreator);
router.get("/", ServiceCategoriesFetcher);
router.get("/:id", ServiceCategoryFetcher);
router.put("/:id", ServiceCategoryModifier);
router.delete("/:id", ServiceCategoryRemover);

module.exports = router;
