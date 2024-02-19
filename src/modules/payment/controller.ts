import { ConfirmPayload, OtpPayload, PaymentPayload } from "./entities";
import { Request, Response, NextFunction } from "express";
import {
  confirmPayment,
  makePayment,
  validateCharge,
  webhook,
  makePaymentWithPaystack,
} from "./service";

const MakePayment = async (req: Request, res: Response) => {
  try {
    const payload: PaymentPayload = req.body;

    const transactionPayload = {
      email: payload.email,
      currency: payload.currency,
      amount: payload.amount,
      card_number: payload.card_number,
      cvv: payload.card_number,
      card_pin: payload.card_pin,
      expiry_month: payload.expiry_month,
      expiry_year: payload.expiry_year,
      account_bank: payload.account_bank,
      type: payload.type,
      productId: payload.productId,
      serviceId: payload.serviceId,
    };

    const payment = await makePayment(transactionPayload);
    console.log("sdfs", payment);
  } catch (error) {}
};

const FlutterWebhook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = webhook(req);
    console.log("logging res", response);
  } catch (error) {
    next(error);
  }
};

const ConfirmPayment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //take the payload
    // send the id to the confirm payment service
    //return response to the client

    const confirmPayload: ConfirmPayload = req.body;

    const confirm = await confirmPayment(confirmPayload);

    return res.status(confirm.statusCode).json({ message: confirm.message });
  } catch (error) {
    next(error);
  }
};

const ValidateOtp = async (req: Request, res: Response) => {
  try {
    const payload: OtpPayload = req.body;

    const otpPayload = {
      flw_ref: payload.flw_ref,
      email: payload.email,
      otp: payload.otp,
      amount: payload.amount,
      currency: payload.currency,
    };

    const payment = await validateCharge(otpPayload);
    return res.status(payment.statusCode).json({ message: payment.message });
  } catch (error) {}
};

const MakePaymentWithPaystack = async (req: Request, res: Response) => {
  try {
    const payload: PaymentPayload = req.body;

    const transactionPayload = {
      email: payload.email,
      currency: payload.currency,
      amount: payload.amount,
      card_number: payload.card_number,
      cvv: payload.card_number,
      card_pin: payload.card_pin,
      expiry_month: payload.expiry_month,
      expiry_year: payload.expiry_year,
      account_bank: payload.account_bank,
      type: payload.type,
      productId: payload.productId,
      serviceId: payload.serviceId,
    };

    const payment = await makePaymentWithPaystack(transactionPayload);
    console.log("sdfs", payment);
  } catch (error) {}
};
export {
  MakePayment,
  FlutterWebhook,
  ConfirmPayment,
  ValidateOtp,
  MakePaymentWithPaystack,
};
