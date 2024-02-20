import { Request, Response, NextFunction } from "express";
import {
  addProductId,
  createProductRequestQA,
  getAllProductRequestQA,
  getAllProductQA,
  getProductRequestById,
  initializeProductRequest,
  submitProductRequest,
  getAllProductRequestQAByQuestion,
  getAllProductRequestsByUserId,
} from "./service";

//get a user with id
const CreateProductRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the payload from the client
    // pass the payload to the service
    // return data back to client

    const ProductRequestPayload = {
      userId: req.body.userId,
    };

    const user = await initializeProductRequest(ProductRequestPayload);

    return res
      .status(user.statusCode)
      .json({ message: user.message, data: user.data });
  } catch (error) {
    next(error);
  }
};

//add service id
const AddProductId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the payload from the client
    // pass the payload to the service
    // return data back to client
    const ProductRequestPayload = {
      productId: req.body.productId,
      productRequestId: req.body.productRequestId,
    };

    const ProductRequest = await addProductId(ProductRequestPayload);

    return res
      .status(ProductRequest.statusCode)
      .json({ message: ProductRequest.message, data: ProductRequest.data });
  } catch (error) {
    next(error);
  }
};

//get all ProductRequests
const GetAllProductRequestsByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the ProductRequests list
    // return response to the client
    const userId = req.params.userId;
    const ProductRequests = await getAllProductRequestsByUserId(userId);

    return res.status(ProductRequests.statusCode).json({
      message: ProductRequests.message,
      data: ProductRequests.data,
      statusCode: ProductRequests.statusCode,
    });
  } catch (error) {
    next(error);
  }
};

//get a ProductRequest
const GetProductRequestById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the ProductRequest date
    // return response to the client
    const id = req.params.id;
    const ProductRequest = await getProductRequestById(id);

    return res.status(ProductRequest.statusCode).json({
      message: ProductRequest.message,
      data: ProductRequest.data,
      statusCode: ProductRequest.statusCode,
    });
  } catch (error) {
    next(error);
  }
};

const AddProductRequestQA = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the payload and the id from the client
    // pass the payload to the service
    // return data back to client
    const productRequestId = req.params.productRequestId;
    const payload = req.body;

    const ProductRequestQAPayload = {
      form: payload.form,
    };

    const ProductRequest = await createProductRequestQA(
      ProductRequestQAPayload,
      productRequestId
    );

    return res
      .status(ProductRequest.statusCode)
      .json({ message: ProductRequest.message, data: ProductRequest.data });
  } catch (error) {
    next(error);
  }
};

//get all service QA
const GetAllProductsQA = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the service category list
    // return response to the client
    const productRequestId = req.params.productRequestId;
    const ProductQA = await getAllProductQA(productRequestId);

    return res
      .status(ProductQA.statusCode)
      .json({ message: ProductQA.message, data: ProductQA.data });
  } catch (error) {
    next(error);
  }
};

//get all ProductRequest QA
const GetAllProductRequestQA = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the service category list
    // return response to the client
    const productRequestId = req.params.productRequestId;
    const ProductRequestQA = await getAllProductRequestQA(productRequestId);

    return res
      .status(ProductRequestQA.statusCode)
      .json({ message: ProductRequestQA.message, data: ProductRequestQA.data });
  } catch (error) {
    next(error);
  }
};

const GetAllProductRequestQAByQuestion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the service category list
    // return response to the client
    const data = req.body;
    const values = {
      question: data.question,
      productRequestId: data.productRequestId,
    };
    const ProductRequestQA = await getAllProductRequestQAByQuestion(values);

    return res
      .status(ProductRequestQA.statusCode)
      .json({ message: ProductRequestQA.message, data: ProductRequestQA.data });
  } catch (error) {
    next(error);
  }
};

//Submit ProductRequest
const ProductRequestSubmission = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the ProductRequest id
    //send it to the service
    // return response to the client
    const productRequestId = req.body.productRequestId;
    const ProductRequestQA = await submitProductRequest(productRequestId);

    return res
      .status(ProductRequestQA.statusCode)
      .json({ message: ProductRequestQA.message });
  } catch (error) {
    next(error);
  }
};
export {
  CreateProductRequest,
  AddProductRequestQA,
  GetAllProductsQA,
  GetAllProductRequestQA,
  GetAllProductRequestsByUserId,
  ProductRequestSubmission,
  AddProductId,
  GetProductRequestById,
  GetAllProductRequestQAByQuestion,
};
