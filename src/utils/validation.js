const Validator = require("fastest-validator");

const validate = new Validator();

//user registration
const userSchema = {
  firstName: { type: "string", min: 3, max: 255 },
  lastName: { type: "string", min: 3, max: 255 },
  username: { type: "string", min: 3, max: 20 },
  email: { type: "email", min: 3, max: 255 },
  password: { type: "string", min: 6, max: 12 },
  phone: { type: "string", min: 6, max: 15 },
  referral: { type: "string", min: 3, max: 255 },
};

const validateUser = validate.compile(userSchema);

//user login
const loginSchema = {
  email: { type: "email", min: 3, max: 255 },
  password: { type: "string", min: 6, max: 12 },
};

const validateUserCredentials = validate.compile(loginSchema);

//staff registration
const staffSchema = {
  firstName: { type: "string", min: 3, max: 255 },
  lastName: { type: "string", min: 3, max: 255 },
  email: { type: "email", min: 3, max: 255 },
  password: { type: "string", min: 6, max: 12 },
  phone: { type: "string", min: 6, max: 15 },
};

const validateStaff = validate.compile(staffSchema);

const bankSchema = {
  name: { type: "string", min: 3, max: 255 },
  code: { type: "string", min: 3, max: 255 },
  url: { type: "string", min: 3, max: 255 },
  image: { type: "string", min: 3, max: 500 },
};

const validateBank = validate.compile(bankSchema);

const serviceCategorySchema = {
  name: { type: "string", min: 3, max: 50 },
  description: { type: "string", min: 3, max: 255 },
};

const validateServiceCategory = validate.compile(serviceCategorySchema);

//user password rest
const resetSchema = {
  password: { type: "string", min: 6, max: 12 },
  token: { type: "string", min: 6, max: 1000 },
};

const validateResetCredentials = validate.compile(resetSchema);

//update profile
const updateUserSchema = {
  phone: { type: "email", min: 6, max: 15 },
};

const validateUserUpdateCredentials = validate.compile(updateUserSchema);

//collaborator registration
const collaboratorSchema = {
  firstName: { type: "string", min: 3, max: 255 },
  lastName: { type: "string", min: 3, max: 255 },
  email: { type: "email", min: 3, max: 255 },
  password: { type: "string", min: 6, max: 12 },
  phone: { type: "string", min: 6, max: 15 },
  isPartner: "boolean",
};

const validateCollaborator = validate.compile(collaboratorSchema);

//document registration
const documentSchema = {
  name: { type: "string", min: 3, max: 100 },
  type: { type: "string", min: 3, max: 50 },
  description: { type: "string", min: 3, max: 255 },
};

const validateDocument = validate.compile(documentSchema);

const countrySchema = {
  name: { type: "string", min: 3, max: 255 },
  iso: { type: "string", min: 3, max: 10 },
  currency: { type: "string", min: 3, max: 10 },
  code: { type: "string", min: 3, max: 10 },
  flagUrl: { type: "string", min: 3, max: 255 },
};

const validateCountry = validate.compile(countrySchema);

const emailSchema = {
  email: { type: "email", min: 3, max: 255 },
};

const validateEmail = validate.compile(emailSchema);

module.exports = {
  validateUser,
  validateUserCredentials,
  validateStaff,
  validateBank,
  validateServiceCategory,
  validateResetCredentials,
  validateUserUpdateCredentials,
  validateCollaborator,
  validateDocument,
  validateCountry,
  validateEmail,
};
