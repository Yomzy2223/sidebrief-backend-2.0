import { Request, Response, NextFunction } from "express";
import {
  getAllProductService,
  getProductService,
  getProductServiceByServiceCategory,
  saveProductService,
  updateProductService,
  removeProductService,
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
      requiredDocuments: productServicePayload.requiredDocuments,
      categoryForm: productServicePayload.categoryForm,
      numberOfShares: productServicePayload.numberOfShares,
      serviceCategoryId: productServicePayload.serviceCategoryId,
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

//get a product service with service category id
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

// update an existing product service
// const ProductServiceModifier = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const id: string = req.params.id;
//     const productServicePayload = req.body;
//     const values = {
//       name: productServicePayload.name.toLowerCase(),
//       type: productServicePayload.type,
//       code: productServicePayload.code,
//       description: productServicePayload.description,
//       country: productServicePayload.country,
//       price: productServicePayload.price,
//       timeline: productServicePayload.timeline,
//       feature: productServicePayload.feature,
//       requiredDocuments: productServicePayload.requiredDocuments,
//       categoryForm: productServicePayload.categoryForm,
//       numberOfShares: productServicePayload.numberOfShares,
//       serviceCategoryId: productServicePayload.serviceCategoryId,
//     };

//     const updateservice = await updateProductService(values, id);
//     return res.status(updateservice.statusCode).json(updateservice);
//   } catch (error) {
//     next(error);
//   }
// };

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
  } catch (error) {}
};

export {
  ProductServiceCreator,
  ProductServiceByCategoryFetcher,
  ProductServiceFetcher,
  //ProductServiceModifier,
  ProductServiceRemover,
  ProductServicesFetcher,
};
