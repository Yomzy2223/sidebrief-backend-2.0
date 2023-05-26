const { PrismaClient } = require("@prisma/client");
const logger = require("../../config/logger");
const prisma = new PrismaClient();

//create service category service
const saveServiceCategory = async (serviceCategoryPayload) => {
  //   //add the new service category to the table

  try {
    const values = {
      name: serviceCategoryPayload.name,
      description: serviceCategoryPayload.description,
    };
    console.log(values);
    const category = await prisma.serviceCategory.create({ data: values });
    console.log("test", category);
    if (!category) {
      return {
        error: "Error occured while creating this service category",
        statusCode: 400,
      };
    }

    logger.info({
      message: `${serviceCategoryPayload.name} service category created successfully`,
    });
    return {
      message: "Service category created successfully",
      data: category,
      statusCode: 200
    };
  } catch (error) {
    logger.error({
      message: `error occured while creating this service category with error ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

//get all service category service
const getAllServiceCategory = async () => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const category = await prisma.serviceCategory.findMany({});
    return {
      message: "Service category fetched successfully",
      data: category,
      statusCode: 200
    };
  } catch (error) {
    logger.error({
      message: `error occured while fetching all service category with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
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
    if (category === null) {
      return {
        error: "Service category not found!.",
        statusCode: 400,
      };
    }
    return {
      message: "Service category fetched successfully",
      data: category,
      statusCode: 200
    };
  } catch (error) {
    logger.error({
      message: `error occured while fetching service category with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

//update a service category service
const updateServiceCategory = async (id, serviceCategoryPayload) => {
  // take both id and service category payload from the service category controller
  //  check if the service category exists
  //  update the service category
  //  return the service category to the service category controller

  try {
    const values = {
      name: serviceCategoryPayload.name,
      description: serviceCategoryPayload.description,
    };

    const category = await prisma.serviceCategory.findUnique({
      where: {
        id: id,
      },
    });
    if (category === null) {
      return {
        error: "Service Category not found!.",
        statusCode: 400,
      };
    }

    const updateCategory = await prisma.serviceCategory.update({
      where: {
        id: id,
      },
      data: values,
    });

    if (!updateCategory) {
      return {
        error: "Error occured while updating service category!.",
        statusCode: 400,
      };
    }

    return {
      message: "Service category updated successfully",
      statusCode: 200
    };
  } catch (error) {
    logger.error({
      message: `error occured while updating service category with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
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
      return {
        error: "Service category not found.",
        statusCode: 400,
      };
    }

    return {
      message: "Service category deleted successfully",
      statusCode: 200
    };
  } catch (error) {
    logger.error({
      message: `error occured while deleting service category with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

module.exports = {
  saveServiceCategory,
  getAllServiceCategory,
  getServiceCategory,
  updateServiceCategory,
  removeServiceCategory,
};
