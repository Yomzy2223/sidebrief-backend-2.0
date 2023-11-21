import { ServiceCategoryPayload, ServiceCategoryResponse } from "./entities";

import { PrismaClient } from "@prisma/client";
import logger from "../../config/logger";
const prisma = new PrismaClient();
import { BadRequest } from "../../utils/requestErrors";

//create service category service
const saveServiceCategory = async (
  serviceCategoryPayload: ServiceCategoryPayload
): Promise<ServiceCategoryResponse> => {
  //   //add the new service category to the table

  try {
    const checkService = await prisma.serviceCategory.findUnique({
      where: { name: serviceCategoryPayload.name },
    });
    if (checkService) {
      throw new BadRequest("Service with this name already exists");
    }

    const category = await prisma.serviceCategory.create({
      data: serviceCategoryPayload,
    });
    if (!category) {
      throw new BadRequest(
        "Error occured while creating this service category"
      );
    }

    logger.info({
      message: `${serviceCategoryPayload.name} service category created successfully`,
    });
    const response: ServiceCategoryResponse = {
      message: "Service category created successfully",
      data: category,
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

//get all service category service
const getAllServiceCategory = async (): Promise<ServiceCategoryResponse> => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const category = await prisma.serviceCategory.findMany({});
    if (!category) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ServiceCategoryResponse = {
      message: "Service category fetched successfully",
      data: category,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

//get a service category service
const getServiceCategory = async (
  id: string
): Promise<ServiceCategoryResponse> => {
  //   //check if the service category exists
  //   //return the service category to the service category controller

  try {
    const category = await prisma.serviceCategory.findUnique({
      where: {
        id: id,
      },
    });
    if (!category) {
      throw new BadRequest("Service category not found!.");
    }
    const response: ServiceCategoryResponse = {
      message: "Service category fetched successfully",
      data: category,
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

//update a service category service
const updateServiceCategory = async (
  id: string,
  serviceCategoryPayload: ServiceCategoryPayload
) => {
  // take both id and service category payload from the service category controller
  //  check if the service category exists
  //  update the service category
  //  return the service category to the service category controller

  try {
    const category = await prisma.serviceCategory.findUnique({
      where: {
        id: id,
      },
    });
    if (!category) {
      throw new BadRequest("Service category not found!.");
    }

    const updateCategory = await prisma.serviceCategory.update({
      where: {
        id: id,
      },
      data: serviceCategoryPayload,
    });

    if (!updateCategory) {
      throw new BadRequest("Error occured while updating service category!.");
    }

    return {
      message: "Service category updated successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//remove a service category service
const removeServiceCategory = async (id: string) => {
  //take id from the service category controller
  //check if the service category exists
  //remove the service category from the record
  //return response to the service category controller

  try {
    const deleteCategory = await prisma.serviceCategory.delete({
      where: {
        id: id,
      },
    });
    if (!deleteCategory) {
      throw new BadRequest("Service category not found!.");
    }

    return {
      message: "Service category deleted successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//create service category service
const saveServiceCategoryForm = async (
  serviceCategoryPayload: ServiceCategoryPayload,
  serviceCategoryId: string
): Promise<ServiceCategoryResponse> => {
  //   //add the new service category to the table

  try {
    const checkService = await prisma.serviceCategory.findUnique({
      where: { id: serviceCategoryId },
    });
    if (!checkService) {
      throw new BadRequest("Service does not exist");
    }

    const categoryForm = await prisma.serviceCategoryForm.create({
      data: serviceCategoryPayload,
    });
    if (!categoryForm) {
      throw new BadRequest(
        "Error occured while creating this service category form"
      );
    }

    logger.info({
      message: `service category form created successfully`,
    });
    const response: ServiceCategoryResponse = {
      message: "Service category form created successfully",
      data: categoryForm,
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

//get all service category service
const getAllServiceCategoryForm = async (
  serviceCategoryId: string
): Promise<ServiceCategoryResponse> => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const category = await prisma.serviceCategoryForm.findMany({
      where: {
        serviceCategoryId: serviceCategoryId,
      },
    });
    if (!category) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ServiceCategoryResponse = {
      message: "Service category form fetched successfully",
      data: category,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

export {
  saveServiceCategory,
  getAllServiceCategory,
  getServiceCategory,
  updateServiceCategory,
  removeServiceCategory,
  saveServiceCategoryForm,
  getAllServiceCategoryForm,
};
