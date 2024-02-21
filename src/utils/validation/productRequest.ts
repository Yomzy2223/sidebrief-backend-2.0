const Validator = require("fastest-validator");

const validate = new Validator();

//ProductRequest
const ProductRequestInitializationSchema = {
  userId: { type: "string", min: 3, max: 100 },
};

const initializeProductRequestCredentials = validate.compile(
  ProductRequestInitializationSchema
);

const produtQASchema = {
  question: { type: "string", min: 3, max: 255 },
  answer: { type: "array", min: 3, max: 300 },
};
const productQACredentials = validate.compile(produtQASchema);

const ProductRequestServiceIdSchema = {
  productId: { type: "string", min: 3, max: 255 },
  requestId: { type: "string", min: 3, max: 300 },
};
const productIdCredentials = validate.compile(ProductRequestServiceIdSchema);

const ProductRequestSubmissionSchema = {
  requestId: { type: "string", items: "string", min: 3, max: 50 },
};
const submitProductRequestCredentials = validate.compile(
  ProductRequestSubmissionSchema
);

export {
  initializeProductRequestCredentials,
  submitProductRequestCredentials,
  productIdCredentials,
  productQACredentials,
};
