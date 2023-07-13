const { hasher } = require("../../common/hash");
const { validateResetCredentials } = require("../../utils/validation");
const {
  saveUser,
  getUser,
  loginUser,
  getAllUsers,
  verifyAccount,
  sendResetPasswordCode,
  forgotPassword,
  changePassword,
  updateProfile,
  deleteUser,
} = require("./service");

exports.UserRegisration = async (req, res, next) => {
  try {
    const userPayload = req.body;
    const cryptedPassword = await hasher(userPayload.password, 12);
    const values = {
      firstName: userPayload.firstName,
      lastName: userPayload.lastName,
      username: userPayload.username,
      email: userPayload.email.toLowerCase(),
      password: cryptedPassword,
      phone: userPayload.phone,
      verified: false,
      referral: userPayload.referral,
    };

    const user = await saveUser(values);

    return res
      .status(user.statusCode)
      .json({ message: user.message, data: user.data });
  } catch (error) {
    next(error);
  }
};

//get a user with id
exports.UserFetcher = async (req, res, next) => {
  try {
    // check if there is id
    // pass the id to the service
    // return user to client

    const id = req.params.id;
    const user = await getUser(id);

    return res
      .status(user.statusCode)
      .json({ message: user.message, data: user.data });
  } catch (error) {
    next(error);
  }
};

//get all users controller
exports.UsersFetcher = async (req, res, next) => {
  try {
    // call the getAllUsers service
    // return user to client

    const users = await getAllUsers();

    return res
      .status(users.statusCode)
      .json({ message: users.message, data: users.data });
  } catch (error) {
    next(error);
  }
};

exports.UserGrantor = async (req, res, next) => {
  try {
    // get the login payload
    // validate the payload
    // pass wht payload to login service
    // generate token
    // return user and the token to client

    const loginPayload = req.body;

    const user = await loginUser(loginPayload);

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

exports.UserVerification = async (req, res, next) => {
  try {
    const verifyPayload = req.params.token;

    const verify = await verifyAccount(verifyPayload);

    return res.status(verify.statusCode).json({ message: verify.message });
  } catch (error) {
    next(error);
  }
};

exports.UserPasswordResetLink = async (req, res, next) => {
  try {
    const email = req.body;
    // check that email is not empty
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

exports.UserPasswordReset = async (req, res, next) => {
  try {
    // get the login payload
    // validate the payload
    // pass the payload to reset service

    // return the response to the client

    const loginPayload = req.body;
    const userPass = await changePassword(loginPayload);

    return res.status(userPass.statusCode).json({ message: userPass.message });
  } catch (error) {
    next(error);
  }
};

//get a user with id
exports.UserRemover = async (req, res, next) => {
  try {
    // check if there is id
    // pass the id to the service
    // return user to client

    const id = req.params.id;

    const user = await deleteUser(id);

    return res.status(user.statusCode).json({ message: user.message });
  } catch (error) {
    next(error);
  }
};

// IN PROGRESS
exports.UserProfileModifier = async (req, res, next) => {
  try {
    // get the updatePayload and the user id
    // validate the payload
    // pass the payload and the id to update service

    // return user and message

    const id = req.params.id;
    const updatePayload = req.body;

    const userUpdate = await updateProfile(updatePayload, id);

    return res
      .status(userUpdate.statusCode)
      .json({ message: userUpdate.message });
  } catch (error) {
    next(error);
  }
};
