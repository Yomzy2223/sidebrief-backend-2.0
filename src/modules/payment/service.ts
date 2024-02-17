import { PrismaClient } from "../../../prisma/generated/client2";
import logger from "../../config/logger";
import { Request } from "express";
import { BadRequest, NotFound, Unauthorized } from "../../utils/requestErrors";
const prisma = new PrismaClient();
import {
  ConfirmPayload,
  PaymentPayload,
  PaymentVerificationPayload,
} from "./entities";
import axios from "axios";

// PAYMENT SERVICES

//make payment
const makePayment = async (transactionPayload: PaymentPayload) => {
  try {
    //
    const updateProduct = await prisma.product.update({
      where: { id: transactionPayload.productId },
      data: {
        serviceId: transactionPayload.serviceId,
        currentState: "PAYMENT",
      },
    });

    // //payment with transfer
    if (transactionPayload.type === "Transafer") {
      const testPayload = {
        tx_ref: "transactionPayload.productId",
        amount: 15000,
        email: "akinyemibamidel2@gmail.com",
        currency: "NGN",
      };
      const payload = {
        tx_ref: transactionPayload.productId,
        amount: transactionPayload.amount,
        email: transactionPayload.email,
        currency: transactionPayload.currency,
      };

      const token = process.env.FLW_SECRET_KEY as string;

      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const url = process.env.BANK_TRANSFER as string;

      const res: any = await axios
        .post(url, testPayload, options)
        .then((response) => console.log(response?.data))
        .catch((err) => console.log(err));

      console.log("testing", res);

      logger.info({
        message: `User with ${transactionPayload?.email} initiated a transfer payment successfully`,
      });
      return {
        message: res?.message,
        data: res.meta.authorization,
        statusCode: 200,
      };
    }
    // card payment
    if (transactionPayload.type === "Card") {
      const payload = {
        tx_ref: transactionPayload.productId,
        amount: transactionPayload.amount,
        card_number: transactionPayload.card_number,
        cvv: transactionPayload.cvv,
        expiry_month: transactionPayload.expiry_month,
        expiry_year: transactionPayload.expiry_year,
        email: transactionPayload.email,
        currency: transactionPayload.currency,
        authorization: {
          pin: transactionPayload.card_pin,
          mode: "pin",
        },
      };

      const token = process.env.FLW_SECRET_KEY as string;

      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const url = process.env.CARD as string;

      const res: any = await axios
        .post(url, payload, options)
        .then((response) => console.log(response?.data))
        .catch((err) => console.log(err));

      console.log("testing", res);

      logger.info({
        message: `User with ${transactionPayload?.email} initiated a card payment successfully`,
      });
      return {
        message: res?.message,
        data: res.meta.data,
        statusCode: 200,
      };
    }

    // ussd payment
    if (transactionPayload.type === "USSD") {
      const test = {
        tx_ref: "MC-15852309v5050e8y",
        account_bank: "057",
        amount: "10",
        currency: "NGN",
        email: "user@example.com",
      };

      const payload = {
        tx_ref: transactionPayload.productId,
        amount: transactionPayload.amount,
        email: transactionPayload.email,
        currency: transactionPayload.currency,
        account_bank: transactionPayload.account_bank,
      };

      const token = process.env.FLW_SECRET_KEY as string;

      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const url = process.env.USSD as string;

      const res: any = await axios
        .post(url, payload, options)
        .then((response) => console.log(response?.data))
        .catch((err) => console.log(err));

      console.log("testing", res);

      logger.info({
        message: `User with ${transactionPayload?.email} initiated a ussd payment successfully`,
      });
      return {
        message: res?.message,
        data: res.meta.data,
        statusCode: 200,
      };
    }
  } catch (error) {
    throw error;
  }
};

//verify payment
const verifyPayment = async (payload: PaymentVerificationPayload) => {
  try {
    const token = process.env.FLW_SECRET_KEY as string;

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const url = `https://api.flutterwave.com/v3/transactions/:${payload.id}/verify`;

    const res: any = await axios
      .get(url, options)
      .then((response) => console.log(response?.data))
      .catch((err) => console.log(err));

    if (
      res.status === "successful" &&
      res.data.amount === payload.amount &&
      res.data.currency === payload.currency
    ) {
      console.log("Successful payment");
      const checkPayment = await prisma.payment.findFirst({
        where: {
          transactionId: res.data.id,
        },
      });

      if (checkPayment) {
        throw new BadRequest("Duplicate payment");
      }

      const transPayload = {
        provider: "Flutterwave",
        email: res.data.customer.email,
        transactionId: res.data.id,
        productId: res.data.tx_ref,
        status: res.status,
      };
      const savePayment = prisma.payment.create({
        data: transPayload,
      });

      logger.info({
        message: `User with ${res?.data?.customer?.email} made a ${res?.data?.payment_type} payment successfully`,
      });
    } else {
      console.log("the payment was unsuccessful ");
    }
  } catch (error) {
    throw error;
  }
};

//flutter webhook
const webhook = async (req: Request) => {
  try {
    const secretHash = process.env.FLUTTER_SECRET_HASH;

    const signature = req.headers["verify-hash"];
    if (!signature || signature !== secretHash) {
      throw new Unauthorized("This request isn't from Flutterwave");
    }

    const payload = req.body;

    const verifyOption = {
      id: payload?.data?.id,
      amount: payload.amount,
      currency: payload.currency,
    };

    const res = await verifyPayment(payload?.data?.id);
  } catch (error) {
    throw error;
  }
};

// validate otp
const validateCharge = async (otpPayload: any) => {
  try {
    const payload = {
      flw_ref: otpPayload.flw_ref,
      otp: otpPayload.otp,
      authorization: {
        mode: "otp",
      },
    };

    const token = process.env.FLW_SECRET_KEY as string;

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const url = process.env.VALIDATE_CHARGE as string;

    const validateRes: any = await axios
      .post(url, payload, options)
      .then((response) => console.log(response?.data))
      .catch((err) => console.log(err));

    const verifyOption = {
      id: validateRes?.data?.id,
      amount: otpPayload.amount,
      currency: otpPayload.currency,
    };
    const res: any = await verifyPayment(verifyOption);
    if (!res) {
      throw new BadRequest("Error occured");
    }
    return {
      statusCode: 200,
      message: "Payment is pending.",
    };
  } catch (error) {
    throw error;
  }
};

//confrim payment if successful
const confirmPayment = async (confirmPaymentPayload: ConfirmPayload) => {
  try {
    const query = await prisma.$queryRaw`
      SELECT * FROM "Payment" WHERE "productId" = ${confirmPaymentPayload.productId} 
      AND "email" = ${confirmPaymentPayload.email}
    `;

    const updateProduct = await prisma.product.update({
      where: {
        id: confirmPaymentPayload.productId,
      },
      data: {
        paid: true,
      },
    });
    if (!query) {
      throw new NotFound("Error occured while fetching payment record");
    }
    return {
      statusCode: 200,
      message: "Payment successful.",
    };
  } catch (error) {
    throw error;
  }
};

export { makePayment, webhook, confirmPayment, validateCharge };
