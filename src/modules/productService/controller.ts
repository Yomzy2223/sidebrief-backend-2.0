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
} from "./service";

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
      type: productServicePayload.type,
      code: productServicePayload.code,
      description: productServicePayload.description,
      country: productServicePayload.country,
      price: productServicePayload.price,
      timeline: productServicePayload.timeline,
      feature: productServicePayload.feature,
      numberOfShares: productServicePayload.numberOfShares,
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
      type: productServicePayload.type,
      code: productServicePayload.code,
      description: productServicePayload.description,
      country: productServicePayload.country,
      price: productServicePayload.price,
      timeline: productServicePayload.timeline,
      feature: productServicePayload.feature,
      requiredDocuments: productServicePayload.requiredDocuments,
      numberOfShares: productServicePayload.numberOfShares,
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
      question: serviceFormPayload.question,
      type: serviceFormPayload.type,
      compulsory: serviceFormPayload.compulsory,
      options: serviceFormPayload.options,
      serviceId: serviceId as string,
      fileName: serviceFormPayload.file.name,
      fileDescription: serviceFormPayload.file.description,
      fileLink: serviceFormPayload.file.link,
      fileType: serviceFormPayload.file.type,
    };
    const subForm = {
      subForm: serviceFormPayload.subForm,
      form: serviceFormPayload.form,
    };
    const service = await saveServiceForm(values, serviceId, subForm);
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
    const serviceForm = await getAllServiceForm();
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
      options: serviceFormPayload.options,
      fileName: serviceFormPayload.file.name,
      fileDescription: serviceFormPayload.file.description,
      fileLink: serviceFormPayload.file.link,
      fileType: serviceFormPayload.file.type,
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
};
