const Validator = require("fastest-validator");

const validate = new Validator();

// product service

const productServiceSchema = {
  name: { type: "string", min: 3, max: 50 },
  type: { type: "string", min: 3, max: 50 },
  code: { type: "string", min: 1, max: 10 },
  description: { type: "string", min: 3, max: 255 },
  country: { type: "string", min: 3, max: 50 },
  price: { type: "string", min: 3, max: 50 },
  timeline: { type: "string", min: 3, max: 50 },
  feature: { type: "array", items: "string", min: 1 },
  numberOfShares: { type: "string", min: 1, max: 100 },
};

const validateProductService = validate.compile(productServiceSchema);

// service form

const serviceFormSchema = {
  question: { type: "string", min: 3, max: 255 },
  type: { type: "string", min: 3, max: 50 },
  options: { type: "array", items: "string", min: 3 },
  serviceId: { type: "string", min: 6, max: 50 },
};

const validateServiceForm = validate.compile(serviceFormSchema);

// product

const productSchema = {
  userId: { type: "string", min: 6, max: 50 },
  country: { type: "string", min: 3, max: 50 },
};

const validateProduct = validate.compile(productSchema);

// form

const formSchema = {
  question: { type: "string", min: 3, max: 255 },
  answer: { type: "any", min: 1, max: 255 },
  isGeneral: "boolean",
};

const validateForm = validate.compile(formSchema);

export {
  validateProductService,
  validateForm,
  validateProduct,
  validateServiceForm,
};
