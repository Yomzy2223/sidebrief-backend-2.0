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
} = require("./controller");

//Post request
router.post(
  "/createAccount",
  validator(validateUserAcccountCredentials),
  CreateAccount
);
router.post(
  "/addDocument/:requestId",
  staffAuth,
  validator(validateDiligenceDocument),
  AddRequestDocument
);
router.post(
  "/createBank",
  staffAuth,
  validator(validateBankCredentials),
  CreateBank
);
router.post(
  "/createBranch/:bankId",
  validator(validateBranchCredentials),
  CreateBranch
);
router.post("/forgotpassword", validator(validateEmail), UserPasswordResetLink);
router.post(
  "/resetPassword",
  validator(validateResetCredentials),
  UserPasswordReset
);
router.post("/createStaff/:branchId", validator(validateEmail), CreateStaff);
router.post("/login", validator(validateUserCredentials), UserLogin);
router.post(
  "/createRequest",
  validator(validateRequestCredentials),
  CreateRequest
);

//Put request
router.put("/verify/:id", VerifyRequest);
router.put("/update/:id", staffAuth, UpdateRequest);

//Delete request
router.delete("/deleteDocument/:id", staffAuth, DeleteDocument);

//Get request
router.get("/nigerianBanks", GetAllNigerianBanks);
router.get("/allBanks", GetAllDiligenceBanks);
router.get("/allBranches", GetAllDiligenceBranches);
router.get("/allStaffs", GetAllDiligenceStaffs);
router.get("/allRequests", GetAllDiligenceRequests);
router.get("/bank/:bankId", GetSingleBank);
router.get("/branch/:branchId", GetSingleBranch);
router.get("/staff/:staffId", GetSingleStaff);

// router.get("/test", Test);

module.exports = router;
