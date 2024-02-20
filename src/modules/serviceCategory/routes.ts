import express from "express";
import { userAuth, staffAuth } from "../../middleware/auth";
import validator from "../../middleware/validator";
import {
  validateService,
  validateServiceForm,
  validateServiceSubForm,
} from "../../utils/validation";
const router = express.Router();

import {
  ServiceCreator,
  ServicesFetcher,
  ServiceFetcher,
  ServiceModifier,
  ServiceRemover,
  ServiceFormCreator,
  ServiceFormFetcher,
  ServiceFormModifier,
  ServiceFormsFetcher,
  ServiceFormRemover,
  ServiceSubFormCreator,
  ServiceSubFormFetcher,
  ServiceSubFormModifier,
  ServiceACategorySubFormFetcher,
  ServiceSubFormRemover,
} from "./controller";

router.post("/", staffAuth, validator(validateService), ServiceCreator);
router.get("/", ServicesFetcher);
router.get("/:id", ServiceFetcher);
router.put(
  "/:id",

  validator(validateService),
  ServiceModifier
);
router.delete("/:id", staffAuth, ServiceRemover);

router.post(
  "/form/:serviceId",
  staffAuth,
  validator(validateServiceForm),
  ServiceFormCreator
);
router.get("/forms/:serviceId", ServiceFormsFetcher);
router.get("/form/:id", ServiceFormFetcher);

router.put(
  "/form/:id",
  staffAuth,
  validator(validateServiceForm),
  ServiceFormModifier
);
router.delete("/:id", staffAuth, ServiceFormRemover);

router.post(
  "/subform/:formId",
  staffAuth,
  validator(validateServiceSubForm),
  ServiceSubFormCreator
);
router.get("/subforms/:formId", ServiceSubFormFetcher);
router.get("/subform/:id", ServiceACategorySubFormFetcher);

router.put(
  "/subform/:id",
  staffAuth,
  validator(validateServiceSubForm),
  ServiceSubFormModifier
);
router.delete("/:id", staffAuth, ServiceSubFormRemover);
export default router;
