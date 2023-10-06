const Validator = require("fastest-validator");

const validate = new Validator();

//enterprise
const enterpriseSchema = {
  name: { type: "string", min: 3, max: 50 },
  address: { type: "string", min: 6, max: 200 },
  adminEmail: { type: "email", min: 6, max: 100 },
};

const validateEnterpriseCredentials = validate.compile(enterpriseSchema);

//manager
const userManagerSchema = {
  managerEmail: { type: "email", min: 3, max: 255 },
  location: { type: "string", min: 3, max: 300 },
  name: { type: "string", min: 3, max: 50 },
};

const validateManagerCredentials = validate.compile(userManagerSchema);

//account
const userAccountSchema = {
  firstName: { type: "string", min: 3, max: 50 },
  lastName: { type: "string", min: 3, max: 50 },
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
  password: { type: "string", min: 6, max: 12 },
  token: { type: "string", min: 6, max: 500 },
};

const validateResetCredentials = validate.compile(resetSchema);

//request
const diligenceRequestSchema = {
  name: { type: "string", min: 3, max: 50 },
  registrationNumber: { type: "string", min: 3, max: 50 },
  status: { type: "string", min: 3, max: 50 },
  email: { type: "email", min: 3, max: 100 },
};

const validateDiligenceRequest = validate.compile(diligenceRequestSchema);

//request
const updateDiligenceRequestSchema = {
  name: { type: "string", min: 3, max: 50 },
  registrationNumber: { type: "string", min: 3, max: 50 },
};

const validateUpdateDiligenceRequest = validate.compile(
  updateDiligenceRequestSchema
);

//many request
const updateManyDiligenceRequestSchema = {
  requestIds: { type: "array", items: "string", min: 1 },
};

const validateUpdateManyDiligenceRequest = validate.compile(
  updateManyDiligenceRequestSchema
);

//document registration
const diligenceDocumentSchema = {
  name: { type: "string", min: 3, max: 100 },
  type: { type: "string", min: 3, max: 50 },
  link: { type: "string", min: 3, max: 255 },
};

const validateDiligenceDocument = validate.compile(diligenceDocumentSchema);

export {
  validateEmail,
  validateResetCredentials,
  validateDiligenceRequest,
  validateEnterpriseCredentials,
  validateDiligenceDocument,
  validateUserCredentials,
  validateManagerCredentials,
  validateUserAcccountCredentials,
  validateRequestCredentials,
  validateUpdateDiligenceRequest,
  validateUpdateManyDiligenceRequest,
};
