const { hasher } = require("../../common/hash");
const {
  getStaff,
  loginStaff,
  saveStaff,
  verifyStaffAccount,
  forgotPassword,
  changePassword,
  deleteStaff,
} = require("./service");

//IN PROGRESS
// collect payload from the request body
// pass the payload to the service
// return response to client
exports.StaffRegisration = async (req, res, next) => {
  try {
    const staffPayload = req.body;

    const cryptedPassword = await hasher(staffPayload.password, 12);

    const values = {
      firstName: staffPayload.firstName,
      lastName: staffPayload.lastName,
      email: staffPayload.email.toLowerCase(),
      password: cryptedPassword,
      phone: staffPayload.phone,
      verified: false,
    };

    const staff = await saveStaff(values);

    return res.status(200).json(staff);
  } catch (error) {
    next(error);
  }
};

//get a staff with id
exports.StaffProfileFetcher = async (req, res, next) => {
  try {
    // check if there is id
    // pass the id to the service
    // return staff to client

    const id = req.params.id;
    const staff = await getStaff(id);

    return res.status(200).json(staff);
  } catch (error) {
    next(error);
  }
};

exports.StaffLogin = async (req, res, next) => {
  try {
    // get the validated login payload
    // pass the validated payload to login service
    // generate token
    // return staff and the token to client

    const loginPayload = req.body;
    const staff = await loginStaff(loginPayload);

    return res.status(200).json(staff);
  } catch (error) {
    next(error);
  }
};

exports.StaffVerification = async (req, res, next) => {
  try {
    const verifyPayload = req.params.token;

    const verify = await verifyStaffAccount(verifyPayload);
    return res.status(verify.statusCode).json({ message: verify.message });
  } catch (error) {
    next(error);
  }
};

exports.StaffPasswordResetLink = async (req, res, next) => {
  try {
    const email = req.body;

    const reset = await forgotPassword(email);

    return res.status(reset.statusCode).json({ message: reset.message });
  } catch (error) {
    next(error);
  }
};

exports.StaffPasswordReset = async (req, res, next) => {
  try {
    // get the login payload
    // validate the payload
    // pass the payload to reset service
    // return staff and the token to client

    const loginPayload = req.body;
    const staffPass = await changePassword(loginPayload);

    return res
      .status(staffPass.statusCode)
      .json({ message: staffPass.message });
  } catch (error) {
    next(error);
  }
};

//get a staff with id
exports.StaffRemover = async (req, res, next) => {
  try {
    // check if there is id
    // pass the id to the service
    // return staff to client

    const id = req.params.id;

    const staff = await deleteStaff(id);

    return res.status(staff.statusCode).json({ message: staff.message });
  } catch (error) {
    next(error);
  }
};
