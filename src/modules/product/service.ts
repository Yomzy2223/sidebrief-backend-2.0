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

//product info
const createProductQA = async (
  productQAPayload: FormPayload,
  productId: string
) => {
  try {
    const findProduct = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });
    if (!findProduct) {
      throw new NotFound("User product not found");
    }

    const productForm = {
      ...productQAPayload,
      productId: productId,
    };
    const productQA = await prisma.productQA.create({
      data: productForm,
    });

    if (!productQA) {
      throw new BadRequest("Error occured while creating this Product Form");
    }

    logger.info({
      message: `more Q/A saved successfully for product with ${productId} `,
    });

    return {
      message: "Product Q/A saved successfully",
      statusCode: 200,
      data: productQA,
    };
  } catch (error) {
    throw error;
  }
};

//get all service QA service
const getAllServiceQA = async (productId: string) => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const GeneralQA = await prisma.productQA.findMany({
      where: {
        productId: productId,
        isGeneral: true,
      },
    });
    if (!GeneralQA) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response = {
      message: "Service QA fetched successfully",
      data: GeneralQA,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

//get all service QA service
const getAllProductQA = async (productId: string) => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const GeneralQA = await prisma.productQA.findMany({
      where: {
        productId: productId,
        isGeneral: false,
      },
    });
    if (!GeneralQA) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response = {
      message: "Product QA fetched successfully",
      data: GeneralQA,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};
export { initializeProduct, createProductQA, getAllProductQA, getAllServiceQA };
