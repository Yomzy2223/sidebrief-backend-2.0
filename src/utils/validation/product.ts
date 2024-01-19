const Validator = require("fastest-validator");

const validate = new Validator();

//product
const productInitializationSchema = {
  userId: { type: "string", min: 3, max: 50 },
  country: { type: "string", min: 6, max: 200 },
  question: { type: "string", min: 6, maz: 500 },
  answer: { type: "string", min: 6, maz: 500 },
};

const initializeProductCredentials = validate.compile(
  productInitializationSchema
);

const produtQASchema = {
  questionn: { type: "string", min: 3, max: 255 },
  answer: { type: "array", min: 3, max: 300 },
};
const producQACredentials = validate.compile(produtQASchema);

const productSubmissionSchema = {
  productId: { type: "string", items: "string", min: 3, max: 50 },
};
const submitProductCredentials = validate.compile(productSubmissionSchema);

export {
  initializeProductCredentials,
  submitProductCredentials,
  producQACredentials,
};
