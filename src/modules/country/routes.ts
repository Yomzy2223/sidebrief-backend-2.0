import express from "express";
import { userAuth, staffAuth } from "../../middleware/auth";
import validator from "../../middleware/validator";
import { validateCountry } from "../../utils/validation";
const router = express.Router();

import {
  CreateCountry,
  UpdateCountry,
  GetCountry,
  DeleteCountry,
  GetCountries,
} from "./controller";

router.post("/", validator(validateCountry), CreateCountry);
router.get("/", GetCountries);
router.get("/:id", GetCountry);
router.put("/:id", validator(validateCountry), UpdateCountry);
router.delete("/:id", DeleteCountry);

export default router;
