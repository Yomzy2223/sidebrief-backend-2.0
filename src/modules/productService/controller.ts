import { Request, Response, NextFunction } from "express";
import {
  saveServiceCategory,
  getAllServiceCategory,
  getServiceCategory,
  updateServiceCategory,
  removeServiceCategory,
} from "./service";

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

export {
  ServiceCategoryCreator,
  ServiceCategoriesFetcher,
  ServiceCategoryFetcher,
  ServiceCategoryModifier,
  ServiceCategoryRemover,
};
