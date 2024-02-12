import { Request, Response, NextFunction } from "express";
import { hasher } from "../../common/hash";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

import {
  getAllBanks,
  createStaff,
  getAllDiligenceStaffs,
  createAccount,
  loginUser,
  createRequest,
  getAllDiligenceRequests,
  saveRequestDocument,
  removeRequestDocument,
  verifyRequest,
  updateRequest,
  forgotPassword,
  changePassword,
  createNigerianBank,
  getStaff,
  getDiligenceRequest,
  deleteRequest,
  deleteStaff,
  udpateNigerianBank,
  getDocument,
  getAllDocuments,
  updateRequestDocument,
  createEnterprise,
  udpateEnterprise,
  deleteEnterprise,
  getAllDiligenceEnterprises,
  getEnterprise,
  getEnterpriseByAdminEmail,
  getAllDiligenceManagers,
  getManagerByManagerEmail,
  createManager,
  udpateManager,
  deleteManager,
  getNigerianBank,
  getManager,
  deleteNigerianBank,
  updateDiligenceRequest,
  getStaffAndRequest,
  getBranchRequest,
  getEnterpriseDetails,
  verifyMultipleRequest,
} from "./service";
import { default as axios } from "axios";
import {
  CreateEnterprisePayload,
  CreateNigerianBankPayload,
  CreateNigerianBankResponse,
  ManagerPayload,
  RequestDocumentPayload,
  RequestPayload,
  UpdateEnterprisePayload,
  UpdateRequestDocumentPayload,
  UpdateRequestPayload,
} from "./entities";

//DILIGENCE PRODUCT CONTROLLERS

//NIGERIAN BANKS
//create a nigerian bank
const CreateNigerianBank = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const nigerianBankPayload = req.body;

    const values: CreateNigerianBankPayload = {
      name: nigerianBankPayload.name,
      slug: nigerianBankPayload.slug,
      color: nigerianBankPayload.color,
      logo: nigerianBankPayload.logo,
    };

    const nigerianBank: CreateNigerianBankResponse = await createNigerianBank(
      values
    );

    return res.status(nigerianBank.statusCode).json({
      message: nigerianBank.message,
      data: nigerianBank.data,
    });
  } catch (error) {
    next(error);
  }
};

//get all banks
const GetAllNigerianBanks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the banks list
    // return response to the client

    const banks = await getAllBanks();
    return res
      .status(banks.statusCode)
      .json({ message: banks.message, data: banks.data });
  } catch (error) {
    next(error);
  }
};

//get a Nigerian bank
const GetANigerianBank = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the bank
    // return response to the client
    const bankId: string = req.params.bankId;
    const bank = await getNigerianBank(bankId);
    return res
      .status(bank.statusCode)
      .json({ message: bank.message, data: bank.data });
  } catch (error) {
    next(error);
  }
};

//update Nigerian bank
const UpdateNigerianBank = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bankId: string = req.params.bankId;
    const { color } = req.body;

    const bank = await udpateNigerianBank(bankId, color);

    return res
      .status(bank.statusCode)
      .json({ message: bank.message, data: bank.data });
  } catch (error) {
    next(error);
  }
};

//delete Nigerian Bank
const DeleteNigerianBank = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bankId: string = req.params.bankId;

    const bank = await deleteNigerianBank(bankId);

    return res.status(bank.statusCode).json({ message: bank.message });
  } catch (error) {
    next(error);
  }
};

//ENTERPRISE
//create diligence enterprise
const CreateEnterprise = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const enterprisePayload = req.body;

    const values = {
      name: enterprisePayload.name,
      address: enterprisePayload.address,
      adminEmail: enterprisePayload.adminEmail,
      color: enterprisePayload.color,
      logo: enterprisePayload.logo,
      backdrop: enterprisePayload.backdrop,
    };
    const diligenceEnterprise = await createEnterprise(values);

    return res.status(diligenceEnterprise.statusCode).json({
      message: diligenceEnterprise.message,
      data: diligenceEnterprise.data,
    });
  } catch (error) {
    next(error);
  }
};

// get single enterprise details
const GetSingleEnterpriseDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const enterpriseId: string = req.params.enterpriseId;
    const enterprise = await getEnterpriseDetails(enterpriseId);

    return res
      .status(enterprise.statusCode)
      .json({ message: enterprise.message, data: enterprise.data });
  } catch (error) {
    next(error);
  }
};

