import {
  ServiceCategoryFormPayload,
  ServiceCategoryFormResponse,
  ServiceCategoryPayload,
  ServiceCategoryResponse,
  ServiceCategorySubFormPayload,
  ServiceCategorySubFormResponse,
  UpdateServiceCategoryFormPayload,
  UpdateServiceCategorySubFormPayload,
} from "./entities";

import { PrismaClient } from "../../../prisma/generated/client2";
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
      include: {
        form: {
          include: {
            subForm: true,
          },
        },
        services: true,
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
): Promise<ServiceCategoryResponse> => {
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
      data: updateCategory,
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
  serviceCategoryPayload: ServiceCategoryFormPayload,
  serviceCategoryId: string
): Promise<ServiceCategoryFormResponse> => {
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
    const response: ServiceCategoryFormResponse = {
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
): Promise<ServiceCategoryFormResponse> => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const category = await prisma.serviceCategoryForm.findMany({
      where: {
        serviceCategoryId: serviceCategoryId,
      },
      include: {
        subForm: true,
      },
    });
    if (!category) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ServiceCategoryFormResponse = {
      message: "Service category forms fetched successfully",
      data: category,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

const getServiceCategoryForm = async (
  id: string
): Promise<ServiceCategoryFormResponse> => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const category = await prisma.serviceCategoryForm.findUnique({
      where: {
        id: id,
      },
      include: {
        subForm: true,
      },
    });

    if (!category) {
      throw new BadRequest("Service category form not found!.");
    }
    const response: ServiceCategoryFormResponse = {
      message: "Service category form fetched successfully",
      data: category,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

//update a service category form service
const updateServiceCategoryForm = async (
  serviceCategoryPayload: UpdateServiceCategoryFormPayload,
  id: string
): Promise<ServiceCategoryFormResponse> => {
  // take both id and service category payload from the service category controller
  //  check if the service category exists
  //  update the service category
  //  return the service category to the service category controller

  try {
    const category = await prisma.serviceCategoryForm.findUnique({
      where: {
        id: id,
      },
    });
    if (!category) {
      throw new BadRequest("Service category Form not found!.");
    }

    const updateCategory = await prisma.serviceCategoryForm.update({
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
      data: updateCategory,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

const removeServiceCategoryForm = async (id: string) => {
  //take id from the service category controller
  //check if the service category exists
  //remove the service category from the record
  //return response to the service category controller

  try {
    const deleteCategory = await prisma.serviceCategoryForm.delete({
      where: {
        id: id,
      },
    });
    if (!deleteCategory) {
      throw new BadRequest("Service category form not found!.");
    }

    return {
      message: "Service category form deleted successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//create service category service
const saveServiceCategorySubForm = async (
  serviceCategoryPayload: ServiceCategorySubFormPayload,
  formId: string
): Promise<ServiceCategorySubFormResponse> => {
  //   //add the new service category to the table

  try {
    const checkService = await prisma.serviceCategoryForm.findUnique({
      where: { id: formId },
    });
    if (!checkService) {
      throw new BadRequest("Service form does not exist");
    }

    const categoryForm = await prisma.serviceCategorySubForm.create({
      data: serviceCategoryPayload,
    });
    if (!categoryForm) {
      throw new BadRequest(
        "Error occured while creating this service category sub form"
      );
    }

    logger.info({
      message: `service category sub form created successfully`,
    });
    const response: ServiceCategorySubFormResponse = {
      message: "Service category sub form created successfully",
      data: categoryForm,
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

//get all service category service
const getAllServiceCategorySubForm = async (
  formId: string
): Promise<ServiceCategorySubFormResponse> => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const category = await prisma.serviceCategorySubForm.findMany({
      where: {
        formId: formId,
      },
    });
    if (!category) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ServiceCategorySubFormResponse = {
      message: "Service category sub form fetched successfully",
      data: category,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

const getServiceCategorySubForm = async (
  id: string
): Promise<ServiceCategorySubFormResponse> => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const category = await prisma.serviceCategorySubForm.findUnique({
      where: {
        id: id,
      },
    });
    if (!category) {
      throw new BadRequest("Service category sub form not found!.");
    }
    const response: ServiceCategorySubFormResponse = {
      message: "Service category sub form fetched successfully",
      data: category,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

//update a service category form service
const updateServiceCategorySubForm = async (
  serviceCategorySubFormPayload: UpdateServiceCategorySubFormPayload,
  id: string
): Promise<ServiceCategorySubFormResponse> => {
  // take both id and service category payload from the service category controller
  //  check if the service category exists
  //  update the service category
  //  return the service category to the service category controller

  try {
    const category = await prisma.serviceCategorySubForm.findUnique({
      where: {
        id: id,
      },
    });
    if (!category) {
      throw new BadRequest("Service category sub form not found!.");
    }

    const updateCategory = await prisma.serviceCategorySubForm.update({
      where: {
        id: id,
      },
      data: serviceCategorySubFormPayload,
    });

    if (!updateCategory) {
      throw new BadRequest(
        "Error occured while updating service category sub form!."
      );
    }

    return {
      message: "Service category sub form updated successfully",
      data: updateCategory,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

const removeServiceCategorySubForm = async (id: string) => {
  //take id from the service category controller
  //check if the service category exists
  //remove the service category from the record
  //return response to the service category controller

  try {
    const deleteCategory = await prisma.serviceCategorySubForm.delete({
      where: {
        id: id,
      },
    });
    if (!deleteCategory) {
      throw new BadRequest("Service category sub form not found!.");
    }

    return {
      message: "Service category sub form deleted successfully",
      statusCode: 200,
    };
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
  getServiceCategoryForm,
  getAllServiceCategoryForm,
  updateServiceCategoryForm,
  removeServiceCategoryForm,
  saveServiceCategorySubForm,
  getServiceCategorySubForm,
  getAllServiceCategorySubForm,
  updateServiceCategorySubForm,
  removeServiceCategorySubForm,
};
