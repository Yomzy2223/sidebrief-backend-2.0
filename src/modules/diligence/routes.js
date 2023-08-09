const express = require("express");
const validator = require("../../middleware/validator");
const {
  validateDiligenceDocument,
  validateEmail,
  validateResetCredentials,
  validateUserCredentials,
  validateUserAcccountCredentials,
  validateBranchCredentials,
  validateRequestCredentials,
  validateEnterpriseCredentials,
  validateManagerCredentials,
} = require("../../utils/validation/diligence");
const { staffAuth } = require("../../middleware/auth");
const router = express.Router();

const {
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
} = require("./controller");

//NIGERIAN BANKS
router.get("/nigerianbanks", GetAllNigerianBanks);
router.put("/nigerianbank/:bankId", staffAuth, UpdateNigerianBank);

//ENTERPRISE
router.post(
  "/enterprise",
  staffAuth,
  validator(validateEnterpriseCredentials),
  CreateEnterprise
);
router.get("/enterprises", GetAllDiligenceEnterprises);
router.get("/enterprise/:enterpriseId", GetSingleEnterprise);
router.get("/enterpriseByEmail/:adminEmail", GetSingleEnterpriseByAdminEmail);
router.put(
  "/enterprise/:enterpriseId",
  staffAuth,
  validator(validateEnterpriseCredentials),
  UpdateEnterprise
);
router.delete("/enterprise/:enterpriseId", DeleteEnterprise);

//MANAGER
router.post(
  "/manager/:enterpriseId",
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
router.put("/request/verify/:id", VerifyRequest);
router.put("/request/update/:id", UpdateRequest);
router.delete("/request/:requestId", DeleteRequest);

//REQUEST DOCUMENT
router.post(
  "/document/:requestId",
  staffAuth,
  validator(validateDiligenceDocument),
  AddRequestDocument
);
router.get("/documents/:requestId", GetAllDocuments);
router.get("/document/:documentId", GetDocument);
router.put(
  "/document/:documentId",
  validator(validateDiligenceDocument),
  staffAuth,
  UpdateDocument
);
router.delete("/document/:id", staffAuth, DeleteDocument);

module.exports = router;
