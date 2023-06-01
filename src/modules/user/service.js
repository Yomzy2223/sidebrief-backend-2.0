const { PrismaClient } = require("@prisma/client");
const logger = require("../../config/logger");
const { hasher, matchChecker } = require("../../common/hash");
const { generateToken, verifyUserToken } = require("../../common/token");
const EmailSender = require("../../services/emailEngine");
const prisma = new PrismaClient();

//IN PROGRESS

//create user service
const saveUser = async (userPayload) => {
  try {
    const checkUser = await prisma.user.findUnique({
      where: { email: userPayload.email.toLowerCase() },
    });
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

    const url = `${process.env.BASE_URL}/user/activate/${emailVerificationToken}`;
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
const getAllUsers = async () => {
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

// verify user account service
const verifyAccount = async (verifyPayload) => {
  try {
    const userSecret = process.env.TOKEN_USER_SECRET;
    const user = await verifyUserToken(verifyPayload, userSecret);

    if (user.error) {
      return {
        error: user.error,
        statusCode: user.statusCode,
      };
    }
    const checkUser = await prisma.user.findUnique({ where: { id: user.id } });
    if (checkUser === null) {
      return {
        error: "User not found.",
        statusCode: 400,
      };
    }

    if (checkUser.verified == true) {
      return {
        statusCode: 400,
        error: "This account is already verified.",
      };
    }

    const updateUser = await prisma.user.update({
      where: { id: checkUser.id },
      data: { verified: true },
    });

    return {
      message: "Your account is now verified.",
      statusCode: 200,
    };
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

// forgot password service
const forgotPassword = async (resetPayload) => {
  try {
    // take the email from the controller
    // check that the email is registered to a user account
    // generate reset token string
    // save and send the reset token the user

    const user = await prisma.user.findUnique({
      where: { email: resetPayload.email },
    });

    if (user === null) {
      return {
        error: "user not found!.",
        statusCode: 400,
      };
    }

    const userSecret = process.env.TOKEN_USER_SECRET;
    const userToken = await generateToken(resetPayload, userSecret, "30m");

    if (userToken.error) {
      return {
        error: userToken.error,
        statusCode: userToken.statusCode,
      };
    }

    const cryptedToken = await hasher(userToken, 12);

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { resetToken: cryptedToken },
    });

    const url = `${process.env.BASE_URL}/reset-password/${userToken}`;

    //send user email
    const subject = "Reset Password.";
    payload = {
      name: user.firstName,
      url: url,
    };
    const senderEmail = '"Sidebrief" <hey@sidebrief.com>';
    const recipientEmail = user.email;
    EmailSender(
      subject,
      payload,
      recipientEmail,
      senderEmail,
      "../view/welcomeUser.ejs"
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
  // check that the email is registered to a user account
  // compare the token with the one saved in the database
  // save the new password and update reset token to null

  try {
    const user = await prisma.user.findUnique({
      where: { email: changePayload.email },
    });

    if (user === null) {
      return {
        error: "User not found!.",
        statusCode: 400,
      };
    }

    let checkToken = await matchChecker(changePayload.token, user.resetToken);

    if (!checkToken)
      return {
        error: "Invalid token",
        statusCode: 400,
      };

    const cryptedPassword = await hasher(changePayload.password, 12);

    const updateUser = await prisma.user.update({
      where: { id: user.id },
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

// delete account
const deleteUser = async (id) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: id } });
    if (user === null) {
      return {
        error: "User not found",
        statusCode: 400,
      };
    }
    console.log(user);
    const deleteUser = await prisma.user.delete({
      where: { id: user.id },
    });

    console.log(deleteUser);
    if (!deleteUser) {
      return {
        error: "Error occured while deleting user",
        statusCode: 400,
      };
    }
    return {
      message: "User deleted successfully",
      statusCode: 200,
    };
  } catch (error) {
    logger.error({
      message: `error occured while deleting this user profile with error message: ${error}`,
    });

    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

// IN PROGRESS
// update profile service
const updateProfile = async (updatePayload, id) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: id } });
    if (user === null) {
      return {
        error: "User not found",
        statusCode: 400,
      };
    }

    const updateUser = await prisma.user.update({
      where: { id: user.id },
      data: { phone: updatePayload.phone },
    });

    if (!updateUser) {
      return {
        error: "Error occured while updating user",
        statusCode: 400,
      };
    }
    return {
      message: "Profile updated successfully",
      statusCode: 200,
    };
  } catch (error) {
    logger.error({
      message: `error occured while updating this user profile with error message: ${error}`,
    });

    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};
module.exports = {
  saveUser,
  getUser,
  getAllUsers,
  verifyAccount,
  loginUser,
  forgotPassword,
  changePassword,
  updateProfile,
  deleteUser,
};
