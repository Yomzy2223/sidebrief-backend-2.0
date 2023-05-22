const Validator = require("fastest-validator");

const validate = new Validator();

const userSchema = {
  firstName: { type: "string", min: 3, max: 255 },
  lastName: { type: "string", min: 3, max: 255 },
  username: { type: "string", min: 3, max: 255 },
  email: { type: "email", min: 3, max: 255 },
  password: { type: "string", min: 6, max: 8 },
  phone: { type: "string", min: 6, max: 15 },
  picture: { type: "string", min: 3, max: 255, optional: true },
  verified: { type: "boolean", default: false },
  referral: { type: "string", min: 3, max: 255 },
};

const validateUser = validate.compile(userSchema);

const bankSchema = {
  bankName: { type: "string", min: 3, max: 255 },
  bankName: { type: "string", min: 3, max: 255 },
  bankUrl: { type: "string", min: 3, max: 255 },
  bankImage: { type: "string", min: 3, max: 500 },
};

const validateBank = validate.compile(bankSchema);

module.exports = { validateUser, validateBank };
