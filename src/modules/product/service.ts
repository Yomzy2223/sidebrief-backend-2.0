import { PrismaClient, Prisma } from "@prisma/client";
import logger from "../../config/logger";
import { BadRequest, NotFound, Unauthorized } from "../../utils/requestErrors";
const prisma = new PrismaClient();
import { ProductPayload } from "./entities";

// PRODUCT SERVICES

//create product
const initializeProduct = async (productPayload: ProductPayload) => {
  try {
    const product = await prisma.product.create({
      data: productPayload,
    });
    if (!product) {
      throw new BadRequest("Error occured while creating this Product");
    }
  } catch (error) {
    throw error;
  }
};

export { initializeProduct };
