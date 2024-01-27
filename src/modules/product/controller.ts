import { Request, Response, NextFunction } from "express";
import {
  addServiceId,
  createProductQA,
  getAllProductQA,
  getAllServiceQA,
  getProductById,
  initializeProduct,
  submitProduct,
} from "./service";

//get a user with id
const CreateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the payload from the client
    // pass the payload to the service
    // return data back to client
    const userId = req.params.userId;
    const productPayload = {
      userId: userId,
    };

    const user = await initializeProduct(productPayload);

    return res
      .status(user.statusCode)
      .json({ message: user.message, data: user.data });
  } catch (error) {
    next(error);
  }
};

//add service id
const AddServiceId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the payload from the client
    // pass the payload to the service
    // return data back to client
    const productPayload = {
      serviceId: req.body.serviceId,
      productId: req.body.productId,
    };

    const product = await addServiceId(productPayload);

    return res
      .status(product.statusCode)
      .json({ message: product.message, data: product.data });
  } catch (error) {
    next(error);
  }
};

//get all products
const GetAllProductsByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the products list
    // return response to the client
    const userId = req.params.userId;
    const products = await getAllServiceQA(userId);

    return res
      .status(products.statusCode)
      .json({ message: products.message, data: products.data });
  } catch (error) {
    next(error);
  }
};

//get a product
const GetProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the product date
    // return response to the client
    const id = req.params.id;
    const product = await getProductById(id);

    return res
      .status(product.statusCode)
      .json({ message: product.message, data: product.data });
  } catch (error) {
    next(error);
  }
};

const AddProductQA = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the payload and the id from the client
    // pass the payload to the service
    // return data back to client
    const productId = req.params.productId;
    const payload = req.body;

    const productQAPayload = {
      form: payload.form,
    };

    const product = await createProductQA(productQAPayload, productId);

    return res
      .status(product.statusCode)
      .json({ message: product.message, data: product.data });
  } catch (error) {
    next(error);
  }
};

//get all service QA
const GetAllServicesQA = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the service category list
    // return response to the client
    const productId = req.params.productId;
    const ServiceQA = await getAllServiceQA(productId);

    return res
      .status(ServiceQA.statusCode)
      .json({ message: ServiceQA.message, data: ServiceQA.data });
  } catch (error) {
    next(error);
  }
};

//get all product QA
const GetAllProductQA = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the service category list
    // return response to the client
    const productId = req.params.productId;
    const productQA = await getAllProductQA(productId);

    return res
      .status(productQA.statusCode)
      .json({ message: productQA.message, data: productQA.data });
  } catch (error) {
    next(error);
  }
};

//Submit Product
const ProductSubmission = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the product id
    //send it to the service
    // return response to the client
    const productId = req.body.productId;
    const productQA = await submitProduct(productId);

    return res
      .status(productQA.statusCode)
      .json({ message: productQA.message });
  } catch (error) {
    next(error);
  }
};
export {
  CreateProduct,
  AddProductQA,
  GetAllServicesQA,
  GetAllProductQA,
  GetAllProductsByUserId,
  ProductSubmission,
  AddServiceId,
  GetProductById,
};
