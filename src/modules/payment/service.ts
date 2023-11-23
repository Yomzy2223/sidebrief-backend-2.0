import { PrismaClient, Prisma } from "@prisma/client";
import logger from "../../config/logger";
import { BadRequest, NotFound, Unauthorized } from "../../utils/requestErrors";
const prisma = new PrismaClient();
import { PaymentPayload } from "./entities";

// PRODUCT SERVICES

//make payment
const makePayment = async (transactionPayload: PaymentPayload) => {
  try {
    // logger.info({
    //   message: `${checkProduct?.userId} created a product successfully`,
    // });
    // return {
    //   message: "Product created successfully",
    //   statusCode: 200,
    //   data: checkProduct,
    // };
  } catch (error) {
    throw error;
  }
};

export { makePayment };
