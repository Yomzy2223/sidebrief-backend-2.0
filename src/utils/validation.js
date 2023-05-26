const Validator = require("fastest-validator");

const validate = new Validator();

//user registration
const userSchema = {
  firstName: { type: "string", min: 3, max: 255 },
  lastName: { type: "string", min: 3, max: 255 },
  username: { type: "string", min: 3, max: 20 },
  email: { type: "email", min: 3, max: 255 },
  password: { type: "string", min: 6, max: 8 },
  phone: { type: "string", min: 6, max: 15 },
  referral: { type: "string", min: 3, max: 255 },
};

const validateUser = validate.compile(userSchema);

//user login
const loginSchema = {
  email: { type: "email", min: 3, max: 255 },
  password: { type: "string", min: 6, max: 8 },
};

const validateUserCredentials = validate.compile(loginSchema);

//staff registration
const staffSchema = {
  firstName: { type: "string", min: 3, max: 255 },
  lastName: { type: "string", min: 3, max: 255 },
  email: { type: "email", min: 3, max: 255 },
  password: { type: "string", min: 6, max: 8 },
  phone: { type: "string", min: 6, max: 15 },
};

const validateStaff = validate.compile(staffSchema);

const bankSchema = {
  bankName: { type: "string", min: 3, max: 255 },
  bankCode: { type: "string", min: 3, max: 255 },
  bankUrl: { type: "string", min: 3, max: 255 },
  bankImage: { type: "string", min: 3, max: 500 },
};

const validateBank = validate.compile(bankSchema);

const serviceCategorySchema = {
  name: { type: "string", min: 3, max: 50 },
  description: { type: "string", min: 3, max: 255 },
};

const validateServiceCategory = validate.compile(serviceCategorySchema);

module.exports = {
  validateUser,
  validateUserCredentials,
  validateStaff,
  validateBank,
  validateServiceCategory,
};
