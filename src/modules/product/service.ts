import { PrismaClient } from "../../../prisma/generated/client2";
import logger from "../../config/logger";
import { BadRequest, NotFound, Unauthorized } from "../../utils/requestErrors";
const prisma = new PrismaClient();
import {
  FormData,
  FormPayload,
  ProductData,
  ProductPayload,
  ProductQAResponse,
  ProductResponse,
  ProductWithoutDataResponse,
  ProfileData,
  UpdateProductServiceIdPayload,
} from "./entities";
import EmailSender from "../../services/emailEngine";

//CHRONE JOB
const getProductData = async (): Promise<ProductData[]> => {
  try {
    const timeNumber: number = 12;
    // calculating 12 hours backward
    const cutoffTime = new Date(Date.now() - timeNumber * 60 * 60 * 1000);

    // get the list of uncompleted products using createdAt and completed fields
    const checkProduct: any[] = await prisma.$queryRaw`
    SELECT * FROM "Product" WHERE "createdAt" = ${cutoffTime} 
    AND "completed" = false
  `;

    //map the list to return just the userId and the currentState of the product
    const productData: ProductData[] = checkProduct?.map(
      (product: ProductData) => {
        return {
          userId: product.userId,
          currentStage: product.currentState,
        };
      }
    );

    return productData;
  } catch (error) {
    logger.error({
      message: `Error with the info ${error} occured `,
    });
    throw error;
  }
};

const ScheduledJob = async () => {
  try {
    //get the productData list
    const productData = await getProductData();

    //for each product in the product list
    for (const product of productData) {
      //get the user details using the userId
      const user = await prisma.user.findUnique({
        where: {
          id: product?.userId,
        },
      });

      // send email notification to the user
      const subject = "Complete your activity.";

      const payload = {
        name: user?.fullName,
        stage: product.currentState,
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
  } catch (error) {
    logger.error({
      message: `Error with the info ${error} occured `,
    });
    throw error;
  }
};

// PRODUCT SERVICES

//create product
const initializeProduct = async (
  productPayload: ProductPayload
): Promise<ProductResponse> => {
  try {
    const product = await prisma.product.create({
      data: productPayload,
    });
    if (!product) {
      throw new BadRequest("Error occured while creating this Product");
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

    const response: ProductResponse = {
      message: "Product created successfully",
      statusCode: 200,
      data: checkProduct,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

//add service ID
const addServiceId = async (
  productPayload: UpdateProductServiceIdPayload
): Promise<ProductResponse> => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: productPayload?.productId,
      },
    });

    const updateProduct = await prisma.product.update({
      where: { id: product?.id },
      data: { serviceId: productPayload?.serviceId },
    });

    if (!updateProduct) {
      throw new BadRequest("Error occured while updating this product");
    }

    const checkProduct = await prisma.product.findUnique({
      where: { id: product?.id },
      include: {
        productQA: true,
      },
    });

    logger.info({
      message: `${checkProduct?.userId} added a service ID successfully`,
    });

    const response: ProductResponse = {
      message: "Service ID added successfully",
      statusCode: 200,
      data: checkProduct,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

//get all products by userId service
const getAllProductsByUserId = async (
  userId: string
): Promise<ProductResponse> => {
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
    const response: ProductResponse = {
      message: "User products fetched successfully",
      data: products,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

//get a product by product ID
const getProductById = async (id: string): Promise<ProductResponse> => {
  //  get the product date from the table
  //  return the product date to the products controller
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });
    if (!product) {
      throw new BadRequest("Product date not found!.");
    }
    const response: ProductResponse = {
      message: "Product fetched successfully",
      data: product,
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
): Promise<ProductQAResponse> => {
  try {
    const findProduct = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });
    if (!findProduct) {
      throw new NotFound("User product not found");
    }

    if (productQAPayload.form.length === 1) {
      const data = {
        question: productQAPayload.form[0].question,
        answer: productQAPayload.form[0].answer,
        type: productQAPayload.form[0].type,
        compulsory: productQAPayload.form[0].compulsory,
        isGeneral: productQAPayload.form[0].isGeneral,
        productId: findProduct.id,
        fileName: productQAPayload.form[0].file.name,
        fileDescription: productQAPayload.form[0].file.description,
        fileLink: productQAPayload.form[0].file.link,
        fileType: productQAPayload.form[0].file.type,
      };
      const createProductFormData = await prisma.productQA.create({
        data: data,
      });
      if (!createProductFormData) {
        throw new BadRequest("Error occured while creating this Product Form");
      }

      if (productQAPayload.form[0].subForm) {
        const productForm = productQAPayload.form[0].profile.map(
          (data: ProfileData) => ({
            question: data.question,
            answer: data.answer,
            type: data.type,
            compulsory: data.compulsory,
            productQAId: createProductFormData.id,
          })
        );

        const productQA = await prisma.productQASubForm.createMany({
          data: productForm,
          skipDuplicates: true,
        });

        if (!productQA) {
          throw new BadRequest(
            "Error occured while creating this Product Sub Form"
          );
        }
      }
    } else {
      const productForm = productQAPayload.form.map((data: FormData) => ({
        question: data.question,
        answer: data.answer,
        type: data.type,
        isGeneral: data.isGeneral,
        compulsory: data.compulsory,
        productId: findProduct.id,
        fileName: data.file.name,
        fileDescription: data.file.description,
        fileLink: data.file.link,
        fileType: data.file.type,
      }));

      const productQA = await prisma.productQA.createMany({
        data: productForm,
        skipDuplicates: true,
      });

      if (!productQA) {
        throw new BadRequest("Error occured while creating this Product Form");
      }
    }

    logger.info({
      message: `Form saved successfully for product with ${productId} `,
    });

    const productForms = await prisma.productQA.findMany({
      where: {
        productId: findProduct.id,
      },
      include: {
        productSubForm: true,
      },
    });

    if (!productForms) {
      throw new NotFound("Error occured while getting products");
    }

    const response: ProductQAResponse = {
      message: "Product form saved successfully",
      statusCode: 200,
      data: productForms,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

//get all service QA service
const getAllServiceQA = async (
  productId: string
): Promise<ProductQAResponse> => {
  //  get the all the service QA
  //  return the  list to the service QA controller
  try {
    const GeneralQA = await prisma.productQA.findMany({
      where: {
        productId: productId,
      },
    });
    if (!GeneralQA) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ProductQAResponse = {
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
const getAllProductQA = async (
  productId: string
): Promise<ProductQAResponse> => {
  //  get the all the product QA
  //  return the  list to the product QA controller
  try {
    const GeneralQA = await prisma.productQA.findMany({
      where: {
        productId: productId,
      },
    });
    if (!GeneralQA) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ProductQAResponse = {
      message: "Product QA fetched successfully",
      data: GeneralQA,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};
//get all service QA service
const getAllProductQAByQuestion = async (
  payload: any
): Promise<ProductQAResponse> => {
  //  get the all the product QA
  //  return the  list to the product QA controller
  try {
    const GeneralQA = await prisma.productQA.findMany({
      where: {
        question: payload.question,
        productId: payload.productId,
        isGeneral: false,
      },
      include: {
        productSubForm: true,
      },
    });
    if (!GeneralQA) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ProductQAResponse = {
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
const submitProduct = async (
  productId: string
): Promise<ProductWithoutDataResponse> => {
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
    const response: ProductWithoutDataResponse = {
      message: "Product submitted successfully",
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
  submitProduct,
  addServiceId,
  getProductById,
  getAllProductQAByQuestion,
};
