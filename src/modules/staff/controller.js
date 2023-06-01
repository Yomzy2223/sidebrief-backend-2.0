const {
  validatestaff,
  validatestaffCredentials,
  validateUserCredentials,
  validateStaff,
  validateResetCredentials,
} = require("../../utils/validation");
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
exports.StaffRegisration = async (req, res) => {
  const staffPayload = req.body;
  const isValidStaff = validateStaff(staffPayload);

  if (isValidStaff === true) {
    const staff = await saveStaff(staffPayload);
    if (staff.error) {
      return res.status(staff.statusCode).json({ error: staff.error });
    }
    return res.status(200).json(staff);
  }

  return res.status(400).json({ error: isValidStaff[0].message });
};

//get a staff with id
exports.StaffProfileFetcher = async (req, res) => {
  // check if there is id
  // pass the id to the service
  // return staff to client

  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      error: "Please provide id",
    });
  }
  const staff = await getStaff(id);

  if (staff.error) {
    return res.status(staff.statusCode).json({ error: staff.error });
  }
  return res.status(200).json(staff);
};

exports.StaffLogin = async (req, res) => {
  // get the login payload
  // validate the payload
  // pass wht payload to login service
  // generate token
  // return staff and the token to client

  const loginPayload = req.body;
  isValidStaff = await validateUserCredentials(loginPayload);
  if (isValidStaff === true) {
    const staff = await loginStaff(loginPayload);

    if (staff.error) {
      return res.status(staff.statusCode).json({ error: staff.error });
    }
    return res.status(200).json(staff);
  }

  return res.status(400).json({ error: isValidStaff[0].message });
};

exports.StaffVerification = async (req, res) => {
  const verifyPayload = req.params.token;

  const verify = await verifyStaffAccount(verifyPayload);
  if (verify.error) {
    return res.status(verify.statusCode).json({ error: verify.error });
  }
  return res.status(verify.statusCode).json({ message: verify.message });
};

exports.StaffPasswordResetLink = async (req, res) => {
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

exports.StaffPasswordReset = async (req, res) => {
  // get the login payload
  // validate the payload
  // pass the payload to reset service

  // return staff and the token to client

  const loginPayload = req.body;
  isValidStaff = await validateResetCredentials(loginPayload);
  if (isValidStaff === true) {
    const staffPass = await changePassword(loginPayload);

    if (staffPass.error) {
      return res.status(staffPass.statusCode).json({ error: staffPass.error });
    }
    return res
      .status(staffPass.statusCode)
      .json({ message: staffPass.message });
  }

  return res.status(400).json({ error: isValidStaff[0].message });
};

//get a staff with id
exports.StaffRemover = async (req, res) => {
  // check if there is id
  // pass the id to the service
  // return staff to client

  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      error: "Please provide id",
    });
  }
  const staff = await deleteStaff(id);

  if (staff.error) {
    return res.status(staff.statusCode).json({ error: staff.error });
  }
  return res.status(staff.statusCode).json({ message: staff.message });
};
