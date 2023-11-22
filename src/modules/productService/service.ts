import { ProductServicePayload, ProductServiceResponse } from "./entities";

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
    const service = await prisma.service.findUnique({
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

export {
  getAllProductService,
  getProductServiceByServiceCategory,
  getProductService,
  saveProductService,
  updateProductService,
  removeProductService,
};
