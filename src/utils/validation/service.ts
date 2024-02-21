const Validator = require("fastest-validator");

const validate = new Validator();

//service category

const serviceFormSchema = {
  questionn: { type: "string", min: 3, max: 255 },
  answer: { type: "array", min: 3, max: 300 },
  options: { type: "array", items: "string", min: 3, max: 300 },
};
const serviceFormCredentials = validate.compile(serviceFormSchema);

const serviceCategorySchema = {
  name: { type: "string", min: 3, max: 50 },
  description: { type: "string", min: 3, max: 255 },
};

const validateServiceCategory = validate.compile(serviceCategorySchema);

export { validateServiceCategory, serviceFormCredentials };
