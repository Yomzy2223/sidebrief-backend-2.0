import { Request, Response, NextFunction } from "express";
import {
  getAllProductService,
  getProductService,
  getProductByService,
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
} from "./service";
import {
  Dependant,
  MProductSubFormPayload,
  ProductSubFormPayload,
  UpdateProductSubFormPayload,
} from "./entities";
import { saveMultipleServiceSubForm } from "../serviceCategory/service";

// create a new product service
const ProductCreator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the validated payload from the the request body
    // get the service  id from req.params
    // send the validated payload to saveProductService service
    // return response to the client
    const serviceId = req.params.serviceId;
    const productServicePayload = req.body;
    const values = {
      name: productServicePayload.name.toLowerCase(),
      description: productServicePayload.description,
      country: productServicePayload.country,
      currency: productServicePayload.currency,
      amount: productServicePayload.amount,
      feature: productServicePayload.feature,
      timeline: productServicePayload.timeline,
      canAlsoDo: productServicePayload?.canAlsoDo,
      serviceId: serviceId,
    };

    const service = await saveProductService(values, serviceId);
    return res.status(service.statusCode).json(service);
  } catch (error) {
    next(error);
  }
};

// get all product
const ProductsFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const service = await getAllProductService();
    return res.status(service.statusCode).json(service);
  } catch (error) {
    next(error);
  }
};

// get a product  with id
const ProductFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // check if there is id
    // pass the id to the service
    // return product service  to client

    const id: string = req.params.id;
    const service = await getProductService(id);

    return res.status(service.statusCode).json(service);
  } catch (error) {
    next(error);
  }
};

//get a product  by service  id
const ProductByServiceFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // pass the service  id to the service
    // return product to client

    const serviceId = req.params.serviceId;
    const service = await getProductByService(serviceId);

    return res.status(service.statusCode).json(service);
  } catch (error) {
    next(error);
  }
};

//update an existing product service
const ProductModifier = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id: string = req.params.id;
    const productServicePayload = req.body;
    const values = {
      name: productServicePayload.name.toLowerCase(),
      currency: productServicePayload.currency,
      description: productServicePayload.description,
      country: productServicePayload.country,
      amount: productServicePayload.price,
      timeline: productServicePayload.timeline,
      feature: productServicePayload.feature,
      serviceId: productServicePayload.serviceId,
      canAlsoDo: productServicePayload?.canAlsoDo,
    };

    const updateservice = await updateProductService(id, values);
    return res.status(updateservice.statusCode).json(updateservice);
  } catch (error) {
    next(error);
  }
};

// delete an exisiting product service
const ProductRemover = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //check if there is id
    // send the id to the delete service
    //return response to the client

    const id: string = req.params.id;
    const deleteService = await removeProductService(id);

    return res
      .status(deleteService.statusCode)
      .json({ message: deleteService.message });
  } catch (error) {
    next(error);
  }
};

// create a new product form
const ProductFormCreator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the validated payload from the the request body
    // get the service id from req.params
    // send the validated payload to saveServiceForm service
    // return response to the client
    const productId = req.params.productId;
    const serviceFormPayload = req.body;
    const values = {
      title: serviceFormPayload.title,
      type: serviceFormPayload.type,
      description: serviceFormPayload.description,
      compulsory: serviceFormPayload.compulsory,
      productId: productId as string,
    };

    const service = await saveProductForm(values, productId);
    return res.status(service.statusCode).json(service);
  } catch (error) {
    next(error);
  }
};

// get all service form
const ProductFormsFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const serviceForm = await getAllProductForm();
    return res.status(serviceForm.statusCode).json(serviceForm);
  } catch (error) {
    next(error);
  }
};

// get a product form with id
const ProductFormFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // check if there is id
    // pass the id to the service
    // return service form  to client

    const id: string = req.params.id;
    const service = await getProductForm(id);

    return res.status(service.statusCode).json(service);
  } catch (error) {
    next(error);
  }
};

//get a product form by product id
const ProductFormByProductFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // pass the product id to the service
    // return the product form to client

    const productId = req.params.productId;
    const service = await getProductFormByProduct(productId);

    return res.status(service.statusCode).json(service);
  } catch (error) {
    next(error);
  }
};

// update an existing product form
const ProductFormModifier = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the validated payload from the the request body
    // get the id from req.params
    // send the validated payload to saveServiceForm service
    // return response to the client
    const id: string = req.params.id;
    const serviceFormPayload = req.body;
    const values = {
      title: serviceFormPayload.title,
      type: serviceFormPayload.type,
      description: serviceFormPayload.description,
      compulsory: serviceFormPayload.compulsory,
    };

    const service = await updateProductForm(id, values);
    return res.status(service.statusCode).json(service);
  } catch (error) {
    next(error);
  }
};

// delete an exisiting product form
const ProductFormRemover = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //check if there is id
    // send the id to the delete service
    //return response to the client

    const id: string = req.params.id;
    const deleteService = await removeProductForm(id);

    return res
      .status(deleteService.statusCode)
      .json({ message: deleteService.message });
  } catch (error) {
    next(error);
  }
};

