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
  picture: { type: "string", min: 3, max: 255, optional: true },
  referral: { type: "string", min: 3, max: 255 },
};

const validateUser = validate.compile(userSchema);

//user login
const loginSchema = {
  email: { type: "email", min: 3, max: 255 },
  password: { type: "string", min: 6, max: 8 },
};

const validateUserCredentials = validate.compile(loginSchema);

const bankSchema = {
  bankName: { type: "string", min: 3, max: 255 },
  bankName: { type: "string", min: 3, max: 255 },
  bankUrl: { type: "string", min: 3, max: 255 },
  bankImage: { type: "string", min: 3, max: 500 },
};

const validateBank = validate.compile(bankSchema);

module.exports = { validateUser, validateUserCredentials, validateBank };
