import { PrismaClient } from "../../../prisma/generated/main";
import logger from "../../config/logger";
import { BadRequest, NotFound, Unauthorized } from "../../utils/requestErrors";
const prisma = new PrismaClient();
import {
  FormData,
  FormPayload,
  ProductRequestData,
  ProductRequestPayload,
  ProductRequestQAResponse,
  ProductRequestResponse,
  ProductRequestWithoutDataResponse,
  ProfileData,
  UpdateProductRequestIdPayload,
} from "./entities";
import EmailSender from "../../services/emailEngine";

//CHRONE JOB
const getProductRequestData = async (): Promise<ProductRequestData[]> => {
  try {
    const timeNumber: number = 12;
    // calculating 12 hours backward
    const cutoffTime = new Date(Date.now() - timeNumber * 60 * 60 * 1000);

    // get the list of uncompleted productRequests using createdAt and completed fields
    const checkproductRequest: any[] = await prisma.$queryRaw`
    SELECT * FROM "productRequest" WHERE "createdAt" = ${cutoffTime} 
    AND "completed" = false
  `;

    //map the list to return just the userId and the currentState of the productRequest
    const productRequestData: ProductRequestData[] = checkproductRequest?.map(
      (productRequest: ProductRequestData) => {
        return {
          userId: productRequest.userId,
          currentStage: productRequest.currentState,
        };
      }
    );

    return productRequestData;
  } catch (error) {
    logger.error({
      message: `Error with the info ${error} occured `,
    });
    throw error;
  }
};