//update diligence enterprise
const UpdateEnterprise = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const enterpriseId: string = req.params.enterpriseId;
    const enterprisePayload = req.body;

    const values: UpdateEnterprisePayload = {
      name: enterprisePayload.name,
      address: enterprisePayload.address,
      color: enterprisePayload.color,
      logo: enterprisePayload.logo,
      backdrop: enterprisePayload.backdrop,
    };

    const diligenceEnterprise = await udpateEnterprise(enterpriseId, values);

    return res.status(diligenceEnterprise.statusCode).json({
      message: diligenceEnterprise.message,
      data: diligenceEnterprise.data,
    });
  } catch (error) {
    next(error);
  }
};

//delete diligence enterprise
const DeleteEnterprise = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const enterpriseId: string = req.params.enterpriseId;

    const diligenceEnterprise = await deleteEnterprise(enterpriseId);

    return res
      .status(diligenceEnterprise.statusCode)
      .json({ message: diligenceEnterprise.message });
  } catch (error) {
    next(error);
  }
};

// get single enterprise
const GetSingleEnterprise = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const enterpriseId: string = req.params.enterpriseId;
    const enterprise = await getEnterprise(enterpriseId);

    return res
      .status(enterprise.statusCode)
      .json({ message: enterprise.message, data: enterprise.data });
  } catch (error) {
    next(error);
  }
};

//get all enterprises
const GetAllDiligenceEnterprises = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the diligence enterprises list
    // return response to the client

    const diligenceEnterprises = await getAllDiligenceEnterprises();
    return res.status(diligenceEnterprises.statusCode).json({
      message: diligenceEnterprises.message,
      data: diligenceEnterprises.data,
    });
  } catch (error) {
    next(error);
  }
};

//get a single enterprise with admin email address
const GetSingleEnterpriseByAdminEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const adminEmail: string = req.params.adminEmail;
    const enterprise = await getEnterpriseByAdminEmail(adminEmail);

    return res
      .status(enterprise.statusCode)
      .json({ message: enterprise.message, data: enterprise.data });
  } catch (error) {
    next(error);
  }
};

//MANAGER
//create diligence manager
const CreateManager = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const adminId: string = req.params.adminId;
    const managerPayload: ManagerPayload = req.body;

    const manager = await createManager(adminId, managerPayload);

    return res
      .status(manager.statusCode)
      .json({ message: manager.message, data: manager.data });
  } catch (error) {
    next(error);
  }
};

//get all managers
const GetAllDiligenceManagers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the diligence branches list
    // return response to the client
    const enterpriseId: string = req.params.enterpriseId;
    const managers = await getAllDiligenceManagers(enterpriseId);

    return res.status(managers.statusCode).json({
      message: managers.message,
      data: managers.data,
    });
  } catch (error) {
    next(error);
  }
};

//get single manager
const GetSingleManager = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const managerId: string = req.params.managerId;
    const manager = await getManager(managerId);

    return res
      .status(manager.statusCode)
      .json({ message: manager.message, data: manager.data });
  } catch (error) {
    next(error);
  }
};

//get a single manager with email address
const GetSingleManagerByManagerEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const managerEmail: string = req.params.managerEmail;
    const manager = await getManagerByManagerEmail(managerEmail);

    return res
      .status(manager.statusCode)
      .json({ message: manager.message, data: manager.data });
  } catch (error) {
    next(error);
  }
};

//update diligence manager
const UpdateManager = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const managerId: string = req.params.managerId;
    const managerPayload = req.body;

    const values = {
      name: managerPayload.name,
      location: managerPayload.location,
      managerEmail: managerPayload.managerEmail,
    };

    const manager = await udpateManager(managerId, values);

    return res
      .status(manager.statusCode)
      .json({ message: manager.message, data: manager.data });
  } catch (error) {
    next(error);
  }
};

//delete diligence branch
const DeleteManager = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const managerId: string = req.params.managerId;

    const manager = await deleteManager(managerId);

    return res.status(manager.statusCode).json({ message: manager.message });
  } catch (error) {
    next(error);
  }
};

//STAFF
//create diligence staff
const CreateStaff = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const managerId: string = req.params.managerId;
    const { email } = req.body;

    const diligenceStaff = await createStaff(managerId, email);

    return res
      .status(diligenceStaff.statusCode)
      .json({ message: diligenceStaff.message, data: diligenceStaff.data });
  } catch (error) {
    next(error);
  }
};

