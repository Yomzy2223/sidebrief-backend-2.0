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
} = require("./controller");

//Post request
router.post("/user", validator(validateUserAcccountCredentials), CreateAccount);
router.post(
  "/document/:requestId",
  staffAuth,
  validator(validateDiligenceDocument),
  AddRequestDocument
);
router.post("/bank", staffAuth, validator(validateBankCredentials), CreateBank);
router.post(
  "/branch/:bankId",
  validator(validateBranchCredentials),
  CreateBranch
);
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
router.post("/staff/:branchId", validator(validateEmail), CreateStaff);
router.post("/user/login", validator(validateUserCredentials), UserLogin);
router.post("/request", validator(validateRequestCredentials), CreateRequest);

//Put request
router.put("/request/verify/:id", VerifyRequest);
router.put("/request/update/:id", staffAuth, UpdateRequest);
router.put("/bank/:bankId", staffAuth, UpdateBank);

//Delete request
router.delete("/document/:id", staffAuth, DeleteDocument);
router.delete("/bank/:bankId", staffAuth, DeleteBank);
router.delete("/request/:requestId", staffAuth, DeleteRequest);

//Get request
router.get("/nigerianBanks", GetAllNigerianBanks);
router.get("/banks", GetAllDiligenceBanks);
router.get("/branches/:bankId", GetAllDiligenceBranches);
router.get("/staffs/:branchId", GetAllDiligenceStaffs);
router.get("/request", GetAllDiligenceRequests);
router.get("/bank/:bankId", GetSingleBank);
router.get("/branch/:branchId", GetSingleBranch);
router.get("/staff/:staffId", GetSingleStaff);
router.get("/request/:requestId", GetRequest);

// router.get("/test", Test);

module.exports = router;
