import { PaymentPayload } from "./entities";
import { Request, Response, NextFunction } from "express";
import { makePayment } from "./service";

const MakePayment = async (req: Request, res: Response) => {
  try {
    const payload: PaymentPayload = req.body;

    const transactionPayload = {
      tx_ref: payload.tx_ref,
      email: payload.email,
      currency: payload.currency,
      amount: payload.amount,
      card_number: payload.card_number,
      cvv: payload.card_number,
      expiry_month: payload.expiry_month,
      expiry_year: payload.expiry_year,
      account_bank: payload.account_bank,
      type: payload.type,
    };

    const apyment = await makePayment(transactionPayload);
  } catch (error) {}
};
