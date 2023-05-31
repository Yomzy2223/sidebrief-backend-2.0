const { PrismaClient } = require("@prisma/client");
const logger = require("../../config/logger");
const { hasher, matchChecker } = require("../../common/hash");
const { generateToken } = require("../../common/token");
const EmailSender = require("../../services/emailEngine");
const prisma = new PrismaClient();

//IN PROGRESS

//create user service
const saveUser = async (userPayload) => {
  try {
    const checkUser = await prisma.user.findUnique({
      where: { email: userPayload.email.toLowerCase() },
    });
    console.log(checkUser);
    if (checkUser !== null) {
      return { error: "User with this email already exists", statusCode: 400 };
    }

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
    const user = await prisma.user.create({ data: values });

    if (!user) {
      return { error: "Error occured while creating user", statusCode: 400 };
    }

    const userSecret = process.env.TOKEN_USER_SECRET;
    const emailVerificationToken = generateToken(
      { id: user.id },
      userSecret,
      "30m"
    );
    console.log("emailVerificationToken", emailVerificationToken);
    const url = `${process.env.BASE_URL}/user/activate/${emailVerificationToken}`;
    console.log("url", url);
    //send user email
    const subject = "Welcome to Sidebrief.";
    payload = {
      name: userPayload.firstName,
      url: url,
    };
    const senderEmail = '"Sidebrief" <hey@sidebrief.com>';
    const recipientEmail = userPayload.email;
    EmailSender(
      subject,
      payload,
      recipientEmail,
      senderEmail,
      "../view/welcomeUser.ejs"
    );

    logger.info({
      message: `${userPayload.firstName} ${userPayload.lastName} created an account successfully with ${userPayload.email}.`,
    });

    return {
      message: "User created successfully",
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        phone: user.phone,
        picture: user.picture,
        verified: user.verified,
        referral: user.referral,
      },
      statusCode: 200,
    };
  } catch (error) {
    logger.error({
      message: `error occured while creating an account for ${userPayload.email} with error message: ${error}`,
    });

    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

//get a user service
const getUser = async (id) => {
  //   //check if the user exists
  //   //return the user to the user controller

  try {
    const user = await prisma.user.findUnique({ where: { id: id } });
    if (user === null) {
      return {
        error: "User not found!.",
        statusCode: 400,
      };
    }
    return {
      message: "User fetched successfully",
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        phone: user.phone,
        picture: user.picture,
        verified: user.verified,
        referral: user.referral,
      },
      statusCode: 200,
    };
  } catch (error) {
    logger.error({
      message: `error occured while fetching user with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

//get all users service
const getAllUsers = async (id) => {
  //   //return the users list to the user controller

  try {
    const users = await prisma.user.findMany();

    if (users === null) {
      return {
        error: "User not found!.",
        statusCode: 400,
      };
    }

    return {
      message: "Users fetched successfully",
      data: users,
      statusCode: 200,
    };
  } catch (error) {
    logger.error({
      message: `error occured while fetching all users with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

//sign in service
const loginUser = async (loginPayload) => {
  // take the login payload  from the controller
  //   //check if the user exists with the email address
  //   //return the user to the user controller

  try {
    const user = await prisma.user.findUnique({
      where: { email: loginPayload.email },
    });

    if (user === null) {
      return {
        error: "User not found!.",
        statusCode: 400,
      };
    }

    let checkPassword = await matchChecker(
      loginPayload.password,
      user.password
    );

    if (!checkPassword)
      return {
        error: "Invalid credentials",
        statusCode: 400,
      };

    const userSecret = process.env.TOKEN_USER_SECRET;
    const token = generateToken({ id: user.id }, userSecret, "14d");
    logger.info({
      message: `User with ${loginPayload.email} signed in successfully.`,
    });

    return {
      message: "Login successfully",
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        phone: user.phone,
        picture: user.picture,
        verified: user.verified,
        referral: user.referral,
      },
    };
  } catch (error) {
    logger.error({
      message: `error occured while fetching user with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

// verify account service
verifyAccount = async (req, res) => {
  try {
    const { token } = req.body;

    const userSecret = process.env.TOKEN_USER_SECRET;
    const user = await verifyUserToken(token, userSecret);

    const checkUser = await prisma.user.findUnique({ where: { id: user.id } });
    if (checkUser === null) {
      return {
        error: "User not found.",
        statusCode: 400,
      };
    }
    if (checkUser.verified == true) {
      return res
        .status(400)
        .json({ message: "This account is already verified." });
    }

    const updateUser = await prisma.user.update({
      where: { id: checkUser.id },
      verified: true,
    });

    return res.status(200).json({ message: "Your account is now verified." });
  } catch (error) {
    logger.error({
      message: `error occured while verifying this user with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};
module.exports = { saveUser, getUser, getAllUsers, loginUser };
