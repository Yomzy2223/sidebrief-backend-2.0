import {
  FormData,
  ProductServicePayload,
  ProductServiceResponse,
  ServiceFormPayload,
  ServiceFormResponse,
  ServiceSubFormPayload,
  ServiceSubFormResponse,
  SubFormPayload,
  UpdateServiceFormPayload,
  UpdateServiceSubFormPayload,
} from "./entities";

import { PrismaClient } from "../../../prisma/generated/client2";
import logger from "../../config/logger";
const prisma = new PrismaClient();
import { BadRequest, NotFound } from "../../utils/requestErrors";

// create a service for product service

const saveProductService = async (
  productServicePayload: ProductServicePayload,
  serviceCategoryId: string
): Promise<ProductServiceResponse> => {
  // add new product service to the table
  try {
    const checkService = await prisma.serviceCategory.findUnique({
      where: { id: serviceCategoryId },
    });
    if (!checkService) {
      throw new BadRequest("Service does not exist");
    }

    const service = await prisma.service.create({
      data: productServicePayload,
    });
    if (!service) {
      throw new BadRequest("Error occured while creating this product service");
    }

    logger.info({
      message: `$ product service category created successfully`,
    });

    const response: ProductServiceResponse = {
      message: "Product service created successfully",
      data: service,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

// get all product service

const getAllProductService = async (): Promise<ProductServiceResponse> => {
  //  get the product service  list from the table
  //  return the product service list to the product service controller
  try {
    const service = await prisma.service.findMany({});
    if (!service) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ProductServiceResponse = {
      message: "Product services fetched successfully",
      data: service,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

// get product service by service category

const getProductServiceByServiceCategory = async (
  serviceCategoryId: string
): Promise<ProductServiceResponse> => {
  // check if the product service for the service category exist
  // return the product service to the product service controller

  try {
    const service = await prisma.service.findMany({
      where: {
        serviceCategoryId: serviceCategoryId,
      },
    });

    if (!service) {
      throw new BadRequest(
        "Product service for this service category not found!."
      );
    }

    const response: ProductServiceResponse = {
      message: "Product service fetched successfully",
      data: service,
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

// get a product service
const getProductService = async (
  id: string
): Promise<ProductServiceResponse> => {
  // check if the product service for the service category exist
  // return the product service to the product service controller

  try {
    const service = await prisma.service.findUnique({
      where: {
        id: id,
      },
    });

    if (!service) {
      throw new BadRequest("Product service not found!.");
    }

    const response: ProductServiceResponse = {
      message: "Product service fetched successfully",
      data: service,
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

// update product service
const updateProductService = async (
  id: string,
  productServicePayload: ProductServicePayload
) => {
  // take both id and service payload from the service category controller
  //  check if the product service  exists
  //  update the product service
  //  return the product service  to the product service  controller

  try {
    const checkService = await prisma.service.findUnique({
      where: {
        id: id,
      },
    });

    if (!checkService) {
      throw new BadRequest("Product service not found!");
    }

    const updateService = await prisma.service.update({
      where: {
        id: id,
      },
      data: productServicePayload,
    });

    if (!updateService) {
      throw new BadRequest("Error occurred while updating Product service!.");
    }

    return {
      message: "Product service updated successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

// remove product service

const removeProductService = async (id: string) => {
  //take id from the product service controller
  //check if the product service  exists
  //remove the product service from the record
  //return response to the product service  controller

  try {
    const checkService = await prisma.service.findUnique({
      where: {
        id: id,
      },
    });

    if (!checkService) {
      throw new BadRequest("Product service not found!");
    }

    const deleteService = await prisma.service.delete({
      where: {
        id: id,
      },
    });

    return {
      message: "Product service deleted successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

// create a service form for product service

const saveServiceForm = async (
  serviceFormPayload: ServiceFormPayload,
  serviceId: string
): Promise<ServiceFormResponse> => {
  // add new service form to the table
  try {
    const checkService = await prisma.service.findUnique({
      where: { id: serviceId },
    });
    if (!checkService) {
      throw new BadRequest("Service does not exist");
    }

    const serviceForm = await prisma.serviceForm.create({
      data: serviceFormPayload,
    });
    if (!serviceForm) {
      throw new BadRequest("Error occured while creating this service form");
    }

    logger.info({
      message: `Service form created successfully`,
    });

    const response: ServiceFormResponse = {
      message: "Service form created successfully",
      data: serviceForm,
      statusCode: 201,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

// get all service form

const getAllServiceForm = async (
  serviceId: string
): Promise<ServiceFormResponse> => {
  //  get the  service form  list from the table
  //  return the service form list to the service form controller
  try {
    const service = await prisma.serviceForm.findMany({
      where: {
        serviceId: serviceId,
      },
    });
    if (!service) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ServiceFormResponse = {
      message: "Service forms fetched successfully",
      data: service,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

// get a service form
const getServiceForm = async (id: string): Promise<ServiceFormResponse> => {
  // check if the service form for the product service exist
  // return the service form to the service form controller

  try {
    const serviceForm = await prisma.serviceForm.findUnique({
      where: {
        id: id,
      },
    });

    if (!serviceForm) {
      throw new BadRequest("Service form not found!.");
    }

    const response: ServiceFormResponse = {
      message: "Service form fetched successfully",
      data: serviceForm,
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

// get service form by service id

const getServiceFormByService = async (
  serviceId: string
): Promise<ServiceFormResponse> => {
  // check if the service form for the particular service exist
  // return the service form to the service controller

  try {
    const serviceForm = await prisma.serviceForm.findMany({
      where: {
        serviceId: serviceId,
      },
    });

    if (!serviceForm) {
      throw new BadRequest("Service form not found!");
    }

    const response: ServiceFormResponse = {
      message: "Service form fetched successfully",
      data: serviceForm,
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

// update service form
const updateServiceForm = async (
  id: string,
  serviceFormPayload: UpdateServiceFormPayload,
  subForm: SubFormPayload
) => {
  // take both id and service form payload from the service form category controller
  //  check if the service form exists
  //  update the service form
  //  return the service form to the service form controller

  try {
    const checkServiceForm = await prisma.serviceForm.findUnique({
      where: {
        id: id,
      },
    });

    if (!checkServiceForm) {
      throw new BadRequest("Service form not found!");
    }

    const data = {
      ...serviceFormPayload,
      serviceId: checkServiceForm.serviceId,
    };

    const updateServiceForm = await prisma.serviceForm.update({
      where: {
        id: id,
      },
      data: data,
    });

    if (!updateServiceForm) {
      throw new BadRequest("Error occurred while updating Service form!.");
    }

    if (subForm.subForm) {
      const subServiceForm = subForm.form.map((data: FormData) => ({
        question: data.question,
        options: data.options,
        type: data.type,
        compulsory: data.compulsory,
        fileName: data?.file?.name,
        fileDescription: data?.file?.description,
        fileLink: data?.file?.link,
        fileType: data?.file?.type,
      }));

      const productQA = await prisma.serviceSubForm.updateMany({
        data: subServiceForm,
      });

      if (!productQA) {
        throw new BadRequest(
          "Error occured while updating this service Sub Form"
        );
      }
    }
    return {
      message: "Service form updated successfully!.",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

// remove service form

const removeServiceForm = async (id: string) => {
  //take id from the service form controller
  //check if the service form exists
  //remove the service form from the record
  //return response to the service form controller

  try {
    const checkServiceForm = await prisma.serviceForm.findUnique({
      where: {
        id: id,
      },
    });

    if (!checkServiceForm) {
      throw new BadRequest("Service form not found!");
    }

    const deleteServiceForm = await prisma.serviceForm.delete({
      where: {
        id: id,
      },
    });

    return {
      message: "Service form deleted successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//create service sub form service
const saveServiceSubForm = async (
  serviceCategoryPayload: ServiceSubFormPayload,
  serviceFormId: string
): Promise<ServiceSubFormResponse> => {
  //   //add the new service category to the table

  try {
    const checkService = await prisma.serviceForm.findUnique({
      where: { id: serviceFormId },
    });
    if (!checkService) {
      throw new BadRequest("Service form does not exist");
    }

    const categoryForm = await prisma.serviceSubForm.create({
      data: serviceCategoryPayload,
    });
    if (!categoryForm) {
      throw new BadRequest(
        "Error occured while creating this service sub form"
      );
    }

    logger.info({
      message: `service sub form created successfully`,
    });
    const response: ServiceSubFormResponse = {
      message: "Service sub form created successfully",
      data: categoryForm,
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

//get all service category service
const getAllServiceSubForm = async (
  serviceFormId: string
): Promise<ServiceSubFormResponse> => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const category = await prisma.serviceSubForm.findMany({
      where: {
        serviceFormId: serviceFormId,
      },
    });
    if (!category) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ServiceSubFormResponse = {
      message: "Service sub form fetched successfully",
      data: category,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

const getServiceSubForm = async (
  id: string
): Promise<ServiceSubFormResponse> => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const category = await prisma.serviceSubForm.findUnique({
      where: {
        id: id,
      },
    });
    if (!category) {
      throw new BadRequest("Service sub form not found!.");
    }
    const response: ServiceSubFormResponse = {
      message: "Service sub form fetched successfully",
      data: category,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

//update a service category form service
const updateServiceSubForm = async (
  serviceCategorySubFormPayload: UpdateServiceSubFormPayload,
  id: string
): Promise<ServiceSubFormResponse> => {
  // take both id and service category payload from the service category controller
  //  check if the service category exists
  //  update the service category
  //  return the service category to the service category controller

  try {
    const category = await prisma.serviceSubForm.findUnique({
      where: {
        id: id,
      },
    });
    if (!category) {
      throw new BadRequest("Service sub form not found!.");
    }

    const updateCategory = await prisma.serviceSubForm.update({
      where: {
        id: id,
      },
      data: serviceCategorySubFormPayload,
    });

    if (!updateCategory) {
      throw new BadRequest("Error occured while updating service sub form!.");
    }

    return {
      message: "Service sub form updated successfully",
      data: updateCategory,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

const removeServiceSubForm = async (id: string) => {
  //take id from the service category controller
  //check if the service category exists
  //remove the service category from the record
  //return response to the service category controller

  try {
    const deleteCategory = await prisma.serviceSubForm.delete({
      where: {
        id: id,
      },
    });
    if (!deleteCategory) {
      throw new BadRequest("Service sub form not found!.");
    }

    return {
      message: "Service sub form deleted successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};
export {
  getAllProductService,
  getProductServiceByServiceCategory,
  getProductService,
  saveProductService,
  updateProductService,
  removeProductService,
  saveServiceForm,
  getAllServiceForm,
  getServiceForm,
  getServiceFormByService,
  removeServiceForm,
  updateServiceForm,
  saveServiceSubForm,
  getServiceSubForm,
  getAllServiceSubForm,
  updateServiceSubForm,
  removeServiceSubForm,
};
