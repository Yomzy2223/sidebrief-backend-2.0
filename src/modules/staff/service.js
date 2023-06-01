const { PrismaClient } = require("@prisma/client");
const logger = require("../../config/logger");
const { hasher, matchChecker } = require("../../common/hash");
const { generateToken, verifyUserToken } = require("../../common/token");
const EmailSender = require("../../services/emailEngine");
const prisma = new PrismaClient();

//IN PROGRESS

//create staff service
const saveStaff = async (staffPayload) => {
  try {
    const checkStaff = await prisma.staff.findUnique({
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
    const staff = await prisma.staff.create({ data: values });

    if (!staff) {
      return { error: "Error occured while creating staff", statusCode: 400 };
    }

    const staffSecret = process.env.TOKEN_STAFF_SECRET;
    const emailVerificationToken = generateToken(
      { id: staff.id },
      staffSecret,
      "30m"
    );

    const url = `${process.env.BASE_URL}/staff/activate/${emailVerificationToken}`;
    //send staff email
    const subject = "Welcome to Sidebrief.";
    payload = {
      name: staffPayload.firstName,
      url: url,
    };
    const senderEmail = '"Sidebrief" <hey@sidebrief.com>';
    const recipientEmail = staffPayload.email;
    EmailSender(
      subject,
      payload,
      recipientEmail,
      senderEmail,
      "../view/welcomeStaff.ejs"
    );

    logger.info({
      message: `${staffPayload.firstName} ${staffPayload.lastName} created an account successfully with ${staffPayload.email}.`,
    });

    return {
      message: "staff created successfully",
      data: {
        id: staff.id,
        firstName: staff.firstName,
        lastName: staff.lastName,
        email: staff.email,
        phone: staff.phone,
        picture: staff.picture,
        verified: staff.verified,
      },
      statusCode: 200,
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
    const staff = await prisma.staff.findUnique({ where: { id: id } });
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
    const staff = await prisma.staff.findUnique({
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

// verify staff account service
const verifyStaffAccount = async (verifyPayload) => {
  try {
    const staffSecret = process.env.TOKEN_STAFF_SECRET;
    const staff = await verifyUserToken(verifyPayload, staffSecret);

    if (staff.error) {
      return {
        error: staff.error,
        statusCode: staff.statusCode,
      };
    }

    const checkStaff = await prisma.staff.findUnique({
      where: { id: staff.id },
    });

    if (checkStaff === null) {
      return {
        error: "Staff not found.",
        statusCode: 400,
      };
    }

    if (checkStaff.verified == true) {
      return {
        statusCode: 400,
        error: "This account is already verified.",
      };
    }

    const updateStaff = await prisma.staff.update({
      where: { id: checkStaff.id },
      data: { verified: true },
    });

    return {
      message: "Your account is now verified.",
      statusCode: 200,
    };
  } catch (error) {
    logger.error({
      message: `error occured while verifying this staff with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

// forgot password service
const forgotPassword = async (resetPayload) => {
  try {
    // take the email from the controller
    // check that the email is registered to a staff account
    // generate reset token string
    // save and send the reset token the staff

    const staff = await prisma.staff.findUnique({
      where: { email: resetPayload.email },
    });

    if (staff === null) {
      return {
        error: "staff not found!.",
        statusCode: 400,
      };
    }

    const staffSecret = process.env.TOKEN_STAFF_SECRET;
    const staffToken = await generateToken(resetPayload, staffSecret, "30m");

    if (staffToken.error) {
      return {
        error: staffToken.error,
        statusCode: staffToken.statusCode,
      };
    }

    const cryptedToken = await await hasher(staffToken, 12);

    const updatedStaff = await prisma.staff.update({
      where: { id: staff.id },
      data: { resetToken: cryptedToken },
    });

    const url = `${process.env.BASE_URL}/reset-password/${staffToken}`;

    //send staff email
    const subject = "Reset Password.";
    payload = {
      name: staff.firstName,
      url: url,
    };
    const senderEmail = '"Sidebrief" <hey@sidebrief.com>';
    const recipientEmail = staff.email;
    EmailSender(
      subject,
      payload,
      recipientEmail,
      senderEmail,
      "../view/welcomeStaff.ejs"
    );

    return {
      message: "Email reset code has been sent to your email",
      statusCode: 200,
    };
  } catch (error) {
    logger.error({
      message: `error occured while sending reset link with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

// change password service
const changePassword = async (changePayload) => {
  // take the email, resetToken and password from the controller
  // check that the email is registered to a staff account
  // compare the token with the one saved in the database
  // save the new password and update reset token to null

  try {
    const staff = await prisma.staff.findUnique({
      where: { email: changePayload.email },
    });

    if (staff === null) {
      return {
        error: "staff not found!.",
        statusCode: 400,
      };
    }

    let checkToken = await matchChecker(changePayload.token, staff.resetToken);

    if (!checkToken)
      return {
        error: "Invalid token",
        statusCode: 400,
      };

    const cryptedPassword = await hasher(changePayload.password, 12);

    const updateStaff = await prisma.staff.update({
      where: { id: staff.id },
      data: { resetToken: null, password: cryptedPassword },
    });

    return {
      message: "Password reset successfully",
      statusCode: 200,
    };
  } catch (error) {
    logger.error({
      message: `error occured while reseting password with error message: ${error}`,
    });

    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};
module.exports = {
  saveStaff,
  getStaff,
  loginStaff,
  verifyStaffAccount,
  forgotPassword,
  changePassword,
};
