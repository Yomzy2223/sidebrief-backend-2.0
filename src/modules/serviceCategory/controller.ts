import { Request, Response, NextFunction } from "express";
import {
  saveService,
  getAllService,
  getService,
  updateService,
  removeService,
  saveServiceForm,
  getAllServiceForm,
  updateServiceForm,
  getServiceForm,
  removeServiceForm,
  saveServiceSubForm,
  getServiceSubForm,
  getAllServiceSubForm,
  updateServiceSubForm,
  removeServiceSubForm,
  trashedService,
  trashedServiceForm,
} from "./service";
import {
  Dependant,
  ServiceFormPayload,
  ServiceSubFormPayload,
  UpdateServiceFormPayload,
  UpdateServiceSubFormPayload,
} from "./entities";

// create a new service category
const ServiceCreator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the validated payload from the the request body
    // send the validated payload to addService service
    // return response to the client

    const servicePayload = req.body;
    const values = {
      name: servicePayload.name.toLowerCase(),
      description: servicePayload.description,
    };
    const category = await saveService(values);

    return res.status(category.statusCode).json(category);
  } catch (error) {
    next(error);
  }
};

//get all services
const ServicesFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the service category list
    // return response to the client

    const categories = await getAllService();

    return res.status(categories.statusCode).json(categories);
  } catch (error) {
    next(error);
  }
};

//get a service  with id
const ServiceFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // check if there is id
    // pass the id to the service
    // return service category to client

    const id: string = req.params.id;
    const category = await getService(id);

    return res.status(category.statusCode).json(category);
  } catch (error) {
    next(error);
  }
};

//update a service
const ServiceModifier = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //get the payload
    // validate the payload
    // send the payload to the service
    // return response

    const id: string = req.params.id;
    const servicePayload = req.body;
    const values = {
      name: servicePayload.name,
      description: servicePayload.description,
    };
    const category = await updateService(id, values);

    return res
      .status(category.statusCode)
      .json({ message: category.message, data: category.data });
  } catch (error) {
    next(error);
  }
};

//delete a service category
const ServiceRemover = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //check if there is id
    // send the id to the delete service
    //return response to the client

    const id: string = req.params.id;
    const deleteCategory = await removeService(id);

    return res
      .status(deleteCategory.statusCode)
      .json({ message: deleteCategory.message });
  } catch (error) {
    next(error);
  }
};

// create a new service category
const ServiceFormCreator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the validated payload from the the request body
    // get the service category id from the the request params
    // send the validated payload and the category id to saveServiceForm service
    // return response to the client

    const serviceId = req.params.serviceId;
    const servicePayload = req.body;
    const values: ServiceFormPayload = {
      title: servicePayload.title,
      type: servicePayload.type,
      description: servicePayload.description,
      compulsory: servicePayload.compulsory,
      serviceId: serviceId,
    };
    const category = await saveServiceForm(values, serviceId);

    return res.status(category.statusCode).json(category);
  } catch (error) {
    next(error);
  }
};

//get all service category forms
const ServiceFormsFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the service category list
    // return response to the client
    const serviceId = req.params.serviceId;
    const categories = await getAllServiceForm(serviceId);

    return res.status(categories.statusCode).json(categories);
  } catch (error) {
    next(error);
  }
};

// create a new service category
const ServiceFormModifier = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the validated payload from the the request body
    // get the service category id from the the request params
    // send the validated payload and the category id to saveServiceForm service
    // return response to the client

    const serviceFormId = req.params.id;
    const servicePayload: UpdateServiceFormPayload = req.body;
    const values = {
      title: servicePayload.title,
      type: servicePayload.type,
      description: servicePayload.description,
      compulsory: servicePayload.compulsory,
    };
    const category = await updateServiceForm(values, serviceFormId);

    return res
      .status(category.statusCode)
      .json({ message: category.message, data: category.data });
  } catch (error) {
    next(error);
  }
};

//get a service category form with id
const ServiceFormFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // check if there is id
    // pass the id to the service
    // return service category form to client

    const id: string = req.params.id;
    const category = await getServiceForm(id);
    return res
      .status(category.statusCode)
      .json({ message: category.message, data: category.data });
  } catch (error) {
    next(error);
  }
};

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
    const deleteCategory = await removeServiceForm(id);

    return res
      .status(deleteCategory.statusCode)
      .json({ message: deleteCategory.message });
  } catch (error) {
    next(error);
  }
};

// create a new service category sub form
const ServiceSubFormCreator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the validated payload from the the request body
    // get the service category id from the the request params
    // send the validated payload and the category id to saveServiceForm service
    // return response to the client

    const formId = req.params.formId;
    const servicePayload = req.body;

    const values: ServiceSubFormPayload = {
      question: servicePayload?.question,
      type: servicePayload?.type,
      options: servicePayload?.options,
      compulsory: servicePayload?.compulsory,
      fileName: servicePayload?.fileName,
      fileLink: servicePayload?.fileLink,
      fileType: servicePayload?.fileType,
      fileSize: servicePayload?.fileSize,
      allowOther: servicePayload?.allowOther,
      dependentField: servicePayload?.dependsOn?.field,
      dependentOptions: servicePayload?.dependsOn?.options,
      formId: formId,
    };

    const category = await saveServiceSubForm(values, formId);

    return res.status(category.statusCode).json(category);
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
    const formId = req.params.formId;
    const categories = await getAllServiceSubForm(formId);

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
    // send the validated payload and the category id to saveServiceForm service
    // return response to the client

    const subFormId = req.params.id;
    const servicePayload = req.body;
    const values: UpdateServiceSubFormPayload = {
      question: servicePayload?.question,
      type: servicePayload?.type,
      options: servicePayload?.options,
      compulsory: servicePayload?.compulsory,
      fileName: servicePayload?.fileName,
      allowOther: servicePayload?.allowOther,
      fileLink: servicePayload?.fileLink,
      fileSize: servicePayload?.fileSize,
      fileType: servicePayload?.fileType,
      dependentField: servicePayload?.dependsOn?.field,
      dependentOptions: servicePayload?.dependsOn?.options,
    };
    const category = await updateServiceSubForm(values, subFormId);

    return res
      .status(category.statusCode)
      .json({ message: category.message, data: category.data });
  } catch (error) {
    next(error);
  }
};

//get a service category form with id
const ServiceACategorySubFormFetcher = async (
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

    return res
      .status(deleteCategory.statusCode)
      .json({ message: deleteCategory.message });
  } catch (error) {
    next(error);
  }
};

//get all transhed services
const TrashedServicesFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the service category list
    // return response to the client

    const categories = await trashedService();

    return res.status(categories.statusCode).json(categories);
  } catch (error) {
    next(error);
  }
};

//get all transhed services form
const TrashedServicesFormFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the service category list
    // return response to the client
    const categories = await trashedServiceForm();

    return res.status(categories.statusCode).json(categories);
  } catch (error) {
    next(error);
  }
};

export {
  ServiceCreator,
  ServicesFetcher,
  ServiceFetcher,
  ServiceModifier,
  ServiceRemover,
  ServiceFormCreator,
  ServiceFormsFetcher,
  ServiceFormModifier,
  ServiceFormFetcher,
  ServiceFormRemover,
  ServiceSubFormCreator,
  ServiceSubFormFetcher,
  ServiceSubFormModifier,
  ServiceACategorySubFormFetcher,
  ServiceSubFormRemover,
  TrashedServicesFetcher,
  TrashedServicesFormFetcher,
};
