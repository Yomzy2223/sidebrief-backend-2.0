import {
  DocumentPayload,
  CreatedocumentResponseProps,
  UpdateDocumentPayload,
} from "./entities";
import { PrismaClient } from "../../../prisma/generated/main";
import logger from "../../config/logger";
import { BadRequest } from "../../utils/requestErrors";
const prisma = new PrismaClient();

//create document service
const saveDocument = async (
  documentPayload: DocumentPayload
): Promise<CreatedocumentResponseProps> => {
  //   //add the new document to the table

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: documentPayload.userId,
      },
    });
    if (!user) {
      throw new BadRequest("user not found!");
    }

    const document = await prisma.userDocument.create({
      data: documentPayload,
    });

    if (!document) {
      throw new BadRequest("Error occured while uploading document");
    }

    logger.info({ message: `${documentPayload.name} uploaded successfully` });
    const response: CreatedocumentResponseProps = {
      message: "Document uploaded successfully",
      statusCode: 200,
      data: document,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

//get all userdocument service
const getAllDocumentsByUserId = async (
  userId: string
): Promise<CreatedocumentResponseProps> => {
  //  get the document list from the table
  //  return the document list to the document controller
  try {
    const documents = await prisma.userDocument.findMany({
      where: {
        userId: userId,
      },
    });
    if (!documents) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    const response: CreatedocumentResponseProps = {
      message: "Documents fetched successfully",
      data: documents,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

//get a document service
const getDocument = async (
  id: string
): Promise<CreatedocumentResponseProps> => {
  //   //check if the document exists
  //   //return the document to the document controller

  try {
    const document = await prisma.userDocument.findUnique({
      where: {
        id: id,
      },
    });
    if (!document) {
      throw new BadRequest("Document not found!.");
    }
    const response: CreatedocumentResponseProps = {
      message: "Document fetched successfully",
      data: document,
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

//update a document service
const updateDocument = async (
  id: string,
  documentPayload: UpdateDocumentPayload
): Promise<CreatedocumentResponseProps> => {
  // take both id and validated document payload from the document controller
  //  check if the document exists
  //  update the document
  //  return the document to the document controller

  try {
    const document = await prisma.userDocument.findUnique({
      where: {
        id: id,
      },
    });
    if (!document) {
      throw new BadRequest("document not found!");
    }

    const updateDocument = await prisma.userDocument.update({
      where: {
        id: id,
      },
      data: documentPayload,
    });

    if (!updateDocument) {
      throw new BadRequest("Error occured while updating document!.");
    }

    const response: CreatedocumentResponseProps = {
      message: "Document updated successfully",
      statusCode: 200,
      data: updateDocument,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

//remove a document service
const removeDocument = async (
  id: string
): Promise<CreatedocumentResponseProps> => {
  //take id from the document controller
  //check if the document exists
  //remove the document from the record
  //return response to the document controller

  try {
    const deleteDocument = await prisma.userDocument.delete({
      where: {
        id: id,
      },
    });
    if (!deleteDocument) {
      throw new BadRequest("Document not found");
    }

    const response: CreatedocumentResponseProps = {
      message: "User Document deleted successfully",
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

export {
  saveDocument,
  getAllDocumentsByUserId,
  getDocument,
  updateDocument,
  removeDocument,
};
