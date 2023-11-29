import { PrismaClient, Prisma } from "@prisma/client";
import logger from "../../config/logger";
import { BadRequest, NotFound, Unauthorized } from "../../utils/requestErrors";
const prisma = new PrismaClient();
import { FormPayload, ProductPayload } from "./entities";
import EmailSender from "../../services/emailEngine";

enum ProductStage {
  START = "Unverified",
  PAYMENT = "Verified",
  DOCUMENT = "In progress",
  SUBMISSION = "Completed",
}

//CHRONE JOB
const getProductData = async () => {
  try {
    const timeNumber: number = 12;
    // calculating 12 hours backward
    const cutoffTime = new Date(Date.now() - timeNumber * 60 * 60 * 1000);
    const checkProduct: any[] = await prisma.$queryRaw`
    SELECT * FROM "Product" WHERE "createdAt" = ${cutoffTime} 
    AND "status" = true
  `;

    const productData: any[] = checkProduct.map((product: any) => {
      product.userId;
      product.currentStage;
    });

    return productData;
  } catch (error) {
    throw error;
  }
};

const ScheduledJob = async () => {
  //get the users to need to be notified
  const productData = await getProductData();

  for (const product of productData) {
    const user = await prisma.user.findUnique({
      where: {
        id: product?.userId,
      },
    });

    // send email notification
    const subject = "Complete your activity.";

    const payload = {
      name: user?.fullName,
      stage: product.currentStage,
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

//create product
const submitProduct = async (productId: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });
    if (!product) {
      throw new NotFound("Product not found.");
    }

    const updateProduct = await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        completed: true,
      },
    });

    if (!updateProduct) {
      throw new BadRequest("Error occured while submiting product.");
    }

    const findUser = await prisma.user.findUnique({
      where: {
        id: updateProduct.userId,
      },
    });

    //send staff email
    const subject = "Your Product has been submitted successfully.";
    const payload = {
      name: findUser?.fullName,
    };
    const senderEmail = '"Sidebrief" <hey@sidebrief.com>';
    const recipientEmail = findUser?.email as string;
    EmailSender(
      subject,
      payload,
      recipientEmail,
      senderEmail,
      "../view/welcomeStaff.ejs"
    );

    logger.info({
      message: "Product submitted successfully",
    });

    return {
      message: "Product submitted successfully",
      statusCode: 200,
    };
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
  submitProduct,
};
