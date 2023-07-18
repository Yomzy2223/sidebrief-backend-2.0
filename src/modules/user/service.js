const { PrismaClient } = require("@prisma/client");
const logger = require("../../config/logger");
const { hasher, matchChecker } = require("../../common/hash");
const { generateToken, verifyUserToken } = require("../../common/token");
const EmailSender = require("../../services/emailEngine");
const { BadRequest } = require("../../utils/requestErrors");
const prisma = new PrismaClient();

//IN PROGRESS

//create user service
const saveUser = async (userPayload) => {
  try {
    const checkUser = await prisma.user.findUnique({
      where: { email: userPayload.email },
    });
    if (checkUser) {
      throw new BadRequest("User with this email already exists");
    }

    const user = await prisma.user.create({ data: userPayload });

    if (!user) {
      throw new BadRequest("Error occured while creating user");
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
    throw error;
  }
};

//get a user service
const getUser = async (id) => {
  //   //check if the user exists
  //   //return the user to the user controller

  try {
    const user = await prisma.user.findUnique({ where: { id: id } });
    if (!user) {
      throw new BadRequest("User not found!.");
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
    throw error;
  }
};

//get all users service
const getAllUsers = async () => {
  //   //return the users list to the user controller

  try {
    const users = await prisma.user.findMany();

    if (!users) {
      throw new BadRequest("User not found!.");
    }

    return {
      message: "Users fetched successfully",
      data: users,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
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

    if (!user) {
      throw new BadRequest("User not found!.");
    }

    let checkPassword = await matchChecker(
      loginPayload.password,
      user.password
    );

    if (!checkPassword) {
      throw new BadRequest("Invalid credentials!");
    }

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
        token: token,
        phone: user.phone,
        picture: user.picture,
        verified: user.verified,
        referral: user.referral,
      },
    };
  } catch (error) {
    throw error;
  }
};

// verify user account service
const verifyAccount = async (verifyPayload) => {
  try {
    const userSecret = process.env.TOKEN_USER_SECRET;
    const user = await verifyUserToken(verifyPayload, userSecret);

    const checkUser = await prisma.user.findUnique({ where: { id: user.id } });
    if (!checkUser) {
      throw new BadRequest("User not found!.");
    }

    if (checkUser.verified == true) {
      throw new BadRequest("This account is already verified.");
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
    throw error;
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

    if (!user) {
      throw new BadRequest("User not found!.");
    }

    const userSecret = process.env.TOKEN_USER_SECRET;
    const userToken = await generateToken(resetPayload, userSecret, "30m");

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
    throw error;
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

    if (!user) {
      throw new BadRequest("User not found!.");
    }

    let checkToken = await matchChecker(changePayload.token, user.resetToken);

    if (!checkToken) {
      throw new BadRequest("Invalid token");
    }

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
    throw error;
  }
};

// delete account
const deleteUser = async (id) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: id } });
    if (!user) {
      throw new BadRequest("User not found!.");
    }
    console.log(user);
    const deleteUser = await prisma.user.delete({
      where: { id: user.id },
    });

    console.log(deleteUser);
    if (!deleteUser) {
      throw new BadRequest("Error occured while deleting user");
    }
    return {
      message: "User deleted successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

// update profile service
const updateProfile = async (updatePayload, id) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: id } });
    if (!user) {
      throw new BadRequest("User not found!.");
    }

    const updateUser = await prisma.user.update({
      where: { id: user.id },
      data: { phone: updatePayload.phone },
    });

    if (!updateUser) {
      throw new BadRequest("Error occured while updating user");
    }
    return {
      message: "Profile updated successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

// IN PROGRESS
// auth with google
const authWithGoogle = async (profile) => {
  try {
    const cryptedPassword = await hasher(process.env.GOOGLE_USER_PASSWORD, 12);

    const values = {
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      username: profile.name.familyName,
      email: profile.emails[0].value.toLowerCase(),
      password: cryptedPassword,
      phone: "00000000",
      verified: false,
      referral: profile.provider,
      picture: profile.photos[0].value,
    };

    const newUser = await prisma.user.create({ data: values });
    if (!newUser) {
      return { error: "Error occured while creating user", statusCode: 400 };
    }

    const userSecret = process.env.TOKEN_USER_SECRET;
    const emailVerificationToken = generateToken(
      { id: newUser.id },
      userSecret,
      "30m"
    );

    const url = `${process.env.BASE_URL}/user/activate/${emailVerificationToken}`;
    //send user email
    const subject = "Welcome to Sidebrief.";
    payload = {
      name: newUser.firstName,
      url: url,
    };
    const senderEmail = '"Sidebrief" <hey@sidebrief.com>';
    const recipientEmail = newUser.email;
    EmailSender(
      subject,
      payload,
      recipientEmail,
      senderEmail,
      "../view/welcomeUser.ejs"
    );

    logger.info({
      message: `${newUser.firstName} created an account successfully with ${newUser.email}.`,
    });

    return {
      message: "User created successfully",
      data: {
        id: newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        username: newUser.username,
        email: newUser.email,
        phone: newUser.phone,
        picture: newUser.picture,
        verified: newUser.verified,
        referral: newUser.referral,
      },
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

const authLogin = async () => {
  let user = await prisma.user.findUnique({
    where: { email: profile.emails[0].value.toLowerCase() },
  });
  if (!user) {
    return {
      message: "User not found",
    };
  }
  // if user exists

  const userSecret = process.env.TOKEN_USER_SECRET;
  const token = generateToken({ id: user.id }, userSecret, "14d");
  logger.info({
    message: `User with ${user.email} signed in successfully.`,
  });

  return {
    message: "Login successfully",
    data: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      token: token,
      phone: user.phone,
      picture: user.picture,
      verified: user.verified,
      referral: user.referral,
    },
  };
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
  authWithGoogle,
  authLogin,
};