//get all staffs
const GetAllDiligenceStaffs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the diligence staffs list
    // return response to the client
    const managerId: string = req.params.managerId;
    const diligenceStaffs = await getAllDiligenceStaffs(managerId);

    return res.status(diligenceStaffs.statusCode).json({
      message: diligenceStaffs.message,
      data: diligenceStaffs.data,
    });
  } catch (error) {
    next(error);
  }
};

//get single staff
const GetSingleStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const staffId: string = req.params.staffId;
    const staff = await getStaff(staffId);

    return res
      .status(staff.statusCode)
      .json({ message: staff.message, data: staff.data });
  } catch (error) {
    next(error);
  }
};

//delete diligence staff
const DeleteStaff = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const staffId: string = req.params.staffId;

    const diligenceStaff = await deleteStaff(staffId);

    return res
      .status(diligenceStaff.statusCode)
      .json({ message: diligenceStaff.message });
  } catch (error) {
    next(error);
  }
};

//create diligence user
const CreateAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const accountPayload = req.body;

    const cryptedPassword = await hasher(accountPayload.password, 12);

    const values = {
      firstName: accountPayload.firstName,
      lastName: accountPayload.lastName,
      email: accountPayload.email,
      password: cryptedPassword,
    };

    const diligenceUser = await createAccount(values);

    return res
      .status(diligenceUser.statusCode)
      .json({ message: diligenceUser.message, data: diligenceUser.data });
  } catch (error) {
    next(error);
  }
};

// login usergyuiyugydqqdipqddtwduwdyyuyyiwwitdgwqjdopwquyd8ftrttd9w77ruyff56wyuydywydo
const UserLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // get the login payload
    // validate the payload
    // pass the payload to login service
    // return diligence user and the token to client

    const loginPayload = req.body;

    const user = await loginUser(loginPayload);

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

//send diligence user a reset link
const UserPasswordResetLink = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;

    const reset = await forgotPassword(email);

    return res.status(reset.statusCode).json({ message: reset.message });
  } catch (error) {
    next(error);
  }
};

//reset diligence user password
const UserPasswordReset = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the login payload
    // validate the payload
    // pass the payload to reset service

    // return the response to the client

    const { loginPayload } = req.body;
    const userPass = await changePassword(loginPayload);

    return res.status(userPass.statusCode).json({ message: userPass.message });
  } catch (error) {
    next(error);
  }
};

//create diligence request
const CreateRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const requestPayload = req.body;

    const values: RequestPayload = {
      name: requestPayload.name,
      registrationNumber: requestPayload.registrationNumber,
      status: "Unverified",
      createdBy: requestPayload.email,
      diligenceEnterpriseId: requestPayload.enterpriseId,
    };

    const diligenceRequest = await createRequest(values);

    return res
      .status(diligenceRequest.statusCode)
      .json({ message: diligenceRequest.message, data: diligenceRequest.data });
  } catch (error) {
    next(error);
  }
};

//get a diligence request
const GetRequest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const requestId: string = req.params.requestId;

    const diligenceRequest = await getDiligenceRequest(requestId);

    return res
      .status(diligenceRequest.statusCode)
      .json({ message: diligenceRequest.message, data: diligenceRequest.data });
  } catch (error) {
    next(error);
  }
};

//delete a diligence request
const DeleteRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const requestId: string = req.params.requestId;

    const diligenceRequest = await deleteRequest(requestId);

    return res
      .status(diligenceRequest.statusCode)
      .json({ message: diligenceRequest.message });
  } catch (error) {
    next(error);
  }
};

//update a request
const UpdateDiligenceRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //check if there is id
    // send the id to the update service
    //return response to the client

    const id: string = req.params.requestId;
    const requestPayload = req.body;

    const values: UpdateRequestPayload = {
      name: requestPayload.name,
      registrationNumber: requestPayload.registrationNumber,
    };

    const update = await updateDiligenceRequest(id, values);

    return res
      .status(update.statusCode)
      .json({ message: update.message, data: update.data });
  } catch (error) {
    next(error);
  }
};

//get all requests
const GetAllDiligenceRequests = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the diligence requests list
    // return response to the client

    const diligenceRequests = await getAllDiligenceRequests();

    return res.status(diligenceRequests.statusCode).json({
      message: diligenceRequests.message,
      data: diligenceRequests.data,
    });
  } catch (error) {
    next(error);
  }
};

//verify a request
const VerifyRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //check if there is id
    // send the id to the verify service
    //return response to the client
    const id: string = req.params.requestId;

    const verify = await verifyRequest(id);

    return res.status(verify.statusCode).json({ message: verify.message });
  } catch (error) {
    next(error);
  }
};

