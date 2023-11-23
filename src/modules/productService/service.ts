import {
  ProductServicePayload,
  ProductServiceResponse,
  ServiceFormPayload,
  ServiceFormResponse,
} from "./entities";

import { PrismaClient } from "@prisma/client";
import logger from "../../config/logger";
const prisma = new PrismaClient();
import { BadRequest } from "../../utils/requestErrors";

// create a service for product service

const saveProductService = async (
  productServicePayload: ProductServicePayload,
  serviceCategoryId: string
): Promise<ProductServiceResponse> => {
  // add new product service to the table
  try {
    const checkService = await prisma.service.findUnique({
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
      message: `${productServicePayload.name} product service category created successfully`,
    });

    const response: ProductServiceResponse = {
      message: "Product service created successfully",
      data: service,
      statusCode: 201,
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
      message: "Product service fetched successfully",
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
  ServiceCategoryId: string
): Promise<ProductServiceResponse> => {
  // check if the product service for the service category exist
  // return the product service to the product service controller

  try {
    const service = await prisma.service.findMany({
      where: {
        id: ServiceCategoryId,
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
      message: "Product service updated successfully!.",
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
    const deleteService = await prisma.service.delete({
      where: {
        id: id,
      },
    });
    if (!deleteService) {
      throw new BadRequest("Product service not found!");
    }

    return {
      message: "Product service deleted successfully",
      statusCode: 204,
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
    const checkService = await prisma.serviceForm.findUnique({
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

    //logger.info({
    //  message: `${serviceFormPayload.name} product service category created successfully`,
    //  });

    const response: ServiceFormResponse = {
      message: "Product service form created successfully",
      data: serviceForm,
      statusCode: 201,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

// get all service form

const getAllServiceForm = async (): Promise<ServiceFormResponse> => {
  //  get the service form  list from the table
  //  return the service form list to the  service form controller
  try {
    const serviceForm = await prisma.serviceForm.findMany({});
    if (!serviceForm) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
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
        id: serviceId,
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

// update service form
const updateServiceForm = async (
  id: string,
  serviceFormPayload: ServiceFormPayload
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

    const updateServiceForm = await prisma.serviceForm.update({
      where: {
        id: id,
      },
      data: serviceFormPayload,
    });

    if (!updateServiceForm) {
      throw new BadRequest("Error occurred while updating Service form!.");
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
    const deleteServiceForm = await prisma.serviceForm.delete({
      where: {
        id: id,
      },
    });
    if (!deleteServiceForm) {
      throw new BadRequest("Service form not found!");
    }

    return {
      message: "Service form deleted successfully",
      statusCode: 204,
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
};
