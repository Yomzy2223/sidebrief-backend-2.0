import { Request, Response, NextFunction } from "express";
import { initializeProduct } from "./service";

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
    const id = req.params.id;
    const user = await initializeProduct(productPayload, productQAPayload);

    return res
      .status(user.statusCode)
      .json({ message: user.message, data: user.data });
  } catch (error) {
    next(error);
  }
};
