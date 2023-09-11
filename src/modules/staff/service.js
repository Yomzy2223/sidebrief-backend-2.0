const { PrismaClient } = require("@prisma/client");
const logger = require("../../config/logger");
const { hasher, matchChecker } = require("../../common/hash");
const { generateToken, verifyUserToken } = require("../../common/token");
const EmailSender = require("../../services/emailEngine");
const { BadRequest } = require("../../utils/requestErrors");
const prisma = new PrismaClient();

//IN PROGRESS

//create staff service
const saveStaff = async (staffPayload) => {
  try {
    const checkStaff = await prisma.staff.findUnique({
      where: { email: staffPayload.email },
    });

    if (checkStaff) {
      throw new BadRequest("staff with this email already exists");
    }

    const staff = await prisma.staff.create({ data: staffPayload });

    if (!staff) {
      throw new BadRequest("Error occured while creating staff");
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

    const staffTokenSecret = process.env.TOKEN_STAFF_SECRET;
    const token = generateToken({ id: staff.id }, staffTokenSecret, "14d");

    return {
      message: "Staff created successfully",
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
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//get a staff service
const getStaff = async (id) => {
  //   //check if the staff exists
  //   //return the staff to the staff controller

  try {
    const staff = await prisma.staff.findUnique({ where: { id: id } });
    if (!staff) {
      throw new BadRequest("staff not found!.");
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
        verified: staff.verified,
      },
    };
  } catch (error) {
    throw error;
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

    if (!staff) {
      throw new BadRequest("staff not found!.");
    }

    let checkPassword = await matchChecker(
      loginPayload.password,
      staff.password
    );

    if (!checkPassword) {
      throw new BadRequest("Invalid credentials!");
    }

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
    throw error;
  }
};

// verify staff account service
const verifyStaffAccount = async (verifyPayload) => {
  try {
    const staffSecret = process.env.TOKEN_STAFF_SECRET;
    const staff = await verifyUserToken(verifyPayload, staffSecret);

    const checkStaff = await prisma.staff.findUnique({
      where: { id: staff.id },
    });

    if (!checkStaff) {
      throw new BadRequest("Staff not found");
    }

    if (checkStaff.verified == true) {
      throw new BadRequest("This account is already verified.");
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
    throw error;
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

    if (!staff) {
      throw new BadRequest("Staff not found");
    }

    const staffSecret = process.env.TOKEN_STAFF_SECRET;
    const staffToken = await generateToken(resetPayload, staffSecret, "30m");

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
    throw error;
  }
};

// change password service
const changePassword = async (changePayload) => {
  // compare the token with the one saved in the database
  // save the new password and update reset token to null

  try {
    const staff = await prisma.staff.findUnique({
      where: { email: changePayload.token },
    });

    if (!staff) {
      throw new BadRequest("Invalid token or Staff not found");
    }

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
    console.log("sdds", error);
    throw error;
  }
};

// delete staff account
const deleteStaff = async (id) => {
  try {
    const staff = await prisma.staff.findUnique({ where: { id: id } });
    if (!staff) {
      throw new BadRequest("Staff not found");
    }

    const deleteStaff = await prisma.staff.delete({
      where: { id: staff.id },
    });

    if (!deleteStaff) {
      throw new BadRequest("Error occurred while deleting staff");
    }

    return {
      message: "Staff deleted successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  saveStaff,
  getStaff,
  loginStaff,
  verifyStaffAccount,
  forgotPassword,
  changePassword,
  deleteStaff,
};
