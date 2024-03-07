import {
  Dependant,
  ServiceFormPayload,
  ServiceFormResponse,
  ServicePayload,
  ServiceResponse,
  ServiceSubFormData,
  ServiceSubFormPayload,
  ServiceSubFormResponse,
  UpdateServiceFormPayload,
  UpdateServiceSubFormPayload,
} from "./entities";

import { PrismaClient } from "../../../prisma/generated/main";
import logger from "../../config/logger";
const prisma = new PrismaClient();
import { BadRequest, NotFound } from "../../utils/requestErrors";

//create service category service
const saveService = async (
  servicePayload: ServicePayload
): Promise<ServiceResponse> => {
  //   //add the new service category to the table

  try {
    const checkService = await prisma.service.findUnique({
      where: { name: servicePayload.name },
    });
    if (checkService) {
      throw new BadRequest("Service with this name already exists");
    }

    const category = await prisma.service.create({
      data: servicePayload,
    });
    if (!category) {
      throw new BadRequest("Error occured while creating this Service");
    }

    logger.info({
      message: `${servicePayload.name} Service created successfully`,
    });
    const response: ServiceResponse = {
      message: "Service created successfully",
      data: category,
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

//get all service category service
const getAllService = async (): Promise<ServiceResponse> => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const category = await prisma.service.findMany({
      where: {
        isDeprecated: false,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    if (!category) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ServiceResponse = {
      message: "Service fetched successfully",
      data: category,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

//get a service category service
const getService = async (id: string): Promise<ServiceResponse> => {
  //   //check if the service category exists
  //   //return the service category to the service category controller

  try {
    const category = await prisma.service.findUnique({
      where: {
        id: id,
      },
      include: {
        form: {
          include: {
            subForm: true,
          },
        },
        products: true,
      },
    });
    if (!category) {
      throw new BadRequest("Service not found!.");
    }
    const response: ServiceResponse = {
      message: "Service fetched successfully",
      data: category,
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

//update a service category service
const updateService = async (
  id: string,
  servicePayload: ServicePayload
): Promise<ServiceResponse> => {
  // take both id and service category payload from the service category controller
  //  check if the service category exists
  //  update the service category
  //  return the service category to the service category controller

  try {
    const category = await prisma.service.findUnique({
      where: {
        id: id,
      },
    });
    if (!category) {
      throw new BadRequest("Service not found!.");
    }

    const updateCategory = await prisma.service.update({
      where: {
        id: id,
      },
      data: servicePayload,
    });

    if (!updateCategory) {
      throw new BadRequest("Error occured while updating Service!.");
    }

    return {
      message: "Service updated successfully",
      data: updateCategory,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//remove a service category service
const removeService = async (id: string) => {
  //take id from the service category controller
  //check if the service category exists
  //remove the service category from the record
  //return response to the service category controller

  try {
    const deleteCategory = await prisma.service.update({
      where: {
        id: id,
      },
      data: {
        isDeprecated: true,
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
const saveServiceForm = async (
  servicePayload: ServiceFormPayload,
  serviceId: string
): Promise<ServiceFormResponse> => {
  //   //add the new service category to the table

  try {
    const checkService = await prisma.service.findUnique({
      where: { id: serviceId },
    });
    if (!checkService) {
      throw new BadRequest("Service does not exist");
    }

    const checkServiceForm = await prisma.serviceForm.findFirst({
      where: {
        title: servicePayload.title,
        isDeprecated: false,
        serviceId: serviceId,
      },
    });
    if (checkServiceForm) {
      throw new BadRequest("Service form with this title already exists");
    }

    const checkServiceDeletedForm = await prisma.serviceForm.findFirst({
      where: {
        title: servicePayload.title,
        isDeprecated: true,
        serviceId: serviceId,
      },
    });
    if (checkServiceDeletedForm) {
      throw new BadRequest(
        "Service form with this title already exists, please restore from trash"
      );
    }

    const categoryForm = await prisma.serviceForm.create({
      data: servicePayload,
    });
    if (!categoryForm) {
      throw new BadRequest("Error occured while creating this service form");
    }

    logger.info({
      message: `Service form created successfully`,
    });
    const response: ServiceFormResponse = {
      message: "Service form created successfully",
      data: categoryForm,
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

//get all service category service
const getAllServiceForm = async (
  serviceId: string
): Promise<ServiceFormResponse> => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const serviceForm = await prisma.serviceForm.findMany({
      where: {
        serviceId: serviceId,
        isDeprecated: false,
      },
      orderBy: {
        createdAt: "asc",
      },
      include: {
        subForm: {
          where: {
            isDeprecated: false,
          },
        },
      },
    });
    if (!serviceForm) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }

    const modifiedData = serviceForm.map((item) => ({
      ...item,
      subForm: item.subForm.map((subForm) => ({
        id: subForm?.id,
        question: subForm?.question,
        type: subForm?.type,
        options: subForm?.options,
        formId: subForm?.formId,
        compulsory: subForm?.compulsory,
        fileName: subForm?.fileName,
        fileLink: subForm?.fileLink,
        fileType: subForm?.fileType,
        fileSize: subForm?.fileSize,
        allowOther: subForm?.allowOther,
        documentType: subForm?.documentType,
        dependsOn: {
          field: subForm?.dependentField,
          options: subForm?.dependentOptions,
        },
        createdAt: subForm?.createdAt,
        updatedAt: subForm?.updatedAt,
        isDeprecated: subForm?.isDeprecated,
      })),
    }));

    const response: ServiceFormResponse = {
      message: "Service forms fetched successfully",
      data: modifiedData,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

const getServiceForm = async (id: string): Promise<ServiceFormResponse> => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const serviceForm = await prisma.serviceForm.findUnique({
      where: {
        id: id,
      },
      include: {
        subForm: {
          where: {
            isDeprecated: false,
          },
        },
      },
    });

    if (!serviceForm) {
      throw new BadRequest("Service form not found!.");
    }

    const modifiedData = {
      ...serviceForm,
      subForm: serviceForm.subForm.map((subForm) => ({
        id: subForm?.id,
        question: subForm?.question,
        type: subForm?.type,
        options: subForm?.options,
        formId: subForm?.formId,
        compulsory: subForm?.compulsory,
        fileName: subForm?.fileName,
        fileLink: subForm?.fileLink,
        fileType: subForm?.fileType,
        fileSize: subForm?.fileSize,
        allowOther: subForm?.allowOther,
        documentType: subForm?.documentType,
        dependsOn: {
          field: subForm?.dependentField,
          options: subForm?.dependentOptions,
        },
        createdAt: subForm?.createdAt,
        updatedAt: subForm?.updatedAt,
        isDeprecated: subForm?.isDeprecated,
      })),
    };

    const response: ServiceFormResponse = {
      message: "Service form fetched successfully",
      data: modifiedData,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

//update a service category form service
const updateServiceForm = async (
  servicePayload: UpdateServiceFormPayload,
  id: string
): Promise<ServiceFormResponse> => {
  // take both id and service category payload from the service category controller
  //  check if the service category exists
  //  update the service category
  //  return the service category to the service category controller

  try {
    const category = await prisma.serviceForm.findUnique({
      where: {
        id: id,
      },
    });
    if (!category) {
      throw new BadRequest("Service Form not found!.");
    }
    const updateCategory = await prisma.serviceForm.update({
      where: {
        id: id,
      },
      data: servicePayload,
    });

    if (!updateCategory) {
      throw new BadRequest("Error occured while updating Service!.");
    }

    return {
      message: "Service form updated successfully",
      data: updateCategory,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

const removeServiceForm = async (id: string) => {
  //take id from the service category controller
  //check if the service category exists
  //remove the service category from the record
  //return response to the service category controller

  try {
    const deleteCategory = await prisma.serviceForm.update({
      where: {
        id: id,
      },
      data: {
        isDeprecated: true,
      },
    });
    if (!deleteCategory) {
      throw new BadRequest("Service form not found!.");
    }

    return {
      message: "Service form deleted successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//create service category service
const saveServiceSubForm = async (
  servicePayload: ServiceSubFormPayload,
  formId: string
): Promise<ServiceSubFormResponse> => {
  //   //add the new service category to the table

  try {
    const checkService = await prisma.serviceForm.findUnique({
      where: { id: formId },
    });
    if (!checkService) {
      throw new BadRequest("Service form does not exist");
    }

    const checkServiceForm = await prisma.serviceSubForm.findFirst({
      where: {
        question: servicePayload.question,
        formId: formId,
      },
    });
    if (checkServiceForm) {
      throw new BadRequest("Service form with this title already exists");
    }

    const subForm = await prisma.serviceSubForm.create({
      data: servicePayload,
    });
    if (!subForm) {
      throw new BadRequest(
        "Error occured while creating this service sub form"
      );
    }

    logger.info({
      message: `service sub form created successfully`,
    });

    const response: ServiceSubFormResponse = {
      message: "Service sub form created successfully",
      data: {
        id: subForm?.id,
        question: subForm?.question,
        type: subForm?.type,
        options: subForm?.options,
        formId: subForm?.formId,
        compulsory: subForm?.compulsory,
        fileName: subForm?.fileName,
        fileLink: subForm?.fileLink,
        fileType: subForm?.fileType,
        fileSize: subForm?.fileSize,
        allowOther: subForm?.allowOther,
        documentType: subForm?.documentType,
        dependsOn: {
          field: subForm?.dependentField,
          options: subForm?.dependentOptions,
        },
        createdAt: subForm?.createdAt,
        updatedAt: subForm?.updatedAt,
        isDeprecated: subForm?.isDeprecated,
      },
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

//create multiple service subforms
const saveMultipleServiceSubForm = async (
  servicePayload: ServiceSubFormPayload[],
  formId: string
): Promise<ServiceSubFormResponse> => {
  //   //add the new service category to the table

  try {
    const checkService = await prisma.serviceForm.findUnique({
      where: { id: formId },
    });
    if (!checkService) {
      throw new BadRequest("Service form does not exist");
    }

    const subForm = await prisma.serviceSubForm.createMany({
      data: servicePayload,
      skipDuplicates: true,
    });
    if (!subForm) {
      throw new BadRequest(
        "Error occured while creating this service sub forms"
      );
    }

    logger.info({
      message: `service sub forms created successfully`,
    });

    const response: ServiceSubFormResponse = {
      message: "Service sub forms created successfully",
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

//get all service category service
const getAllServiceSubForm = async (formId: string) => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const subForm = await prisma.serviceSubForm.findMany({
      where: {
        formId: formId,
        isDeprecated: false,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    if (!subForm) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }

    const mappedSubForm = subForm.map((data) => ({
      id: data.id,
      question: data.question,
      type: data.type,
      options: data.options,
      formId: data.formId,
      compulsory: data.compulsory,
      fileName: data.fileName,
      fileLink: data.fileLink,
      fileType: data.fileType,
      fileSize: data.fileSize,
      allowOther: data.allowOther,
      documentType: data.documentType,
      dependsOn: {
        dependentField: data.dependentField,
        dependentOptions: data.dependentOptions,
      },
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      isDeprecated: data.isDeprecated,
    }));

    const response = {
      message: "Service sub forms fetched successfully",
      data: mappedSubForm,
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
    const subForm = await prisma.serviceSubForm.findUnique({
      where: {
        id: id,
      },
    });
    if (!subForm) {
      throw new BadRequest("Service sub form not found!.");
    }
    const response: ServiceSubFormResponse = {
      message: "Service sub form fetched successfully",
      data: {
        id: subForm?.id,
        question: subForm?.question,
        type: subForm?.type,
        options: subForm?.options,
        formId: subForm?.formId,
        compulsory: subForm?.compulsory,
        fileName: subForm?.fileName,
        fileLink: subForm?.fileLink,
        fileType: subForm?.fileType,
        fileSize: subForm?.fileSize,
        allowOther: subForm?.allowOther,
        documentType: subForm?.documentType,
        dependsOn: {
          field: subForm?.dependentField,
          options: subForm?.dependentOptions,
        },
        createdAt: subForm?.createdAt,
        updatedAt: subForm?.updatedAt,
        isDeprecated: subForm?.isDeprecated,
      },
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

//update a service category form service
const updateServiceSubForm = async (
  serviceSubFormPayload: UpdateServiceSubFormPayload,
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

    const subForm = await prisma.serviceSubForm.update({
      where: {
        id: id,
      },
      data: serviceSubFormPayload,
    });

    if (!subForm) {
      throw new BadRequest("Error occured while updating service sub form!.");
    }

    return {
      message: "Service sub form updated successfully",
      data: {
        id: subForm?.id,
        question: subForm?.question,
        type: subForm?.type,
        options: subForm?.options,
        formId: subForm?.formId,
        compulsory: subForm?.compulsory,
        fileName: subForm?.fileName,
        fileLink: subForm?.fileLink,
        fileType: subForm?.fileType,
        fileSize: subForm?.fileSize,
        allowOther: subForm?.allowOther,
        documentType: subForm?.documentType,
        dependsOn: {
          field: subForm?.dependentField,
          options: subForm?.dependentOptions,
        },
        createdAt: subForm?.createdAt,
        updatedAt: subForm?.updatedAt,
        isDeprecated: subForm?.isDeprecated,
      },
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
    return {
      message: "Service sub form deleted successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

const trashedService = async (): Promise<ServiceResponse> => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const category = await prisma.service.findMany({
      where: {
        isDeprecated: true,
      },
    });
    if (!category) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ServiceResponse = {
      message: "Trashed service fetched successfully",
      data: category,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

const removeServiceP = async (id: string) => {
  //take id from the service category controller
  //check if the service category exists
  //remove the service category from the record
  //return response to the service category controller

  try {
    const deleteCategory = await prisma.service.delete({
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

const trashedServiceForm = async (): Promise<ServiceFormResponse> => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const category = await prisma.serviceForm.findMany({
      where: {
        isDeprecated: true,
      },
    });
    if (!category) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ServiceFormResponse = {
      message: "Trashed service forms fetched successfully",
      data: category,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

export {
  saveService,
  getAllService,
  getService,
  updateService,
  removeService,
  saveServiceForm,
  getServiceForm,
  getAllServiceForm,
  updateServiceForm,
  removeServiceForm,
  saveServiceSubForm,
  getServiceSubForm,
  getAllServiceSubForm,
  updateServiceSubForm,
  removeServiceSubForm,
  trashedService,
  trashedServiceForm,
  saveMultipleServiceSubForm,
};
