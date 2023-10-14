import express from "express";
import validator from "../../middleware/validator";
import {
  validateDiligenceDocument,
  validateEmail,
  validateResetCredentials,
  validateUserCredentials,
  validateUserAcccountCredentials,
  validateRequestCredentials,
  validateEnterpriseCredentials,
  validateManagerCredentials,
  validateUpdateDiligenceRequest,
  validateUpdateManyDiligenceRequest,
} from "../../utils/validation/diligence";
import { staffAuth } from "../../middleware/auth";
const router = express.Router();

import {
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
} from "./controller";

//NIGERIAN BANKS
router.post("/nigerianBank", staffAuth, CreateNigerianBank);
router.get("/nigerianBank", GetAllNigerianBanks);
router.get("/nigerianBank/:bankId", GetANigerianBank);
router.put("/nigerianBank/:bankId", staffAuth, UpdateNigerianBank);
router.delete("/nigerianBank/:bankId", staffAuth, DeleteNigerianBank);

//ENTERPRISE
router.post(
  "/enterprise",
  staffAuth,
  validator(validateEnterpriseCredentials),
  CreateEnterprise
);
router.get("/enterprise", GetAllDiligenceEnterprises);
router.get("/enterprise/:enterpriseId", GetSingleEnterprise);
router.get("/enterprise-details/:enterpriseId", GetSingleEnterpriseDetails);
router.get("/enterpriseByEmail/:adminEmail", GetSingleEnterpriseByAdminEmail);
router.put(
  "/enterprise/:enterpriseId",
  staffAuth,
  validator(validateEnterpriseCredentials),
  UpdateEnterprise
);
router.delete("/enterprise/:enterpriseId", staffAuth, DeleteEnterprise);

//MANAGER
router.post(
  "/manager/:adminId",
  validator(validateManagerCredentials),
  CreateManager
);
router.get("/managers/:enterpriseId", GetAllDiligenceManagers);
router.get("/manager/:managerId", GetSingleManager);
router.get("/managerByEmail/:managerEmail", GetSingleManagerByManagerEmail);
router.put(
  "/manager/:managerId",
  validator(validateManagerCredentials),
  UpdateManager
);
router.delete("/manager/:managerId", DeleteManager);

//STAFF
router.post("/staff/:managerId", validator(validateEmail), CreateStaff);
router.get("/staffs/:managerId", GetAllDiligenceStaffs);
router.get("/staff/:staffId", GetSingleStaff);
router.delete("/staff/:staffId", DeleteStaff);

//DILIGENCE USER
router.post("/user", validator(validateUserAcccountCredentials), CreateAccount);
router.post("/user/login", validator(validateUserCredentials), UserLogin);
router.post(
  "/user/forgotpassword",
  validator(validateEmail),
  UserPasswordResetLink
);
router.post(
  "/user/resetPassword",
  validator(validateResetCredentials),
  UserPasswordReset
);

//DILIIGENCE REQUEST
router.post("/request", validator(validateRequestCredentials), CreateRequest);
router.get("/request", GetAllDiligenceRequests);
router.get("/request/:requestId", GetRequest);
router.put(
  "/request/:requestId",
  validator(validateUpdateDiligenceRequest),
  UpdateDiligenceRequest
);
router.put("/request/verify/:requestId", VerifyRequest);
router.put(
  "/requests/update",
  validator(validateUpdateManyDiligenceRequest),
  VerifyMultipleRequest
);
router.put("/request/update/:requestId", staffAuth, UpdateRequest);
router.delete("/request/:requestId", DeleteRequest);

//REQUEST DOCUMENT
router.post(
  "/document/:requestId",
  staffAuth,
  validator(validateDiligenceDocument),
  AddRequestDocument
);
router.get("/document/:requestId", GetAllDocuments);
router.get("/document/:documentId", GetDocument);
router.put(
  "/document/:documentId",
  validator(validateDiligenceDocument),
  staffAuth,
  UpdateDocument
);
router.delete("/document/:documentId", staffAuth, DeleteDocument);

router.get("/test", Test);

router.get("/staffRequest/:managerId", GetStaffAndRequest);
router.get("/managerRequest/:managerId", GetManagerRequests);

export default router;
