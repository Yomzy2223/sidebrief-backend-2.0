import { Request, Response, NextFunction } from "express";
import { hasher } from "../../common/hash";
import {
  getCollaborator,
  loginCollaborator,
  saveCollaborator,
  verifyCollaboratorAccount,
  forgotPassword,
  changePassword,
  updateProfile,
  saveDocument,
  getDocumentByCollaboratorId,
  deleteCollaborator,
} from "./service";
import { CollaboratorDocumentProps } from "./entities";

//IN PROGRESS
// collect payload from the request body
// pass the payload to the service
// return response to client
const CollaboratorRegisration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const collaboratorPayload = req.body;

    const cryptedPassword = await hasher(collaboratorPayload.password, 12);

    const values = {
      firstName: collaboratorPayload.firstName,
      lastName: collaboratorPayload.lastName,
      email: collaboratorPayload.email.toLowerCase(),
      password: cryptedPassword,
      phone: collaboratorPayload.phone,
      verified: false,
      isPartner: collaboratorPayload.isPartner,
    };

    const collaborator = await saveCollaborator(values);
    return res.status(200).json(collaborator);
  } catch (error) {
    next(error);
  }
};

//get a collaborator with id
const CollectorProfileFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // check if there is id
    // pass the id to the service
    // return collaborator to client

    const id = req.params.id;
    const collaborator = await getCollaborator(id);

    return res.status(200).json(collaborator);
  } catch (error) {
    next(error);
  }
};

const CollaboratorLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the login payload
    // validate the payload
    // pass wht payload to login service
    // generate token
    // return collaborator and the token to client

    const collaboratorPayload = req.body;

    const collaborator = await loginCollaborator(collaboratorPayload);

    return res.status(200).json(collaborator);
  } catch (error) {
    next(error);
  }
};

const CollaboratorVerification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const verifyPayload = req.params.token;

    const verify = await verifyCollaboratorAccount(verifyPayload);

    return res.status(verify.statusCode).json({ message: verify.message });
  } catch (error) {
    next(error);
  }
};

const CollaboratorPasswordResetLink = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = req.body;
    // check that email is not empty

    const reset = await forgotPassword(email);

    return res.status(reset.statusCode).json({ message: reset.message });
  } catch (error) {
    next(error);
  }
};

const CollaboratorPasswordReset = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the login payload
    // validate the payload
    // pass the payload to reset service

    // return collaborator and the token to client

    const loginPayload = req.body;

    const collaboratorPass = await changePassword(loginPayload);

    return res
      .status(collaboratorPass.statusCode)
      .json({ message: collaboratorPass.message });
  } catch (error) {
    next(next);
  }
};

//delete a collaborator with id
const CollaboratorRemover = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // check if there is id
    // pass the id to the service
    // return collaborator to client

    const id = req.params.id;
    const collaborator = await deleteCollaborator(id);

    return res
      .status(collaborator.statusCode)
      .json({ message: collaborator.message });
  } catch (error) {
    next(error);
  }
};

// IN PROGRESS
const ControllerProfileModifier = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the updatePayload and the user id
    // validate the payload
    // pass the payload and the id to update service

    // return collaborator and message

    const id = req.params.id;
    const updatePayload = req.body;

    const collaboratorUpdate = await updateProfile(updatePayload, id);

    return res
      .status(collaboratorUpdate.statusCode)
      .json({ message: collaboratorUpdate.message });
  } catch (error) {
    next(error);
  }
};

const CollaboratorDocument = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const documentPayload = req.body;
  const id: string = req.params.collaboratorId;

  const values: CollaboratorDocumentProps = {
    name: documentPayload.name,
    type: documentPayload.type,
    description: documentPayload.description,
    link: documentPayload.link,
    collaboratorId: id,
  };

  const document = await saveDocument(values, id);

  return res
    .status(document.statusCode)
    .json({ message: document.message, data: document.data });
};

//get collaborator documents with id
const CollectorDocumentsFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // check if there is id
    // pass the id to the service
    // return collaborator to client

    const id = req.params.collaboratorId;
    const collaboratorDoc = await getDocumentByCollaboratorId(id);

    return res.status(200).json(collaboratorDoc);
  } catch (error) {
    next(error);
  }
};

export {
  CollaboratorLogin,
  CollectorProfileFetcher,
  CollaboratorRegisration,
  CollaboratorPasswordReset,
  CollaboratorPasswordResetLink,
  CollaboratorVerification,
  CollaboratorRemover,
  CollaboratorDocument,
  CollectorDocumentsFetcher,
  ControllerProfileModifier,
};
