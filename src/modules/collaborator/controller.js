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
exports.CollaboratorRegisration = async (req, res) => {
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
  if (collaborator.error) {
    return res
      .status(collaborator.statusCode)
      .json({ error: collaborator.error });
  }
  return res.status(200).json(collaborator);
};

//get a collaborator with id
exports.CollectorProfileFetcher = async (req, res) => {
  // check if there is id
  // pass the id to the service
  // return collaborator to client

  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      error: "Please provide id",
    });
  }
  const collaborator = await getCollaborator(id);

  if (collaborator.error) {
    return res
      .status(collaborator.statusCode)
      .json({ error: collaborator.error });
  }
  return res.status(200).json(collaborator);
};

exports.CollaboratorLogin = async (req, res) => {
  // get the login payload
  // validate the payload
  // pass wht payload to login service
  // generate token
  // return collaborator and the token to client

  const collaboratorPayload = req.body;

  const collaborator = await loginCollaborator(collaboratorPayload);

  if (collaborator.error) {
    return res
      .status(collaborator.statusCode)
      .json({ error: collaborator.error });
  }
  return res.status(200).json(collaborator);
};

exports.CollaboratorVerification = async (req, res) => {
  const verifyPayload = req.params.token;

  const verify = await verifyCollaboratorAccount(verifyPayload);
  if (verify.error) {
    return res.status(verify.statusCode).json({ error: verify.error });
  }
  return res.status(verify.statusCode).json({ message: verify.message });
};

exports.CollaboratorPasswordResetLink = async (req, res) => {
  const email = req.body;
  // check that email is not empty

  if (!email) {
    return res.status(400).json({
      message: "Please provide your email address.",
    });
  }

  const reset = await forgotPassword(email);

  if (reset.error) {
    return res.status(reset.statusCode).json({ error: reset.error });
  }
  return res.status(reset.statusCode).json({ message: reset.message });
};

exports.CollaboratorPasswordReset = async (req, res) => {
  // get the login payload
  // validate the payload
  // pass the payload to reset service

  // return collaborator and the token to client

  const loginPayload = req.body;

  const collaboratorPass = await changePassword(loginPayload);

  if (collaboratorPass.error) {
    return res
      .status(collaboratorPass.statusCode)
      .json({ error: collaboratorPass.error });
  }
  return res
    .status(collaboratorPass.statusCode)
    .json({ message: collaboratorPass.message });
};

//delete a collaborator with id
exports.CollaboratorRemover = async (req, res) => {
  // check if there is id
  // pass the id to the service
  // return collaborator to client

  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      error: "Please provide id",
    });
  }
  const collaborator = await deleteCollaborator(id);

  if (collaborator.error) {
    return res
      .status(collaborator.statusCode)
      .json({ error: collaborator.error });
  }
  return res
    .status(collaborator.statusCode)
    .json({ message: collaborator.message });
};

// IN PROGRESS
exports.ControllerProfileModifier = async (req, res) => {
  // get the updatePayload and the user id
  // validate the payload
  // pass the payload and the id to update service

  // return collaborator and message

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
};

exports.CollaboratorDocument = async (req, res) => {
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
exports.CollectorDocumentsFetcher = async (req, res) => {
  // check if there is id
  // pass the id to the service
  // return collaborator to client

  const id = req.params.collaboratorId;
  if (!id) {
    return res.status(400).json({
      error: "Please provide id",
    });
  }
  const collaboratorDoc = await getDocumentByCollaboratorId(id);

  if (collaboratorDoc.error) {
    return res
      .status(collaboratorDoc.statusCode)
      .json({ error: collaboratorDoc.error });
  }
  return res.status(200).json(collaboratorDoc);
};
