import { PrismaClient, Prisma } from "@prisma/client";
import logger from "../../config/logger";
import { BadRequest, NotFound, Unauthorized } from "../../utils/requestErrors";
const prisma = new PrismaClient();
import { FormPayload, ProductPayload } from "./entities";

// PRODUCT SERVICES

//create product
const initializeProduct = async (
  productPayload: ProductPayload,
  productQAPayload: FormPayload
) => {
  try {
    const product = await prisma.product.create({
      data: productPayload,
    });
    if (!product) {
      throw new BadRequest("Error occured while creating this Product");
    }

    const productForm = {
      ...productQAPayload,
      productId: product.id,
    };
    const productQA = await prisma.productQA.create({
      data: productForm,
    });

    if (!productQA) {
      throw new BadRequest("Error occured while creating this Product Form");
    }

    const checkProduct = await prisma.product.findUnique({
      where: { id: product.id },
      include: {
        productQA: true,
      },
    });

    logger.info({
      message: `${checkProduct?.userId} created a product successfully`,
    });

    return {
      message: "Product created successfully",
      statusCode: 200,
      data: checkProduct,
    };
  } catch (error) {
    throw error;
  }
};

export { initializeProduct };