//verify multiple requests
const VerifyMultipleRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //get the list from the client
    //send the list to the verify service
    //return response to the client

    const { requestIds } = req.body;

    const verify = await verifyMultipleRequest(requestIds);

    return res.status(verify.statusCode).json({ message: verify.message });
  } catch (error) {
    next(error);
  }
};

//update a request
const UpdateRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //check if there is id
    // send the id to the update service
    //return response to the client

    const id: string = req.params.requestId;

    const update = await updateRequest(id);

    return res.status(update.statusCode).json({ message: update.message });
  } catch (error) {
    next(error);
  }
};
//add diligence document
const AddRequestDocument = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const documentPayload = req.body;
    const requestId = req.params.requestId;

    const values: RequestDocumentPayload = {
      name: documentPayload.name,
      type: documentPayload.type,
      description: documentPayload.description,
      link: documentPayload.link,
      diligenceRequestId: requestId,
    };

    const document = await saveRequestDocument(requestId, values);

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

    const id: string = req.params.documentId;

    const deleteDocument = await removeRequestDocument(id);

    return res
      .status(deleteDocument.statusCode)
      .json({ message: deleteDocument.message });
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
    //check if there is id
    // send the id to the delete service
    //return response to the client
    const documentId: string = req.params.documentId;
    const documentPayload = req.body;

    const values: UpdateRequestDocumentPayload = {
      name: documentPayload.name,
      type: documentPayload.type,
      description: documentPayload.description,
      link: documentPayload.link,
    };

    const deleteDocument = await updateRequestDocument(documentId, values);

    return res
      .status(deleteDocument.statusCode)
      .json({ message: deleteDocument.message, data: deleteDocument.data });
  } catch (error) {
    next(error);
  }
};

// get single document
const GetDocument = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const documentId: string = req.params.documentId;
    const document = await getDocument(documentId);

    return res
      .status(document.statusCode)
      .json({ message: document.message, data: document.data });
  } catch (error) {
    next(error);
  }
};

// get all documents
const GetAllDocuments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const requestId: string = req.params.requestId;
    const document = await getAllDocuments(requestId);

    return res
      .status(document.statusCode)
      .json({ message: document.message, data: document.data });
  } catch (error) {
    next(error);
  }
};

const Test = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const url = "https://nigerianbanks.xyz";
    const response = await axios.get(url);

    const newList = response.data.map((data: any) => ({
      name: data.name,
      slug: data.slug,
      logo: data.logo,
    }));

    // const save = await prisma.nigerianBank.createMany({
    //   data: newList,
    //   skipDuplicates: true,
    // });

    return res.status(200).json({ data: "" });
  } catch (error) {}
};

const GetStaffAndRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const managerId: string = req.params.managerId;
    const result = await getStaffAndRequest(managerId);

    return res
      .status(result.statusCode)
      .json({ message: result.message, data: result.data });
  } catch (error) {
    next(error);
  }
};

const GetManagerRequests = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const managerId: string = req.params.managerId;

    const result = await getBranchRequest(managerId);

    return res
      .status(result.statusCode)
      .json({ message: result.message, data: result.data });
  } catch (error) {
    next(error);
  }
};

export {
  GetAllNigerianBanks,
  CreateAccount,
  CreateStaff,
  UserLogin,
  CreateRequest,
  VerifyRequest,
  UpdateRequest,
  AddRequestDocument,
  DeleteDocument,
  GetAllDiligenceStaffs,
  GetAllDiligenceRequests,
  UserPasswordResetLink,
  UserPasswordReset,
  Test,
  GetSingleStaff,
  DeleteRequest,
  GetRequest,
  DeleteStaff,
  UpdateNigerianBank,
  GetDocument,
  UpdateDocument,
  GetAllDocuments,
  //enterprise
  CreateEnterprise,
  GetAllDiligenceEnterprises,
  GetSingleEnterprise,
  GetSingleEnterpriseByAdminEmail,
  UpdateEnterprise,
  DeleteEnterprise,
  //manager
  CreateManager,
  GetAllDiligenceManagers,
  GetSingleManager,
  UpdateManager,
  DeleteManager,
  GetSingleManagerByManagerEmail,
  GetANigerianBank,
  CreateNigerianBank,
  DeleteNigerianBank,
  UpdateDiligenceRequest,
  GetStaffAndRequest,
  GetManagerRequests,
  GetSingleEnterpriseDetails,
  VerifyMultipleRequest,
};
