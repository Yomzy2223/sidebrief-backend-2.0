const express = require("express");
const { userAuth, staffAuth } = require("../../middleware/auth");
const validator = require("../../middleware/validator");
const { validateServiceCategory } = require("../../utils/validation");
const router = express.Router();

const {
  ServiceCategoryCreator,
  ServiceCategoriesFetcher,
  ServiceCategoryFetcher,
  ServiceCategoryModifier,
  ServiceCategoryRemover,
} = require("./controller");

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

module.exports = router;
