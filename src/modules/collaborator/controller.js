const {
  validateUserCredentials,
  validateCollaborator,
  validateResetCredentials,
} = require("../../utils/validation");
const {
  getCollaborator,
  loginCollaborator,
  saveCollaborator,
  verifyCollaboratorAccount,
  forgotPassword,
  changePassword,
  deleteCollaborator,
} = require("./service");

//IN PROGRESS
// collect payload from the request body
// pass the payload to the service
// return response to client
exports.CollaboratorRegisration = async (req, res) => {
  const collaboratorPayload = req.body;
  const isValidCollaborator = validateCollaborator(collaboratorPayload);

  if (isValidCollaborator === true) {
    const collaborator = await saveCollaborator(collaboratorPayload);
    if (collaborator.error) {
      return res
        .status(collaborator.statusCode)
        .json({ error: collaborator.error });
    }
    return res.status(200).json(collaborator);
  }

  return res.status(400).json({ error: isValidCollaborator[0].message });
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
  isValidCollaborator = await validateUserCredentials(collaboratorPayload);
  if (isValidCollaborator === true) {
    const collaborator = await loginCollaborator(collaboratorPayload);

    if (collaborator.error) {
      return res
        .status(collaborator.statusCode)
        .json({ error: collaborator.error });
    }
    return res.status(200).json(collaborator);
  }

  return res.status(400).json({ error: isValidCollaborator[0].message });
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
  const isValidCollaborator = await validateResetCredentials(loginPayload);
  if (isValidCollaborator === true) {
    const collaboratorPass = await changePassword(loginPayload);

    if (collaboratorPass.error) {
      return res
        .status(collaboratorPass.statusCode)
        .json({ error: collaboratorPass.error });
    }
    return res
      .status(collaboratorPass.statusCode)
      .json({ message: collaboratorPass.message });
  }

  return res.status(400).json({ error: isValidCollaborator[0].message });
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
