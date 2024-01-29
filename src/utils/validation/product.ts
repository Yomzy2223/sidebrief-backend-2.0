const Validator = require("fastest-validator");

const validate = new Validator();

//product
const productInitializationSchema = {
  userId: { type: "string", min: 3, max: 100 },
};

const initializeProductCredentials = validate.compile(
  productInitializationSchema
);

const produtQASchema = {
  question: { type: "string", min: 3, max: 255 },
  answer: { type: "array", min: 3, max: 300 },
};
const producQACredentials = validate.compile(produtQASchema);

const productServiceIdSchema = {
  serviceId: { type: "string", min: 3, max: 255 },
  productId: { type: "string", min: 3, max: 300 },
};
const producServiceIdCredentials = validate.compile(productServiceIdSchema);

const productSubmissionSchema = {
  productId: { type: "string", items: "string", min: 3, max: 50 },
};
const submitProductCredentials = validate.compile(productSubmissionSchema);

export {
  initializeProductCredentials,
  submitProductCredentials,
  producServiceIdCredentials,
  producQACredentials,
};
