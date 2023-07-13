const { hasher } = require("../../common/hash");
const {
  validateUserCredentials,
  validateCollaborator,
  validateResetCredentials,
  validateDocument,
} = require("../../utils/validation");
const {
  getCollaborator,
  loginCollaborator,
  saveCollaborator,
  verifyCollaboratorAccount,
  forgotPassword,
  changePassword,
  updateProfile,
  saveDocument,
  getDocumentByCollaboratorId,
  deleteCollaborator,
} = require("./service");

//IN PROGRESS
// collect payload from the request body
// pass the payload to the service
// return response to client
exports.CollaboratorRegisration = async (req, res, next) => {
  try {
    const collaboratorPayload = req.body;

    const cryptedPassword = await hasher(collaboratorPayload.password, 12);

    const values = {
      firstName: collaboratorPayload.firstName,
      lastName: collaboratorPayload.lastName,
      email: collaboratorPayload.email.toLowerCase(),
      password: cryptedPassword,
      phone: collaboratorPayload.phone,
      verified: false,
      isPartner: collaboratorPayload.isPartner,
    };

    const collaborator = await saveCollaborator(values);
    return res.status(200).json(collaborator);
  } catch (error) {
    next(error);
  }
};

//get a collaborator with id
exports.CollectorProfileFetcher = async (req, res, next) => {
  try {
    // check if there is id
    // pass the id to the service
    // return collaborator to client

    const id = req.params.id;
    const collaborator = await getCollaborator(id);

    return res.status(200).json(collaborator);
  } catch (error) {
    next(error);
  }
};

exports.CollaboratorLogin = async (req, res, next) => {
  try {
    // get the login payload
    // validate the payload
    // pass wht payload to login service
    // generate token
    // return collaborator and the token to client

    const collaboratorPayload = req.body;

    const collaborator = await loginCollaborator(collaboratorPayload);

    return res.status(200).json(collaborator);
  } catch (error) {
    next(error);
  }
};

exports.CollaboratorVerification = async (req, res, next) => {
  try {
    const verifyPayload = req.params.token;

    const verify = await verifyCollaboratorAccount(verifyPayload);

    return res.status(verify.statusCode).json({ message: verify.message });
  } catch (error) {
    next(error);
  }
};

exports.CollaboratorPasswordResetLink = async (req, res, next) => {
  try {
    const email = req.body;
    // check that email is not empty
    // CREATE VALIDATION SCHEMA FOR THIS
    if (!email) {
      return res.status(400).json({
        message: "Please provide your email address.",
      });
    }

    const reset = await forgotPassword(email);

    return res.status(reset.statusCode).json({ message: reset.message });
  } catch (error) {
    next(error);
  }
};

exports.CollaboratorPasswordReset = async (req, res, next) => {
  try {
    // get the login payload
    // validate the payload
    // pass the payload to reset service

    // return collaborator and the token to client

    const loginPayload = req.body;

    const collaboratorPass = await changePassword(loginPayload);

    return res
      .status(collaboratorPass.statusCode)
      .json({ message: collaboratorPass.message });
  } catch (error) {
    next(next);
  }
};

//delete a collaborator with id
exports.CollaboratorRemover = async (req, res, next) => {
  try {
    // check if there is id
    // pass the id to the service
    // return collaborator to client

    const id = req.params.id;
    const collaborator = await deleteCollaborator(id);

    return res
      .status(collaborator.statusCode)
      .json({ message: collaborator.message });
  } catch (error) {
    next(error);
  }
};

// IN PROGRESS
exports.ControllerProfileModifier = async (req, res, next) => {
  try {
    // get the updatePayload and the user id
    // validate the payload
    // pass the payload and the id to update service

    // return collaborator and message
    //CREATE VALIDATOR
    const id = req.params.id;
    const updatePayload = req.body;

    const isValidCollaborator = await validateResetCredentials(updatePayload);
    if (isValidCollaborator === true) {
      const collaboratorUpdate = await updateProfile(updatePayload, id);

      if (collaboratorUpdate.error) {
        return res
          .status(collaboratorUpdate.statusCode)
          .json({ error: collaboratorUpdate.error });
      }
      return res
        .status(collaboratorUpdate.statusCode)
        .json({ message: collaboratorUpdate.message });
    }

    return res.status(400).json({ error: isValidCollaborator[0].message });
  } catch (error) {
    next(error);
  }
};

exports.CollaboratorDocument = async (req, res, next) => {
  const documentPayload = req.body;
  const id = req.params.collaboratorId;
  console.log("dsfdfsdfsdfs", id);
  const isValidDocument = validateDocument(documentPayload);

  if (isValidDocument === true) {
    const values = {
      name: documentPayload.name,
      type: documentPayload.type,
      description: documentPayload.description,
      collaboratorId: id,
    };

    const document = await saveDocument(values, id);
    if (document.error) {
      return res.status(document.statusCode).json({ error: document.error });
    }
    return res.status(200).json(document);
  }

  return res.status(400).json({ error: isValidDocument[0].message });
};

//get collaborator documents with id
exports.CollectorDocumentsFetcher = async (req, res, next) => {
  try {
    // check if there is id
    // pass the id to the service
    // return collaborator to client

    const id = req.params.collaboratorId;
    const collaboratorDoc = await getDocumentByCollaboratorId(id);

    return res.status(200).json(collaboratorDoc);
  } catch (error) {
    next(error);
  }
};
