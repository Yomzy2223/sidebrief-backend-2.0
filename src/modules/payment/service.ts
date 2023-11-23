import { PrismaClient, Prisma } from "@prisma/client";
import logger from "../../config/logger";
import Flutterwave from "flutterwave-node";
import { BadRequest, NotFound, Unauthorized } from "../../utils/requestErrors";
const prisma = new PrismaClient();
import { PaymentPayload } from "./entities";

// PRODUCT SERVICES

//make payment
const makePayment = async (transactionPayload: PaymentPayload) => {
  try {
    //payment with transfer
    const flw = new Flutterwave(
      process.env.FLW_PUBLIC_KEY as string,
      process.env.FLW_SECRET_KEY as string,
      true
    );

    const details = {
      tx_ref: transactionPayload.tx_ref,
      amount: transactionPayload.amount,
      email: transactionPayload.email,
      currency: transactionPayload.currency,
    };

    // const response = await flw.Charge.bank_transfer(details)

    // logger.info({
    //   message: `${checkProduct?.userId} created a payment successfully`,
    // });
    // return {
    //   message: "Payment created successfully",
    //   statusCode: 200,
    //   data: checkProduct,
    // };
  } catch (error) {
    throw error;
  }
};

export { makePayment };
