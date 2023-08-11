const express = require("express");
const validator = require("../../middleware/validator");
const {
  validateDiligenceDocument,
  validateEmail,
  validateResetCredentials,
  validateUserCredentials,
  validateUserAcccountCredentials,
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
  GetANigerianBank,
} = require("./controller");

//NIGERIAN BANKS
router.get("/nigerianBank", GetAllNigerianBanks);
router.get("/nigerianBank/:bankId", GetANigerianBank);
router.put("/nigerianBank/:bankId", staffAuth, UpdateNigerianBank);

//ENTERPRISE
router.post(
  "/enterprise",
  staffAuth,
  validator(validateEnterpriseCredentials),
  CreateEnterprise
);
router.get("/enterprise", GetAllDiligenceEnterprises);
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
router.get("/manager/:enterpriseId", GetAllDiligenceManagers);
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
router.get("/staff/:managerId", GetAllDiligenceStaffs);
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
router.put("/request/verify/:requestId", VerifyRequest);
router.put("/request/update/:requestId", UpdateRequest);
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
module.exports = router;
