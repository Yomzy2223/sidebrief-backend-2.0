import { Request, Response, NextFunction } from "express";
import {
  addProductId,
  createProductRequestQA,
  getAllProductRequestQA,
  getAllRequestProductQA,
  getAllRequestServiceQA,
  getProductRequestById,
  initializeProductRequest,
  submitProductRequest,
  getAllProductRequestQAByQuestion,
  getAllProductRequestsByUserId,
  getAllProductRequestsByServiceId,
  getProductRequestByCountry,
  removeProductRequestService,
  getAllProductRequestService,
  updateProductRequestService,
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
      productId: req.body.productId,
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
      requestId: req.body.requestId,
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
    const requestId = req.params.requestId;
    const ProductRequestQAPayload = req.body;

    const ProductRequest = await createProductRequestQA(
      ProductRequestQAPayload,
      requestId
    );

    return res
      .status(ProductRequest.statusCode)
      .json({ message: ProductRequest.message, data: ProductRequest.data });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//get all service QA
const GetAllRequestServiceQA = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the service category list
    // return response to the client
    const requestId = req.params.requestId;
    const serviceQA = await getAllRequestServiceQA(requestId);

    return res
      .status(serviceQA.statusCode)
      .json({ message: serviceQA.message, data: serviceQA.data });
  } catch (error) {
    next(error);
  }
};

//get all service QA
const GetAllRequestProdcutQA = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the service category list
    // return response to the client
    const requestId = req.params.requestId;
    const ProductQA = await getAllRequestProductQA(requestId);

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
    const requestId = req.params.requestId;
    const ProductRequestQA = await getAllProductRequestQA(requestId);

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
      requestId: data.requestId,
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
    const requestId = req.body.requestId;
    const ProductRequestQA = await submitProductRequest(requestId);

    return res
      .status(ProductRequestQA.statusCode)
      .json({ message: ProductRequestQA.message });
  } catch (error) {
    next(error);
  }
};

//get all ProductRequests by service ID
const GetAllProductRequestsByServiceId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the ProductRequests list
    // return response to the client
    const serviceId = req.params.serviceId;
    const page = parseInt(req.query.page as string) || 1; // Default to page 1 if not provided
    const pageSize = parseInt(req.query.pageSize as string) || 10; // Default to 10 items per page if not provided

    const ProductRequests = await getAllProductRequestsByServiceId(
      serviceId,
      page,
      pageSize
    );

    return res.status(ProductRequests.statusCode).json({
      message: ProductRequests.message,
      data: ProductRequests.data,
      statusCode: ProductRequests.statusCode,
    });
  } catch (error) {
    next(error);
  }
};

//get all ProductRequests by service ID
const GetAllProductRequestsByCountry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the ProductRequests list
    // return response to the client
    const country = req.params.country;

    const ProductRequests = await getProductRequestByCountry(country);

    return res.status(ProductRequests.statusCode).json({
      message: ProductRequests.message,
      data: ProductRequests.data,
    });
  } catch (error) {
    next(error);
  }
};

const ProductRequestsFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // check if there is id
    // pass the id to the service
    // return service request  to client

    const requests = await getAllProductRequestService();

    return res.status(requests.statusCode).json(requests);
  } catch (error) {
    next(error);
  }
};

// update an existing product request
const ProductRequestModifier = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the validated payload from the the request body
    // get the id from req.params
    // send the validated payload to update product request service
    // return response to the client
    const id: string = req.params.id;
    const serviceFormPayload = req.body;
    const values = {
      email: serviceFormPayload.email,
      address: serviceFormPayload.address,
    };

    const request = await updateProductRequestService(id, values);
    return res.status(request.statusCode).json(request);
  } catch (error) {
    next(error);
  }
};

const ProductRequestRequestRemover = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //check if there is id
    // send the id to the delete request service
    //return response to the client

    const id: string = req.params.id;
    const deleteRequest = await removeProductRequestService(id);

    return res
      .status(deleteRequest.statusCode)
      .json({ message: deleteRequest.message });
  } catch (error) {
    next(error);
  }
};

export {
  CreateProductRequest,
  AddProductRequestQA,
  GetAllRequestProdcutQA,
  GetAllRequestServiceQA,
  GetAllProductRequestQA,
  GetAllProductRequestsByUserId,
  ProductRequestSubmission,
  AddProductId,
  GetProductRequestById,
  GetAllProductRequestQAByQuestion,
  GetAllProductRequestsByServiceId,
  GetAllProductRequestsByCountry,
  ProductRequestModifier,
  ProductRequestRequestRemover,
  ProductRequestsFetcher,
};
