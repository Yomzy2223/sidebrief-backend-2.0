import express from "express";
import { userAuth, staffAuth } from "../../middleware/auth";
import validator from "../../middleware/validator";
import { validateCountry } from "../../utils/validation";
import {
  ConfirmPayment,
  FlutterWebhook,
  MakePayment,
  ValidateOtp,
} from "./controller";
const router = express.Router();

router.post("/initialization", MakePayment);
router.post("/webhook", FlutterWebhook);
router.post("/otp-validation", ValidateOtp);
router.post("/confirmation", ConfirmPayment);

export default router;
