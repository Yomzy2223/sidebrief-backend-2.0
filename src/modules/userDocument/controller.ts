import { Response, Request, NextFunction } from "express";
import {
  saveDocument,
  getAllDocumentsByUserId,
  getDocument,
  updateDocument,
  removeDocument,
} from "./service";

// create a new document
const CreateUserDocument = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the validated payload from the the request body
    // send the validated payload to add-document service
    // return response to the client

    const documentPayload = req.body;
    const userId = req.params.userId;
    const values = {
      name: documentPayload?.name,
      type: documentPayload?.type,
      link: documentPayload?.link,
      size: documentPayload?.size,
      belongsTo: documentPayload?.belongsTo,
      userId: userId,
    };

    const document = await saveDocument(values);

    return res
      .status(document.statusCode)
      .json({ message: document.message, data: document.data });
  } catch (error) {
    next(error);
  }
};

//get all documents
const GetAllDocumentsByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the document list
    // return response to the client
    const userId = req.params.userId;
    const documents = await getAllDocumentsByUserId(userId);

    return res
      .status(documents.statusCode)
      .json({ message: documents.message, data: documents.data });
  } catch (error) {
    next(error);
  }
};

//get a document with id
const GetDocument = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // check if there is id
    // pass the id to the service
    // return document to client

    const id = req.params.id;

    const document = await getDocument(id);

    return res
      .status(document.statusCode)
      .json({ message: document.message, data: document.data });
  } catch (error) {
    next(error);
  }
};

//update a document
const UpdateDocument = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //get the payload
    // validate the payload
    // send the payload to the service
    // return response

    const id = req.params.id;
    const documentPayload = req.body;

    const values = {
      name: documentPayload?.name,
      type: documentPayload?.type,
      link: documentPayload?.link,
      size: documentPayload?.size,
      belongsTo: documentPayload?.belongsTo,
    };

    const document = await updateDocument(id, values);

    return res
      .status(document.statusCode)
      .json({ message: document.message, data: document.data });
  } catch (error) {
    next(error);
  }
};

//delete a document
const DeleteDocument = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //check if there is id
    // send the id to the delete service
    //return response to the client

    const id = req.params.id;

    const deleteDocument = await removeDocument(id);

    return res
      .status(deleteDocument.statusCode)
      .json({ message: deleteDocument.message });
  } catch (error) {
    next(error);
  }
};

export {
  DeleteDocument,
  UpdateDocument,
  GetAllDocumentsByUserId,
  GetDocument,
  CreateUserDocument,
};
