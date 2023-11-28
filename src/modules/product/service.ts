import { PrismaClient, Prisma } from "@prisma/client";
import logger from "../../config/logger";
import { BadRequest, NotFound, Unauthorized } from "../../utils/requestErrors";
const prisma = new PrismaClient();
import { FormPayload, ProductPayload } from "./entities";
import EmailSender from "../../services/emailEngine";

//CHRONE JOB
const getUserIds = async () => {
  try {
    const timeNumber: number = 12;
    // calculating 12 hours backward
    const cutoffTime = new Date(Date.now() - timeNumber * 60 * 60 * 1000);
    const checkProduct: any[] = await prisma.$queryRaw`
    SELECT * FROM "Product" WHERE "createdAt" = ${cutoffTime} 
    AND "status" = true
  `;

    const productIds: any[] = checkProduct.map((product: any) => {
      product.userId;
    });

    return productIds;
  } catch (error) {
    throw error;
  }
};

const ScheduledJob = async () => {
  //get the users to need to be notified
  const userIds = await getUserIds();

  for (const userId of userIds) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    // send email notification
    const subject = "Complete your activity.";

    const payload = {
      name: user?.fullName,
    };
    const senderEmail = '"Sidebrief" <hey@sidebrief.com>';
    const recipientEmail = user?.email as string;
    EmailSender(
      subject,
      payload,
      recipientEmail,
      senderEmail,
      "../view/welcomeStaff.ejs"
    );
  }
};
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

//get all products by userId service
const getAllProductsByUserId = async (userId: string) => {
  //  get the products list from the table
  //  return the products list to the products controller
  try {
    const products = await prisma.product.findMany({
      where: {
        userId: userId,
      },
    });
    if (!products) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response = {
      message: "User products fetched successfully",
      data: products,
      statusCode: 200,
    };

    return response;
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
export {
  initializeProduct,
  createProductQA,
  getAllProductQA,
  getAllServiceQA,
  ScheduledJob,
  getAllProductsByUserId,
};
