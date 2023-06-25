const { validateServiceCategory } = require("../../utils/validation");
const {
  saveServiceCategory,
  getAllServiceCategory,
  getServiceCategory,
  updateServiceCategory,
  removeServiceCategory,
} = require("./service");

// create a new service category
exports.ServiceCategoryCreator = async (req, res) => {
  // get the validated payload from the the request body
  // send the validated payload to addServiceCategory service
  // return response to the client

  const serviceCategoryPayload = req.body;
  const category = await saveServiceCategory(serviceCategoryPayload);

  if (category.error) {
    return res.status(category.statusCode).json({ error: category.error });
  }

  return res.status(category.statusCode).json(category);
};

//get all service categories
exports.ServiceCategoriesFetcher = async (req, res) => {
  // get the service category list
  // return response to the client

  const categories = await getAllServiceCategory();
  if (categories === null) {
    return res
      .status(500)
      .json({ error: "Error occured while getting all service categories." });
  }

  return res.status(categories.statusCode).json(categories);
};

//get a service category with id
exports.ServiceCategoryFetcher = async (req, res) => {
  // check if there is id
  // pass the id to the service
  // return service category to client

  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      error: "Please provide id",
    });
  }
  const category = await getServiceCategory(id);

  if (category.error) {
    return res.status(category.statusCode).json({ error: category.error });
  }
  return res.status(category.statusCode).json(category);
};

//update a service category
exports.ServiceCategoryModifier = async (req, res) => {
  //get the payload
  // validate the payload
  // send the payload to the service
  // return response

  const id = req.params.id;
  const serviceCategoryPayload = req.body;
  const category = await updateServiceCategory(id, serviceCategoryPayload);

  if (category.error) {
    return res.status(category.statusCode).json({ error: category.error });
  }

  return res.status(category.statusCode).json(category.message);
};

//delete a service category
exports.ServiceCategoryRemover = async (req, res) => {
  //check if there is id
  // send the id to the delete service
  //return response to the client

  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      error: "Please provide id",
    });
  }
  const deleteCategory = await removeServiceCategory(id);

  if (deleteCategory.error) {
    return res
      .status(deleteCategory.statusCode)
      .json({ error: deleteCategory.error });
  }
  return res.status(deleteCategory.statusCode).json(deleteCategory.message);
};
