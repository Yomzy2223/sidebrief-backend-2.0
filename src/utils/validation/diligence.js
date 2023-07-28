const Validator = require("fastest-validator");

const validate = new Validator();

//bank
const bankSchema = {
  name: { type: "string", min: 3, max: 50 },
  address: { type: "string", min: 6, max: 200 },
  url: { type: "string", min: 3, max: 255 },
  adminName: { type: "string", min: 6, max: 100 },
  adminEmail: { type: "string", min: 6, max: 100 },
};

const validateBankCredentials = validate.compile(bankSchema);

//branch
const userBranchSchema = {
  name: { type: "string", min: 3, max: 50 },
  state: { type: "string", min: 3, max: 50 },
  managerEmail: { type: "email", min: 3, max: 255 },
  managerName: { type: "string", min: 6, max: 100 },
};

const validateBranchCredentials = validate.compile(userBranchSchema);

//account
const userAccountSchema = {
  firstName: { type: "string", min: 3, max: 50 },
  lastName: { type: "string", min: 6, max: 50 },
  email: { type: "email", min: 3, max: 255 },
  password: { type: "string", min: 6, max: 12 },
};

const validateUserAcccountCredentials = validate.compile(userAccountSchema);

//user login
const loginSchema = {
  email: { type: "email", min: 3, max: 255 },
  password: { type: "string", min: 6, max: 12 },
};

const validateUserCredentials = validate.compile(loginSchema);

//request
const requestSchema = {
  name: { type: "string", min: 3, max: 100 },
  registrationNumber: { type: "string", min: 6, max: 100 },
  email: { type: "email", min: 3, max: 255 },
};

const validateRequestCredentials = validate.compile(requestSchema);

//email
const emailSchema = {
  email: { type: "email", min: 3, max: 255 },
};

const validateEmail = validate.compile(emailSchema);

//user password rest
const resetSchema = {
  email: { type: "email", min: 3, max: 255 },
  password: { type: "string", min: 6, max: 12 },
  token: { type: "string", min: 6, max: 500 },
};

const validateResetCredentials = validate.compile(resetSchema);

//request
const diligenceRequestSchema = {
  name: { type: "string", min: 3, max: 50 },
  registrationNumber: { type: "string", min: 3, max: 50 },
  status: { type: "string", min: 3, max: 50 },
  createdBy: { type: "string", min: 3, max: 100 },
};

const validateDiligenceRequest = validate.compile(diligenceRequestSchema);

//document registration
const diligenceDocumentSchema = {
  name: { type: "string", min: 3, max: 100 },
  type: { type: "string", min: 3, max: 50 },
  description: { type: "string", min: 3, max: 255 },
  link: { type: "string", min: 3, max: 255 },
};

const validateDiligenceDocument = validate.compile(diligenceDocumentSchema);

module.exports = {
  validateEmail,
  validateResetCredentials,
  validateDiligenceRequest,
  validateBankCredentials,
  validateDiligenceDocument,
  validateUserCredentials,
  validateBranchCredentials,
  validateUserAcccountCredentials,
  validateRequestCredentials,
};
