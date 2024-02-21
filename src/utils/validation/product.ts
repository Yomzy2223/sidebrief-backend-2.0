const Validator = require("fastest-validator");

const validate = new Validator();

// product service

const productServiceSchema = {
  name: { type: "string", min: 3, max: 50 },
  currency: { type: "string", min: 3, max: 50 },
  description: { type: "string", min: 3, max: 255 },
  country: { type: "string", min: 3, max: 50 },
  amount: { type: "number", min: 3, max: 50 },
  timeline: { type: "string", min: 3, max: 50 },
  feature: { type: "array", items: "string", min: 1 },
};

const validateProductService = validate.compile(productServiceSchema);

// product form

const productFormSchema = {
  question: { type: "string", min: 3, max: 255 },
  type: { type: "string", min: 3, max: 50 },
  options: { type: "array", items: "string", min: 3 },
  productId: { type: "string", min: 6, max: 50 },
};

const validateProductForm = validate.compile(productFormSchema);

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
  validateProductForm,
};
