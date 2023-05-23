const logger = require("../../config/logger");
const models = require("../../data/models/index");
const { hasher, matchChecker } = require("../../common/hash");
const { generateToken } = require("../../common/token");

//IN PROGRESS

//create staff service
const saveStaff = async (staffPayload) => {
  try {
    const checkStaff = await models.Staff.findOne({
      where: { email: staffPayload.email.toLowerCase() },
    });

    if (checkStaff !== null) {
      return { error: "staff with this email already exists", statusCode: 400 };
    }

    const cryptedPassword = await hasher(staffPayload.password, 12);

    const values = {
      firstName: staffPayload.firstName,
      lastName: staffPayload.lastName,
      email: staffPayload.email.toLowerCase(),
      password: cryptedPassword,
      phone: staffPayload.phone,
      verified: false,
    };
    const staff = await models.Staff.create(values);

    if (!staff) {
      return { error: "Error occured while creating staff", statusCode: 400 };
    }

    logger.info({
      message: `${staffPayload.firstName} ${staffPayload.lastName} created an account successfully with ${staffPayload.email}.`,
    });

    return {
      message: "staff created successfully",
      data: staff,
    };
  } catch (error) {
    logger.error({
      message: `error occured while creating an account for ${staffPayload.email} with error message: ${error}`,
    });

    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

//get a staff service
const getStaff = async (id) => {
  //   //check if the staff exists
  //   //return the staff to the staff controller

  try {
    const staff = await models.Staff.findByPk(id);
    if (staff === null) {
      return {
        error: "staff not found!.",
        statusCode: 400,
      };
    }
    return {
      message: "Staff fetched successfully",
      data: {
        id: staff.id,
        firstName: staff.firstName,
        lastName: staff.lastName,
        email: staff.email,
        phone: staff.phone,
        picture: staff.picture,
        token: token,
        verified: staff.verified,
      },
    };
  } catch (error) {
    logger.error({
      message: `error occured while fetching staff with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};
//sign in service
const loginStaff = async (loginPayload) => {
  // take the login payload  from the controller
  //   //check if the staff exists with the email address
  //   //return the staff to the staff controller

  try {
    const staff = await models.Staff.findOne({
      where: { email: loginPayload.email },
    });

    if (staff === null) {
      return {
        error: "staff not found!.",
        statusCode: 400,
      };
    }

    let checkPassword = await matchChecker(
      loginPayload.password,
      staff.password
    );

    if (!checkPassword)
      return {
        error: "Invalid credentials",
        statusCode: 400,
      };

    const staffSecret = process.env.TOKEN_STAFF_SECRET;
    const token = generateToken({ id: staff.id }, staffSecret, "14d");
    logger.info({
      message: `staff with ${loginPayload.email} signed in successfully.`,
    });

    return {
      message: "Login successfully",
      data: {
        id: staff.id,
        firstName: staff.firstName,
        lastName: staff.lastName,
        email: staff.email,
        phone: staff.phone,
        picture: staff.picture,
        token: token,
        verified: staff.verified,
      },
    };
  } catch (error) {
    logger.error({
      message: `error occured while fetching staff with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};
module.exports = { saveStaff, getStaff, loginStaff };
