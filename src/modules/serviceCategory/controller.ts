import { Request, Response, NextFunction } from "express";
import {
  saveServiceCategory,
  getAllServiceCategory,
  getServiceCategory,
  updateServiceCategory,
  removeServiceCategory,
  saveServiceCategoryForm,
  getAllServiceCategoryForm,
  updateServiceCategoryForm,
  getServiceCategoryForm,
  removeServiceCategoryForm,
  saveServiceCategorySubForm,
  getServiceCategorySubForm,
  getAllServiceCategorySubForm,
  updateServiceCategorySubForm,
  removeServiceCategorySubForm,
} from "./service";
import {
  ServiceCategoryFormPayload,
  ServiceCategorySubFormPayload,
  UpdateServiceCategoryFormPayload,
  UpdateServiceCategorySubFormPayload,
} from "./entities";

// create a new service category
const ServiceCategoryCreator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the validated payload from the the request body
    // send the validated payload to addServiceCategory service
    // return response to the client

    const serviceCategoryPayload = req.body;
    const values = {
      name: serviceCategoryPayload.name.toLowerCase(),
      description: serviceCategoryPayload.description,
    };
    const category = await saveServiceCategory(values);

    return res.status(category.statusCode).json(category);
  } catch (error) {
    next(error);
  }
};

//get all service categories
const ServiceCategoriesFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the service category list
    // return response to the client

    const categories = await getAllServiceCategory();

    return res.status(categories.statusCode).json(categories);
  } catch (error) {
    next(error);
  }
};

//get a service category with id
const ServiceCategoryFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // check if there is id
    // pass the id to the service
    // return service category to client

    const id: string = req.params.id;
    const category = await getServiceCategory(id);

    return res.status(category.statusCode).json(category);
  } catch (error) {
    next(error);
  }
};

//update a service category
const ServiceCategoryModifier = async (
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
    const serviceCategoryPayload = req.body;
    const values = {
      name: serviceCategoryPayload.name,
      description: serviceCategoryPayload.description,
    };
    const category = await updateServiceCategory(id, values);

    return res.status(category.statusCode).json(category.message);
  } catch (error) {
    next(error);
  }
};

//delete a service category
const ServiceCategoryRemover = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //check if there is id
    // send the id to the delete service
    //return response to the client

    const id: string = req.params.id;
    const deleteCategory = await removeServiceCategory(id);

    return res.status(deleteCategory.statusCode).json(deleteCategory.message);
  } catch (error) {
    next(error);
  }
};

// create a new service category
const ServiceCategoryFormCreator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the validated payload from the the request body
    // get the service category id from the the request params
    // send the validated payload and the category id to saveServiceCategoryForm service
    // return response to the client

    const serviceCategoryId = req.params.serviceCategoryId;
    const serviceCategoryPayload = req.body;
    const values: ServiceCategoryFormPayload = {
      title: serviceCategoryPayload.title,
      type: serviceCategoryPayload.type,
      description: serviceCategoryPayload.description,
      compulsory: serviceCategoryPayload.compulsory,
      serviceCategoryId: serviceCategoryId,
    };
    const category = await saveServiceCategoryForm(values, serviceCategoryId);

    return res.status(category.statusCode).json(category);
  } catch (error) {
    next(error);
  }
};

//get all service category forms
const ServiceCategoryFormFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the service category list
    // return response to the client
    const serviceCategoryId = req.params.serviceCategoryId;
    const categories = await getAllServiceCategoryForm(serviceCategoryId);

    return res.status(categories.statusCode).json(categories);
  } catch (error) {
    next(error);
  }
};

// create a new service category
const ServiceCategoryFormModifier = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the validated payload from the the request body
    // get the service category id from the the request params
    // send the validated payload and the category id to saveServiceCategoryForm service
    // return response to the client

    const serviceCategoryFormId = req.params.id;
    const serviceCategoryPayload: UpdateServiceCategoryFormPayload = req.body;
    const values = {
      title: serviceCategoryPayload.title,
      type: serviceCategoryPayload.type,
      description: serviceCategoryPayload.description,
      compulsory: serviceCategoryPayload.compulsory,
    };
    const category = await updateServiceCategoryForm(
      values,
      serviceCategoryFormId
    );

    return res.status(category.statusCode).json(category);
  } catch (error) {
    next(error);
  }
};

//get a service category form with id
const ServiceACategoryFormFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // check if there is id
    // pass the id to the service
    // return service category form to client

    const id: string = req.params.id;
    const category = await getServiceCategoryForm(id);

    return res.status(category.statusCode).json(category);
  } catch (error) {
    next(error);
  }
};

const ServiceCategoryFormRemover = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //check if there is id
    // send the id to the delete service
    //return response to the client

    const id: string = req.params.id;
    const deleteCategory = await removeServiceCategoryForm(id);

    return res.status(deleteCategory.statusCode).json(deleteCategory.message);
  } catch (error) {
    next(error);
  }
};

// create a new service category sub form
const ServiceCategorySubFormCreator = async (
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

    const values: ServiceCategorySubFormPayload = {
      question: serviceCategoryPayload.question,
      type: serviceCategoryPayload.type,
      options: serviceCategoryPayload.options,
      compulsory: serviceCategoryPayload.compulsory,
      formId: formId,
    };
    const category = await saveServiceCategorySubForm(values, formId);

    return res.status(category.statusCode).json(category);
  } catch (error) {
    next(error);
  }
};

//get all service category forms
const ServiceCategorySubFormFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the service category list
    // return response to the client
    const formId = req.params.formId;
    const categories = await getAllServiceCategorySubForm(formId);

    return res.status(categories.statusCode).json(categories);
  } catch (error) {
    next(error);
  }
};

// create a new service category
const ServiceCategorySubFormModifier = async (
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
    const serviceCategoryPayload: UpdateServiceCategorySubFormPayload =
      req.body;
    const values = {
      question: serviceCategoryPayload.question,
      type: serviceCategoryPayload.type,
      options: serviceCategoryPayload.options,
      compulsory: serviceCategoryPayload.compulsory,
    };
    const category = await updateServiceCategorySubForm(values, subFormId);

    return res.status(category.statusCode).json(category);
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
    const category = await getServiceCategorySubForm(id);

    return res.status(category.statusCode).json(category);
  } catch (error) {
    next(error);
  }
};

const ServiceCategorySubFormRemover = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //check if there is id
    // send the id to the delete service
    //return response to the client

    const id: string = req.params.id;
    const deleteCategory = await removeServiceCategorySubForm(id);

    return res.status(deleteCategory.statusCode).json(deleteCategory.message);
  } catch (error) {
    next(error);
  }
};

export {
  ServiceCategoryCreator,
  ServiceCategoriesFetcher,
  ServiceCategoryFetcher,
  ServiceCategoryModifier,
  ServiceCategoryRemover,
  ServiceCategoryFormCreator,
  ServiceCategoryFormFetcher,
  ServiceCategoryFormModifier,
  ServiceACategoryFormFetcher,
  ServiceCategoryFormRemover,
  ServiceCategorySubFormCreator,
  ServiceCategorySubFormFetcher,
  ServiceCategorySubFormModifier,
  ServiceACategorySubFormFetcher,
  ServiceCategorySubFormRemover,
};
