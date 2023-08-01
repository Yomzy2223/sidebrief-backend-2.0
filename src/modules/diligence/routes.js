const express = require("express");
const validator = require("../../middleware/validator");
const {
  validateDiligenceDocument,
  validateEmail,
  validateResetCredentials,
  validateUserCredentials,
  validateUserAcccountCredentials,
  validateBankCredentials,
  validateBranchCredentials,
  validateRequestCredentials,
} = require("../../utils/validation/diligence");
const { staffAuth } = require("../../middleware/auth");
const router = express.Router();

const {
  GetAllNigerianBanks,
  CreateAccount,
  CreateBank,
  CreateBranch,
  CreateStaff,
  UserLogin,
  CreateRequest,
  VerifyRequest,
  UpdateRequest,
  AddRequestDocument,
  DeleteDocument,
  GetAllDiligenceBanks,
  GetAllDiligenceBranches,
  GetAllDiligenceStaffs,
  GetAllDiligenceRequests,
  UserPasswordResetLink,
  UserPasswordReset,
  Test,
  GetSingleBank,
  GetSingleBranch,
  GetSingleStaff,
  DeleteBank,
  UpdateBank,
  DeleteRequest,
  GetRequest,
  DeleteStaff,
  UpdateBranch,
  UpdateNigerianBank,
  DeleteBranch,
  GetDocument,
  GetSingleBankByAdminEmail,
  UpdateDocument,
  GetAllDocuments,
} = require("./controller");

//NIGERIAN BANKS
router.get("/nigerianbanks", GetAllNigerianBanks);
router.put("/nigerianbank/:bankId", staffAuth, UpdateNigerianBank);

//BANKS
router.post("/bank", staffAuth, validator(validateBankCredentials), CreateBank);
router.get("/banks", GetAllDiligenceBanks);
router.get("/bank/:bankId", GetSingleBank);
router.get("/bankByEmail/:adminEmail", GetSingleBankByAdminEmail);
router.put(
  "/bank/:bankId",
  staffAuth,
  validator(validateBankCredentials),
  UpdateBank
);
router.delete("/bank/:bankId", DeleteBank);

//BRANCH
router.post(
  "/branch/:bankId",
  validator(validateBranchCredentials),
  CreateBranch
);
router.get("/branches/:bankId", GetAllDiligenceBranches);
router.get("/branch/:branchId", GetSingleBranch);
router.put(
  "/branch/:branchId",
  validator(validateBranchCredentials),
  UpdateBranch
);
router.delete("/branch/:branchId", DeleteBranch);

//STAFF
router.post("/staff/:branchId", validator(validateEmail), CreateStaff);
router.get("/staffs/:branchId", GetAllDiligenceStaffs);
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
