const { PrismaClient } = require("@prisma/client");
const logger = require("../../config/logger");
const { hasher, matchChecker } = require("../../common/hash");
const { generateToken, verifyUserToken } = require("../../common/token");
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
      { id: user.id },
      staffSecret,
      "30m"
    );
    console.log("emailVerificationToken", emailVerificationToken);
    const url = `${process.env.BASE_URL}/staff/activate/${emailVerificationToken}`;
    console.log("url", url);
    //send user email
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
        token: token,
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
module.exports = { saveStaff, getStaff, loginStaff, verifyStaffAccount };
