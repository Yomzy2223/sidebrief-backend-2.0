import { Request, Response, NextFunction } from "express";
import {
  createProductQA,
  getAllProductQA,
  getAllServiceQA,
  initializeProduct,
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
    const payload = req.body;
    const productPayload = {
      userId: payload.userId,
      country: payload.country,
    };
    const productQAPayload = {
      question: payload.question,
      answer: payload.answer,
      isGeneral: true,
    };

    const user = await initializeProduct(productPayload, productQAPayload);

    return res
      .status(user.statusCode)
      .json({ message: user.message, data: user.data });
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
      question: payload.question,
      answer: payload.answer,
      isGeneral: false,
    };

    const user = await createProductQA(productQAPayload, productId);

    return res
      .status(user.statusCode)
      .json({ message: user.message, data: user.data });
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

export { CreateProduct, AddProductQA, GetAllServicesQA, GetAllProductQA };