const ProductSubFormCreator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the validated payload from the the request body
    // get the service category id from the the request params
    // send the validated payload and the category id to saveServiceCategoryForm service
    // return response to the client

    const formId = req.params.formId;
    const serviceCategoryPayload = req.body;

    const values: ProductSubFormPayload = {
      question: serviceCategoryPayload?.question,
      type: serviceCategoryPayload?.type,
      options: serviceCategoryPayload?.options,
      compulsory: serviceCategoryPayload?.compulsory,
      fileName: serviceCategoryPayload?.fileName,
      allowOther: serviceCategoryPayload?.allowOther,
      fileLink: serviceCategoryPayload?.fileLink,
      fileType: serviceCategoryPayload?.fileType,
      fileSize: serviceCategoryPayload?.fileSize,
      dependentField: serviceCategoryPayload?.dependsOn?.field,
      dependentOptions: serviceCategoryPayload?.dependsOn?.options,
      formId: formId,
    };

    const service = await saveProductSubForm(values, formId);

    return res.status(service.statusCode).json(service);
  } catch (error) {
    next(error);
  }
};

const ProductMultipleSubFormCreator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the validated payload from the the request body
    // get the product id from the the request params
    // send the validated payload and the form id to product service
    // return response to the client

    const formId = req.params.formId;
    const subformPayload: ProductSubFormPayload[] = req.body.subform;

    const requiredData = subformPayload?.map(
      (data: MProductSubFormPayload) => ({
        question: data?.question,
        type: data?.type,
        options: data?.options,
        compulsory: data?.compulsory,
        fileName: data?.fileName,
        fileLink: data?.fileLink,
        fileType: data?.fileType,
        fileSize: data?.fileSize,
        allowOther: data?.allowOther,
        dependentField: data?.dependsOn?.field,
        dependentOptions: data?.dependsOn?.options,
        formId: formId,
      })
    );

    const category = await saveMultipleServiceSubForm(requiredData, formId);

    return res.status(category.statusCode).json(category);
  } catch (error) {
    next(error);
  }
};

//get all product subforms
const ProductSubFormsFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the service category list
    // return response to the client
    const formId = req.params.formId;
    const categories = await getAllProductSubForm(formId);

    return res.status(categories.statusCode).json(categories);
  } catch (error) {
    next(error);
  }
};

// update existing product sub form
const ProductSubFormModifier = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the validated payload from the the request body
    // get the service category id from the the request params
    // send the validated payload and the category id to saveServiceCategoryForm service
    // return response to the client

    const subFormId = req.params.id;
    const serviceCategoryPayload = req.body;
    const values: UpdateProductSubFormPayload = {
      question: serviceCategoryPayload?.question,
      type: serviceCategoryPayload?.type,
      options: serviceCategoryPayload?.options,
      compulsory: serviceCategoryPayload?.compulsory,
      fileName: serviceCategoryPayload?.fileName,
      fileLink: serviceCategoryPayload?.fileLink,
      fileSize: serviceCategoryPayload?.fileSize,
      fileType: serviceCategoryPayload?.fileType,
      allowOther: serviceCategoryPayload?.allowOther,
      dependentField: serviceCategoryPayload?.dependsOn?.field,
      dependentOptions: serviceCategoryPayload?.dependsOn?.options,
    };

    const category = await updateProductSubForm(values, subFormId);

    return res.status(category.statusCode).json(category);
  } catch (error) {
    next(error);
  }
};

//get a product sub form with id
const ProductSubFormFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // check if there is id
    // pass the id to the service
    // return service category form to client

    const id: string = req.params.id;
    const category = await getProductSubForm(id);

    return res.status(category.statusCode).json(category);
  } catch (error) {
    next(error);
  }
};

const ProductSubFormRemover = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //check if there is id
    // send the id to the delete service
    //return response to the client

    const id: string = req.params.id;
    const deleteCategory = await removeProductSubForm(id);

    return res
      .status(deleteCategory.statusCode)
      .json({ message: deleteCategory.message });
  } catch (error) {
    next(error);
  }
};

//get all transhed services
const TrashedProductFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the service category list
    // return response to the client

    const categories = await trashedProduct();

    return res.status(categories.statusCode).json(categories);
  } catch (error) {
    next(error);
  }
};

//get all transhed services form
const TrashedProductFormFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the service category list
    // return response to the client
    const categories = await trashedProductForm();

    return res.status(categories.statusCode).json(categories);
  } catch (error) {
    next(error);
  }
};

export {
  ProductCreator,
  ProductByServiceFetcher,
  ProductFetcher,
  ProductModifier,
  ProductRemover,
  ProductsFetcher,
  ProductFormCreator,
  ProductFormByProductFetcher,
  ProductFormFetcher,
  ProductFormModifier,
  ProductFormRemover,
  ProductFormsFetcher,
  ProductSubFormCreator,
  ProductSubFormsFetcher,
  ProductSubFormFetcher,
  ProductSubFormModifier,
  ProductSubFormRemover,
  TrashedProductFetcher,
  TrashedProductFormFetcher,
  ProductMultipleSubFormCreator,
};
