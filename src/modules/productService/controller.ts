import { Request, Response, NextFunction } from "express";
import {
  getAllProductService,
  getProductService,
  getProductServiceByServiceCategory,
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
} from "./service";
import { ServiceSubFormPayload, UpdateServiceSubFormPayload } from "./entities";

// create a new product service
const ProductServiceCreator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the validated payload from the the request body
    // get the service Category id from req.params
    // send the validated payload to saveProductService service
    // return response to the client
    const serviceCategoryId = req.params.serviceCategoryId;
    const productServicePayload = req.body;
    const values = {
      name: productServicePayload.name.toLowerCase(),
      description: productServicePayload.description,
      country: productServicePayload.country,
      currency: productServicePayload.currency,
      amount: productServicePayload.price,
      timeline: productServicePayload.timeline,
      serviceCategoryId: serviceCategoryId,
    };

    const service = await saveProductService(values, serviceCategoryId);
    return res.status(service.statusCode).json(service);
  } catch (error) {
    next(error);
  }
};

// get all product service
const ProductServicesFetcher = async (
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

// get a product service with id
const ProductServiceFetcher = async (
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

//get a product service by service category id
const ProductServiceByCategoryFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // pass the service category id to the service
    // return product service to client

    const serviceCategoryId = req.params.serviceCategoryId;
    const service = await getProductServiceByServiceCategory(serviceCategoryId);

    return res.status(service.statusCode).json(service);
  } catch (error) {
    next(error);
  }
};

//update an existing product service
const ProductServiceModifier = async (
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
      serviceCategoryId: productServicePayload.serviceCategoryId,
    };

    const updateservice = await updateProductService(id, values);
    return res.status(updateservice.statusCode).json(updateservice);
  } catch (error) {
    next(error);
  }
};

// delete an exisiting product service
const ProductServiceRemover = async (
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

    return res.status(deleteService.statusCode).json(deleteService.message);
  } catch (error) {
    next(error);
  }
};

// create a new service form
const ServiceFormCreator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the validated payload from the the request body
    // get the service id from req.params
    // send the validated payload to saveServiceForm service
    // return response to the client
    const serviceId = req.params.serviceId;
    const serviceFormPayload = req.body;
    const values = {
      title: serviceFormPayload.question,
      type: serviceFormPayload.type,
      description: serviceFormPayload.description,
      compulsory: serviceFormPayload.compulsory,
      serviceId: serviceId as string,
    };

    const service = await saveServiceForm(values, serviceId);
    return res.status(service.statusCode).json(service);
  } catch (error) {
    console.log("err", error);
    next(error);
  }
};

// get all service form
const ServiceFormsFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const serviceId = req.params.serviceId;
    const serviceForm = await getAllServiceForm(serviceId);
    return res.status(serviceForm.statusCode).json(serviceForm);
  } catch (error) {
    next(error);
  }
};

// get a service form with id
const ServiceFormFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // check if there is id
    // pass the id to the service
    // return service form  to client

    const id: string = req.params.id;
    const service = await getServiceForm(id);

    return res.status(service.statusCode).json(service);
  } catch (error) {
    next(error);
  }
};

//get a service form by service id
const ServiceFormByServiceFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // pass the service id to the service
    // return the service form to client

    const serviceId = req.params.serviceId;
    const service = await getServiceFormByService(serviceId);

    return res.status(service.statusCode).json(service);
  } catch (error) {
    next(error);
  }
};

// update an existing service form
const ServiceFormModifier = async (
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
      question: serviceFormPayload.question,
      type: serviceFormPayload.type,
      compulsory: serviceFormPayload.compulsory,
      description: serviceFormPayload.description,
    };
    const subForm = {
      subForm: serviceFormPayload.subForm,
      form: serviceFormPayload.form,
    };

    const service = await updateServiceForm(id, values, subForm);
    return res.status(service.statusCode).json(service);
  } catch (error) {
    next(error);
  }
};

// delete an exisiting service form
const ServiceFormRemover = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //check if there is id
    // send the id to the delete service
    //return response to the client

    const id: string = req.params.id;
    const deleteService = await removeServiceForm(id);

    return res.status(deleteService.statusCode).json(deleteService.message);
  } catch (error) {
    next(error);
  }
};

const ServiceSubFormCreator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the validated payload from the the request body
    // get the service category id from the the request params
    // send the validated payload and the category id to saveServiceCategoryForm service
    // return response to the client

    const serviceFormId = req.params.serviceFormId;
    const serviceCategoryPayload = req.body;

    const values: ServiceSubFormPayload = {
      question: serviceCategoryPayload?.question,
      type: serviceCategoryPayload?.type,
      options: serviceCategoryPayload?.options,
      compulsory: serviceCategoryPayload?.compulsory,
      fileName: serviceCategoryPayload?.fileName,
      fileDescription: serviceCategoryPayload.fileDescription,
      fileLink: serviceCategoryPayload?.fileLink,
      fileType: serviceCategoryPayload?.fileType,
      serviceFormId: serviceFormId,
    };
    const service = await saveServiceSubForm(values, serviceFormId);

    return res.status(service.statusCode).json(service);
  } catch (error) {
    next(error);
  }
};

//get all service category forms
const ServiceSubFormFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the service category list
    // return response to the client
    const serviceFormId = req.params.serviceFormId;
    const categories = await getAllServiceSubForm(serviceFormId);

    return res.status(categories.statusCode).json(categories);
  } catch (error) {
    next(error);
  }
};

// create a new service category
const ServiceSubFormModifier = async (
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
    const serviceCategoryPayload: UpdateServiceSubFormPayload = req.body;
    const values = {
      question: serviceCategoryPayload?.question,
      type: serviceCategoryPayload?.type,
      options: serviceCategoryPayload?.options,
      compulsory: serviceCategoryPayload?.compulsory,
      fileName: serviceCategoryPayload?.fileName,
      fileDescription: serviceCategoryPayload.fileDescription,
      fileLink: serviceCategoryPayload?.fileLink,
      fileType: serviceCategoryPayload?.fileType,
    };
    const category = await updateServiceSubForm(values, subFormId);

    return res.status(category.statusCode).json(category);
  } catch (error) {
    next(error);
  }
};

//get a service category form with id
const ServiceASubFormFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // check if there is id
    // pass the id to the service
    // return service category form to client

    const id: string = req.params.id;
    const category = await getServiceSubForm(id);

    return res.status(category.statusCode).json(category);
  } catch (error) {
    next(error);
  }
};

const ServiceSubFormRemover = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //check if there is id
    // send the id to the delete service
    //return response to the client

    const id: string = req.params.id;
    const deleteCategory = await removeServiceSubForm(id);

    return res.status(deleteCategory.statusCode).json(deleteCategory.message);
  } catch (error) {
    next(error);
  }
};
export {
  ProductServiceCreator,
  ProductServiceByCategoryFetcher,
  ProductServiceFetcher,
  ProductServiceModifier,
  ProductServiceRemover,
  ProductServicesFetcher,
  ServiceFormCreator,
  ServiceFormByServiceFetcher,
  ServiceFormFetcher,
  ServiceFormModifier,
  ServiceFormRemover,
  ServiceFormsFetcher,
  ServiceSubFormCreator,
  ServiceSubFormFetcher,
  ServiceASubFormFetcher,
  ServiceSubFormModifier,
  ServiceSubFormRemover,
};
