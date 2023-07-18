const { PrismaClient } = require("@prisma/client");
const logger = require("../../config/logger");
const prisma = new PrismaClient();
const { BadRequest } = require("../../utils/requestErrors");

//create service category service
const saveServiceCategory = async (serviceCategoryPayload) => {
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
    return {
      message: "Service category created successfully",
      data: category,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//get all service category service
const getAllServiceCategory = async () => {
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
    return {
      message: "Service category fetched successfully",
      data: category,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//get a service category service
const getServiceCategory = async (id) => {
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
    return {
      message: "Service category fetched successfully",
      data: category,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//update a service category service
const updateServiceCategory = async (id, serviceCategoryPayload) => {
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
const removeServiceCategory = async (id) => {
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

module.exports = {
  saveServiceCategory,
  getAllServiceCategory,
  getServiceCategory,
  updateServiceCategory,
  removeServiceCategory,
};