const ScheduledJob = async () => {
  try {
    //get the productRequestData list
    const productRequestData = await getProductRequestData();

    //for each productRequest in the productRequest list
    for (const productRequest of productRequestData) {
      //get the user details using the userId
      const user = await prisma.user.findUnique({
        where: {
          id: productRequest?.userId,
        },
      });

      // send email notification to the user
      const subject = "Complete your activity.";

      const payload = {
        name: user?.fullName,
        stage: productRequest.currentState,
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

// productRequest SERVICES

//create productRequest
const initializeProductRequest = async (
  productRequestPayload: ProductRequestPayload
): Promise<ProductRequestResponse> => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: productRequestPayload.userId,
        isStaff: false,
        isPartner: false,
      },
    });
    if (!user) {
      throw new NotFound(" User not found.");
    }

    const productRequest = await prisma.productRequest.create({
      data: productRequestPayload,
    });
    if (!productRequest) {
      throw new BadRequest("Error occured while creating this Product Request");
    }

    const checkproductRequest = await prisma.productRequest.findUnique({
      where: { id: productRequest.id },
      include: {
        requestQA: true,
      },
    });

    logger.info({
      message: `${checkproductRequest?.userId} created a Product Request successfully`,
    });

    const response: ProductRequestResponse = {
      message: "Product Request created successfully",
      statusCode: 200,
      data: checkproductRequest,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

//add product ID
const addProductId = async (
  productRequestPayload: UpdateProductRequestIdPayload
): Promise<ProductRequestResponse> => {
  try {
    const productRequest = await prisma.productRequest.findUnique({
      where: {
        id: productRequestPayload?.requestId,
      },
    });

    const updateproductRequest = await prisma.productRequest.update({
      where: { id: productRequest?.id },
      data: { productId: productRequestPayload?.productId },
    });

    if (!updateproductRequest) {
      throw new BadRequest("Error occured while updating this Product Request");
    }

    const checkproductRequest = await prisma.productRequest.findUnique({
      where: { id: productRequest?.id },
      include: {
        requestQA: true,
      },
    });

    logger.info({
      message: `${checkproductRequest?.userId} added a Product ID successfully`,
    });

    const response: ProductRequestResponse = {
      message: "Product ID added successfully",
      statusCode: 200,
      data: checkproductRequest,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

//get all productRequests by userId service
const getAllProductRequestsByUserId = async (
  userId: string
): Promise<ProductRequestResponse> => {
  //  get the productRequests list from the table
  //  return the productRequests list to the productRequests controller
  try {
    const productRequests = await prisma.productRequest.findMany({
      where: {
        userId: userId,
      },
    });
    if (!productRequests) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ProductRequestResponse = {
      message: "User Product Requests fetched successfully",
      data: productRequests,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

//get a productRequest by productRequest ID
const getProductRequestById = async (
  id: string
): Promise<ProductRequestResponse> => {
  //  get the productRequest date from the table
  //  return the productRequest date to the productRequests controller
  try {
    const productRequest = await prisma.productRequest.findUnique({
      where: {
        id: id,
      },
      include: {
        product: true,
      },
    });
    if (!productRequest) {
      throw new BadRequest("Product Request data not found!.");
    }
    const response: ProductRequestResponse = {
      message: "Product Request fetched successfully",
      data: productRequest,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

//productRequest info
const createProductRequestQA = async (
  productRequestQAPayload: FormPayload,
  requestId: string
): Promise<ProductRequestQAResponse> => {
  try {
    const findproductRequest = await prisma.productRequest.findUnique({
      where: {
        id: requestId,
      },
    });
    if (!findproductRequest) {
      throw new NotFound("User Product Request not found");
    }

    const formData = {
      title: productRequestQAPayload?.title,
      description: productRequestQAPayload?.description,
      type: productRequestQAPayload?.type,
      compulsory: productRequestQAPayload?.compulsory,
      isGeneral: productRequestQAPayload?.isGeneral,
      requestId: findproductRequest.id,
    };

    const createproductRequestFormData = await prisma.productRequestQA.create({
      data: formData,
    });
    if (!createproductRequestFormData) {
      throw new BadRequest(
        "Error occured while saving this Product Request Form"
      );
    }

    const productRequestForm = productRequestQAPayload.subForm.map(
      (data: FormData) => ({
        question: data.question,
        answer: data.answer,
        type: data.type,
        compulsory: data.compulsory,
        fileName: data?.file?.name,
        fileLink: data?.file?.link,
        fileType: data?.file?.type,
        requestQAId: createproductRequestFormData.id,
      })
    );

    const productRequestQA = await prisma.productRequestQASubForm.createMany({
      data: productRequestForm,
      skipDuplicates: true,
    });

    if (!productRequestQA) {
      throw new BadRequest(
        "Error occured while saving this Product Request Sub Form"
      );
    }

    logger.info({
      message: `Form saved successfully for Product Request with ${requestId} `,
    });

    const productRequestForms = await prisma.productRequestQA.findUnique({
      where: {
        id: createproductRequestFormData.id,
      },
      include: {
        subForm: true,
      },
    });

    if (!productRequestForms) {
      throw new NotFound("Error occured while getting Product Requests");
    }

    const response: ProductRequestQAResponse = {
      message: "Product Request form saved successfully",
      statusCode: 200,
      data: productRequestForms,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

//get all product QA product
const getAllRequestProductQA = async (
  requestId: string
): Promise<ProductRequestQAResponse> => {
  //  get the all the product QA
  //  return the  list to the product QA controller
  try {
    const GeneralQA = await prisma.productRequestQA.findMany({
      where: {
        requestId: requestId,
        isGeneral: false,
      },
      include: {
        subForm: true,
      },
    });
    if (!GeneralQA) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ProductRequestQAResponse = {
      message: "Request Product QA fetched successfully",
      data: GeneralQA,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

const getAllRequestServiceQA = async (
  requestId: string
): Promise<ProductRequestQAResponse> => {
  //  get the all the product QA
  //  return the  list to the product QA controller
  try {
    const GeneralQA = await prisma.productRequestQA.findMany({
      where: {
        requestId: requestId,
        isGeneral: true,
      },
      include: {
        subForm: true,
      },
    });
    if (!GeneralQA) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ProductRequestQAResponse = {
      message: "Request Service QA fetched successfully",
      data: GeneralQA,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

//get all product QA product
const getAllProductRequestQA = async (
  requestId: string
): Promise<ProductRequestQAResponse> => {
  //  get the all the productRequest QA
  //  return the  list to the productRequest QA controller
  try {
    const GeneralQA = await prisma.productRequestQA.findMany({
      where: {
        requestId: requestId,
      },
    });
    if (!GeneralQA) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ProductRequestQAResponse = {
      message: "productRequest QA fetched successfully",
      data: GeneralQA,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};
//get all product QA product
const getAllProductRequestQAByQuestion = async (
  payload: any
): Promise<ProductRequestQAResponse> => {
  //  get the all the productRequest QA
  //  return the  list to the productRequest QA controller
  try {
    const GeneralQA = await prisma.productRequestQA.findMany({
      where: {
        title: payload.title,
        requestId: payload.requestId,
        isGeneral: false,
      },
      include: {
        subForm: true,
      },
    });
    if (!GeneralQA) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ProductRequestQAResponse = {
      message: "productRequest QA fetched successfully",
      data: GeneralQA,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

//create productRequest
const submitProductRequest = async (
  requestId: string
): Promise<ProductRequestWithoutDataResponse> => {
  try {
    const productRequest = await prisma.productRequest.findUnique({
      where: {
        id: requestId,
      },
    });
    if (!productRequest) {
      throw new NotFound("Product Request not found.");
    }

    const updateproductRequest = await prisma.productRequest.update({
      where: {
        id: requestId,
      },
      data: {
        completed: true,
      },
    });

    if (!updateproductRequest) {
      throw new BadRequest("Error occured while submiting productRequest.");
    }

    const findUser = await prisma.user.findUnique({
      where: {
        id: updateproductRequest.userId,
      },
    });

    //send staff email
    const subject = "Your productRequest has been submitted successfully.";
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
      message: "productRequest submitted successfully",
    });
    const response: ProductRequestWithoutDataResponse = {
      message: "productRequest submitted successfully",
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

//get all productRequests by service ID
const getAllProductRequestsByServiceId = async (
  serviceId: string,
  page: number = 1,
  pageSize: number = 10
): Promise<ProductRequestResponse> => {
  //  get the productRequests list from the table
  //  return the productRequests list to the productRequests controller
  try {
    const checkService = await prisma.service.findUnique({
      where: { id: serviceId },
    });
    if (!checkService) {
      throw new BadRequest("Service with this Id does not exist");
    }

    const products = await prisma.product.findMany({
      where: {
        serviceId: serviceId,
      },
      include: {
        request: true,
      },
      skip: (page - 1) * pageSize, // Calculate the number of items to skip based on page number
      take: pageSize, // Limit the number of items returned per page
    });
    console.log(products);
    if (!products) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    // map the list to return only product Requests
    const productRequests = products.flatMap((product) => product?.request);

    const response: ProductRequestResponse = {
      message: "User Product Requests fetched successfully",
      data: productRequests,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

export {
  initializeProductRequest,
  createProductRequestQA,
  getAllProductRequestQA,
  getAllRequestProductQA,
  getAllRequestServiceQA,
  ScheduledJob,
  getAllProductRequestsByUserId,
  submitProductRequest,
  addProductId,
  getProductRequestById,
  getAllProductRequestQAByQuestion,
  getAllProductRequestsByServiceId,
};
