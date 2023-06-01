const {
  validateUser,
  validateUserCredentials,
  validateResetCredentials,
} = require("../../utils/validation");
const {
  saveUser,
  getUser,
  loginUser,
  getAllUsers,
  verifyAccount,
  sendResetPasswordCode,
  forgotPassword,
  changePassword,
} = require("./service");

//IN PROGRESS

exports.UserRegisration = async (req, res) => {
  const userPayload = req.body;

  const isValidUser = validateUser(userPayload);

  if (isValidUser === true) {
    const user = await saveUser(userPayload);

    if (user.error) {
      return res.status(user.statusCode).json({ error: user.error });
    }
    return res
      .status(user.statusCode)
      .json({ message: user.message, data: user.data });
  }

  return res.status(400).json({ error: isValidUser[0].message });
};

//get a user with id
exports.UserFetcher = async (req, res) => {
  // check if there is id
  // pass the id to the service
  // return user to client

  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      error: "Please provide id",
    });
  }
  const user = await getUser(id);

  if (user.error) {
    return res.status(user.statusCode).json({ error: user.error });
  }
  return res
    .status(user.statusCode)
    .json({ message: user.message, data: user.data });
};

//get all users controller
exports.UsersFetcher = async (req, res) => {
  // call the getAllUsers service
  // return user to client

  const users = await getAllUsers();

  if (users.error) {
    return res.status(users.statusCode).json({ error: users.error });
  }

  return res
    .status(users.statusCode)
    .json({ message: users.message, data: users.data });
};

exports.UserGrantor = async (req, res) => {
  // get the login payload
  // validate the payload
  // pass wht payload to login service
  // generate token
  // return user and the token to client

  const loginPayload = req.body;
  isValidUser = await validateUserCredentials(loginPayload);
  if (isValidUser === true) {
    const user = await loginUser(loginPayload);

    if (user.error) {
      return res.status(user.statusCode).json({ error: user.error });
    }
    return res.status(200).json(user);
  }

  return res.status(400).json({ error: isValidUser[0].message });
};

exports.UserVerification = async (req, res) => {
  const verifyPayload = req.params.token;

  const verify = await verifyAccount(verifyPayload);
  if (verify.error) {
    return res.status(verify.statusCode).json({ error: verify.error });
  }
  return res.status(verify.statusCode).json({ message: verify.message });
};

exports.UserPasswordResetLink = async (req, res) => {
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

exports.UserPasswordReset = async (req, res) => {
  // get the login payload
  // validate the payload
  // pass the payload to reset service

  // return user and the token to client

  const loginPayload = req.body;
  isValidUser = await validateResetCredentials(loginPayload);
  if (isValidUser === true) {
    const userPass = await changePassword(loginPayload);

    if (userPass.error) {
      return res.status(userPass.statusCode).json({ error: userPass.error });
    }
    return res.status(userPass.statusCode).json({ message: userPass.message });
  }

  return res.status(400).json({ error: isValidUser[0].message });
};
