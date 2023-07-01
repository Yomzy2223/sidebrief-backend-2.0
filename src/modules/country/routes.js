const express = require("express");
const { userAuth, staffAuth } = require("../../middleware/auth");
const validator = require("../../middleware/validator");
const { validateCountry } = require("../../utils/validation");
const router = express.Router();

const {
  CreateCountry,
  UpdateCountry,
  GetCountry,
  DeleteCountry,
  GetCountries,
} = require("./controller");

router.post("/", staffAuth, validator(validateCountry), CreateCountry);
router.get("/", GetCountries);
router.get("/:id", GetCountry);
router.put("/:id", staffAuth, validator(validateCountry), UpdateCountry);
router.delete("/:id", staffAuth, DeleteCountry);

module.exports = router;
