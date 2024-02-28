import {
  FormData,
  ProductPayload,
  ProductResponse,
  ProductFormPayload,
  ProductFormResponse,
  ProductSubFormPayload,
  ProductSubFormResponse,
  SubFormPayload,
  UpdateProductFormPayload,
  UpdateProductSubFormPayload,
  Dependant,
} from "./entities";

import { PrismaClient } from "../../../prisma/generated/main";
import logger from "../../config/logger";
const prisma = new PrismaClient();
import { BadRequest, NotFound } from "../../utils/requestErrors";

// create a service for product service

const saveProductService = async (
  productPayload: ProductPayload,
  serviceId: string
): Promise<ProductResponse> => {
  // add new product  to the table
  try {
    const checkService = await prisma.service.findUnique({
      where: { id: serviceId },
    });
    if (!checkService) {
      throw new BadRequest("Service does not exist");
    }

    const service = await prisma.product.create({
      data: productPayload,
    });
    if (!service) {
      throw new BadRequest("Error occured while creating this product");
    }

    logger.info({
      message: `$ Product created successfully`,
    });

    const response: ProductResponse = {
      message: "Product created successfully",
      data: service,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

// get all product service

const getAllProductService = async (): Promise<ProductResponse> => {
  //  get the product service  list from the table
  //  return the product service list to the product service controller
  try {
    const service = await prisma.product.findMany({
      where: {
        isDeprecated: false,
        service: {
          isDeprecated: false,
        },
      },
    });
    if (!service) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ProductResponse = {
      message: "Products fetched successfully",
      data: service,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

// get product service by service category

const getProductByService = async (
  serviceId: string
): Promise<ProductResponse> => {
  // check if the product service for the service category exist
  // return the product service to the product service controller

  try {
    const service = await prisma.product.findMany({
      where: {
        serviceId: serviceId,
        isDeprecated: false,
        service: {
          isDeprecated: false,
        },
      },
    });

    if (!service) {
      throw new BadRequest("Product for this service not found!.");
    }

    const response: ProductResponse = {
      message: "Product fetched successfully",
      data: service,
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

// get a product service
const getProductService = async (id: string): Promise<ProductResponse> => {
  // check if the product  for the service  exist
  // return the product  to the product  controller

  try {
    const service = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    if (!service) {
      throw new BadRequest("Product not found!.");
    }

    const response: ProductResponse = {
      message: "Product fetched successfully",
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
  productServicePayload: ProductPayload
) => {
  // take both id and service payload from the product controller
  //  check if the product exists
  //  update the product s
  //  return the product to the product controller

  try {
    const checkService = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    if (!checkService) {
      throw new BadRequest("Product not found!");
    }

    const updateService = await prisma.product.update({
      where: {
        id: id,
      },
      data: productServicePayload,
    });

    if (!updateService) {
      throw new BadRequest("Error occurred while updating Product!.");
    }

    return {
      message: "Product updated successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

// remove product service

const removeProductService = async (id: string) => {
  //take id from the product controller
  //check if the product exists
  //remove the product from the record
  //return response to the product controller

  try {
    const checkService = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    if (!checkService) {
      throw new BadRequest("Product not found!");
    }

    const deleteService = await prisma.product.update({
      where: {
        id: id,
      },
      data: {
        isDeprecated: true,
      },
    });

    return {
      message: "Product deleted successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

// create a product form for product

const saveProductForm = async (
  productFormPayload: ProductFormPayload,
  productId: string
): Promise<ProductFormResponse> => {
  // add new product form to the table
  try {
    const checkService = await prisma.product.findUnique({
      where: { id: productId },
    });
    if (!checkService) {
      throw new BadRequest("Product does not exist");
    }

    const checkServiceForm = await prisma.productForm.findFirst({
      where: {
        title: productFormPayload.title,
        isDeprecated: false,
        productId: productId,
      },
    });
    if (checkServiceForm) {
      throw new BadRequest("Product form with this title already exists.");
    }

    const checkServiceDeletedForm = await prisma.productForm.findFirst({
      where: {
        title: productFormPayload.title,
        isDeprecated: true,
        productId: productId,
      },
    });
    if (checkServiceDeletedForm) {
      throw new BadRequest(
        "Product form with this title already exists, please restrore from trash"
      );
    }

    const serviceForm = await prisma.productForm.create({
      data: productFormPayload,
    });
    if (!serviceForm) {
      throw new BadRequest("Error occured while creating this product form");
    }

    logger.info({
      message: `Product form created successfully`,
    });

    const response: ProductFormResponse = {
      message: "Product form created successfully",
      data: serviceForm,
      statusCode: 201,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

// get all product form

const getAllProductForm = async (): Promise<ProductFormResponse> => {
  //  get the product form  list from the table
  //  return the product form list to the product form controller
  try {
    const service = await prisma.productForm.findMany({
      where: {
        isDeprecated: false,
        product: {
          isDeprecated: false,
        },
      },
      orderBy: {
        createdAt: "asc",
      },
      include: {
        productSubForm: {
          where: {
            isDeprecated: false,
          },
        },
      },
    });
    if (!service) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ProductFormResponse = {
      message: "Product forms fetched successfully",
      data: service,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

// get a product form
const getProductForm = async (id: string): Promise<ProductFormResponse> => {
  // check if the product form for the product s exist
  // return the product form to the product form controller

  try {
    const serviceForm = await prisma.productForm.findUnique({
      where: {
        id: id,
      },
    });

    if (!serviceForm) {
      throw new BadRequest("Product form not found!.");
    }

    const response: ProductFormResponse = {
      message: "Product form fetched successfully",
      data: serviceForm,
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

// get product form by product id

const getProductFormByProduct = async (
  productId: string
): Promise<ProductFormResponse> => {
  // check if the product form for the particular product exist
  // return the product form to the product controller

  try {
    const serviceForm = await prisma.productForm.findMany({
      where: {
        productId: productId,
        isDeprecated: false,
        product: {
          isDeprecated: false,
        },
      },
      orderBy: {
        createdAt: "asc",
      },
      include: {
        productSubForm: {
          where: {
            isDeprecated: false,
          },
        },
      },
    });

    if (!serviceForm) {
      throw new BadRequest("Product form not found!");
    }

    const response: ProductFormResponse = {
      message: "Product form fetched successfully",
      data: serviceForm,
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

// update product form
const updateProductForm = async (
  id: string,
  productFormPayload: UpdateProductFormPayload
) => {
  // take both id and service form payload from the product form category controller
  //  check if the product form exists
  //  update the product form
  //  return the product form to the product form controller

  try {
    const checkServiceForm = await prisma.productForm.findUnique({
      where: {
        id: id,
      },
    });

    if (!checkServiceForm) {
      throw new BadRequest("Product form not found!");
    }

    const updateServiceForm = await prisma.productForm.update({
      where: {
        id: id,
      },
      data: productFormPayload,
    });

    if (!updateServiceForm) {
      throw new BadRequest("Error occurred while updating Product form!.");
    }

    return {
      message: "Product form updated successfully",
      data: updateServiceForm,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

// remove product form

const removeProductForm = async (id: string) => {
  //take id from the product form controller
  //check if the product form exists
  //remove the product form from the record
  //return response to the product form controller

  try {
    const checkServiceForm = await prisma.productForm.findUnique({
      where: {
        id: id,
      },
    });

    if (!checkServiceForm) {
      throw new BadRequest("Product form not found!");
    }

    const deleteServiceForm = await prisma.productForm.update({
      where: {
        id: id,
      },
      data: {
        isDeprecated: true,
      },
    });

    return {
      message: "Product form deleted successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//create product sub form product
const saveProductSubForm = async (
  productCategoryPayload: ProductSubFormPayload,
  dependsOn: Dependant[],
  formId: string
): Promise<ProductSubFormResponse> => {
  //   //add the new service category to the table

  try {
    const checkService = await prisma.productForm.findUnique({
      where: { id: formId },
    });
    if (!checkService) {
      throw new BadRequest("Product form does not exist");
    }

    const checkServiceForm = await prisma.productSubForm.findFirst({
      where: {
        question: productCategoryPayload.question,
        formId: formId,
      },
    });
    if (checkServiceForm) {
      throw new BadRequest(
        "Product sub form with this question already exists"
      );
    }

    const productSubForm = await prisma.productSubForm.create({
      data: productCategoryPayload,
    });
    if (!productSubForm) {
      throw new BadRequest(
        "Error occured while creating this Product sub form"
      );
    }
    const dependantValue = dependsOn?.map((data: Dependant) => ({
      field: data?.field,
      options: data?.options,
      productSubFormId: productSubForm.id,
    }));

    const subFormDependant = await prisma.subFormDependant.createMany({
      data: dependantValue,
      skipDuplicates: true,
    });
    if (!subFormDependant) {
      throw new BadRequest("Error occured while saving dependants");
    }
    logger.info({
      message: `Product sub form created successfully`,
    });

    const subForm = await prisma.productSubForm.findUnique({
      where: {
        id: productSubForm.id,
      },
      include: {
        dependant: true,
      },
    });

    if (!subForm) {
      throw new BadRequest("Error occured while getting Product Sub Form");
    }

    const response: ProductSubFormResponse = {
      message: "Product sub form created successfully",
      data: subForm,
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

//get all product sub form
const getAllProductSubForm = async (
  formId: string
): Promise<ProductSubFormResponse> => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const category = await prisma.productSubForm.findMany({
      where: {
        formId: formId,
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
    const response: ProductSubFormResponse = {
      message: "Product sub forms fetched successfully",
      data: category,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

const getProductSubForm = async (
  id: string
): Promise<ProductSubFormResponse> => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const category = await prisma.productSubForm.findUnique({
      where: {
        id: id,
      },
    });
    if (!category) {
      throw new BadRequest("Product sub form not found!.");
    }
    const response: ProductSubFormResponse = {
      message: "Product sub form fetched successfully",
      data: category,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

//update a Product sub form service
const updateProductSubForm = async (
  serviceCategorySubFormPayload: UpdateProductSubFormPayload,
  id: string
): Promise<ProductSubFormResponse> => {
  // take both id and product sub form payload from the product sub form controller
  //  check if the product sub form exists
  //  update the product sub form
  //  return the product sub form to the product sub form controller

  try {
    const category = await prisma.productSubForm.findUnique({
      where: {
        id: id,
      },
    });
    if (!category) {
      throw new BadRequest("Product sub form not found!.");
    }

    const updateCategory = await prisma.productSubForm.update({
      where: {
        id: id,
      },
      data: serviceCategorySubFormPayload,
    });

    if (!updateCategory) {
      throw new BadRequest("Error occured while updating product sub form!.");
    }

    return {
      message: "Product sub form updated successfully",
      data: updateCategory,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

const removeProductSubForm = async (id: string) => {
  //take id from the service category controller
  //check if the service category exists
  //remove the service category from the record
  //return response to the service category controller

  try {
    const deleteCategory = await prisma.productSubForm.delete({
      where: {
        id: id,
      },
    });

    return {
      message: "Product sub form deleted successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

const trashedProduct = async (): Promise<ProductResponse> => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const product = await prisma.product.findMany({
      where: {
        isDeprecated: true,
      },
    });
    if (!product) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ProductResponse = {
      message: "Trashed product fetched successfully",
      data: product,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

const trashedProductForm = async (): Promise<ProductFormResponse> => {
  //  get the service category list from the table
  //  return the service category list to the service category controller
  try {
    const product = await prisma.productForm.findMany({
      where: {
        isDeprecated: true,
      },
    });
    if (!product) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: ProductFormResponse = {
      message: "Trashed product fetched successfully",
      data: product,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

export {
  getAllProductService,
  getProductByService,
  getProductService,
  saveProductService,
  updateProductService,
  removeProductService,
  saveProductForm,
  getAllProductForm,
  getProductForm,
  getProductFormByProduct,
  removeProductForm,
  updateProductForm,
  saveProductSubForm,
  getProductSubForm,
  getAllProductSubForm,
  updateProductSubForm,
  removeProductSubForm,
  trashedProduct,
  trashedProductForm,
};
