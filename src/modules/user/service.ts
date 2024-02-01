import {
  UserResponseProps,
  UserPayload,
  UserLogin,
  ForgotPassword,
  UserWithGooglePayload,
  UserLoginWithGoogle,
} from "./entities";

import { PrismaClient } from "../../../prisma/generated/client2";
import logger from "../../config/logger";
import { hasher, matchChecker } from "../../common/hash";
import { generateToken, verifyUserToken } from "../../common/token";
import EmailSender from "../../services/emailEngine";
import { BadRequest } from "../../utils/requestErrors";
import { JwtResponse } from "../../common/entities";
const prisma = new PrismaClient();

//IN PROGRESS

//create user service
const saveUser = async (
  userPayload: UserPayload
): Promise<UserResponseProps> => {
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
      userSecret as string,
      "30m"
    );

    const url = `${process.env.BASE_URL}/user/activate/${emailVerificationToken}`;
    //send user email
    const subject = "Welcome to Sidebrief.";
    const payload = {
      name: userPayload.fullName.slice(0, userPayload.fullName.indexOf("")),
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
      message: `${userPayload.fullName} created an account successfully with ${userPayload.email}.`,
    });

    const token = generateToken({ id: user.id }, userSecret as string, "14d");

    const refreshToken = generateToken(
      { id: user.id },
      userSecret as string,
      "2h"
    );

    const currentTime = Date.now();
    const expirationTime = currentTime + 30 * 60 * 1000;

    const response: UserResponseProps = {
      message: "User created successfully",
      data: {
        id: user.id,
        fullName: user.fullName,
        userName: user.username,
        email: user.email,
        phone: user.phone,
        token: token,
        tokenExpiresIn: expirationTime,
        refreshToken: refreshToken,
        picture: user.picture,
        isVerified: user.isVerified,
        referral: user.referral,
        isStaff: user.isStaff,
        isPartner: user.isPartner,
      },
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

const saveUserWithGoogle = async (
  userPayload: UserWithGooglePayload
): Promise<UserResponseProps> => {
  try {
    const checkUser = await prisma.user.findUnique({
      where: { email: userPayload.email },
    });
    if (checkUser) {
      let checkGoogleId = userPayload.googleId === checkUser.googleId;

      if (!checkGoogleId) {
        throw new BadRequest("Invalid credentials!");
      }

      const userSecret = process.env.TOKEN_USER_SECRET;
      const token = generateToken(
        { id: checkUser.id },
        userSecret as string,
        "14d"
      );

      const refreshToken = generateToken(
        { id: checkUser.id },
        userSecret as string,
        "2h"
      );

      const currentTime = Date.now();
      const expirationTime = currentTime + 30 * 60 * 1000;

      logger.info({
        message: `User with ${userPayload.email} signed in successfully.`,
      });

      const response: UserResponseProps = {
        message: "Login successfully",
        data: {
          id: checkUser.id,
          fullName: checkUser.fullName,
          userName: checkUser.username,
          email: checkUser.email,
          phone: checkUser.phone,
          token: token,
          tokenExpiresIn: expirationTime,
          refreshToken: refreshToken,
          picture: checkUser.picture,
          isVerified: checkUser.isVerified,
          referral: checkUser.referral,
          isStaff: checkUser.isStaff,
          isPartner: checkUser.isPartner,
        },
        statusCode: 200,
      };

      return response;
    }

    const user = await prisma.user.create({ data: userPayload });

    if (!user) {
      throw new BadRequest("Error occured while creating user");
    }

    const userSecret = process.env.TOKEN_USER_SECRET;
    const emailVerificationToken = generateToken(
      { id: user.id },
      userSecret as string,
      "30m"
    );

    const url = `${process.env.BASE_URL}/user/activate/${emailVerificationToken}`;
    //send user email
    const subject = "Welcome to Sidebrief.";
    const payload = {
      name: userPayload.fullName.slice(0, userPayload.fullName.indexOf("")),
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
      message: `${userPayload.fullName} created an account successfully with ${userPayload.email}.`,
    });

    const token = generateToken({ id: user.id }, userSecret as string, "14d");

    const refreshToken = generateToken(
      { id: user.id },
      userSecret as string,
      "2h"
    );

    const currentTime = Date.now();
    const expirationTime = currentTime + 30 * 60 * 1000;

    const response: UserResponseProps = {
      message: "User created successfully",
      data: {
        id: user.id,
        fullName: user.fullName,
        userName: user.username,
        email: user.email,
        phone: user.phone,
        token: token,
        tokenExpiresIn: expirationTime,
        refreshToken: refreshToken,
        picture: user.picture,
        isVerified: user.isVerified,
        isStaff: user.isStaff,
        isPartner: user.isPartner,
      },
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};
//get a user service
const getUser = async (id: string): Promise<UserResponseProps> => {
  //   //check if the user exists
  //   //return the user to the user controller

  try {
    const user = await prisma.user.findUnique({ where: { id: id } });
    if (!user) {
      throw new BadRequest("User not found!.");
    }

    const userSecret = process.env.TOKEN_USER_SECRET;

    const response: UserResponseProps = {
      message: "User fetched successfully",
      data: {
        id: user.id,
        fullName: user.fullName,
        userName: user.username,
        email: user.email,
        phone: user.phone,
        picture: user.picture,
        isVerified: user.isVerified,
        referral: user.referral,
      },
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

//get all users service
const getAllUsers = async (): Promise<UserResponseProps> => {
  //   //return the users list to the user controller

  try {
    const users = await prisma.user.findMany();

    if (!users) {
      throw new BadRequest("User not found!.");
    }

    const response: UserResponseProps = {
      message: "Users fetched successfully",
      data: users,
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

//sign in service
const loginUser = async (
  loginPayload: UserLogin
): Promise<UserResponseProps> => {
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
    const token = generateToken({ id: user.id }, userSecret as string, "14d");

    const refreshToken = generateToken(
      { id: user.id },
      userSecret as string,
      "2h"
    );

    const currentTime = Date.now();
    const expirationTime = currentTime + 30 * 60 * 1000;

    logger.info({
      message: `User with ${loginPayload.email} signed in successfully.`,
    });

    const response: UserResponseProps = {
      message: "Login successfully",
      data: {
        id: user.id,
        fullName: user.fullName,
        userName: user.username,
        email: user.email,
        phone: user.phone,
        token: token,
        tokenExpiresIn: expirationTime,
        refreshToken: refreshToken,
        picture: user.picture,
        isVerified: user.isVerified,
        referral: user.referral,
        isStaff: user.isStaff,
        isPartner: user.isPartner,
      },
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

// verify user account service
const verifyAccount = async (verifyPayload: string) => {
  try {
    const userSecret = process.env.TOKEN_USER_SECRET;
    const user = (await verifyUserToken(
      verifyPayload,
      userSecret as string
    )) as JwtResponse;

    const checkUser = await prisma.user.findUnique({ where: { id: user.id } });
    if (!checkUser) {
      throw new BadRequest("User not found!.");
    }

    if (checkUser.isVerified == true) {
      throw new BadRequest("This account is already verified.");
    }

    const updateUser = await prisma.user.update({
      where: { id: checkUser.id },
      data: { isVerified: true },
    });
    const response = {
      message: "Your account is now verified.",
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

// forgot password service
const forgotPassword = async (forgotPayload: ForgotPassword) => {
  try {
    // take the email from the controller
    // check that the email is registered to a user account
    // generate reset token string
    // save and send the reset token the user

    const user = await prisma.user.findUnique({
      where: { email: forgotPayload.email },
    });

    if (!user) {
      throw new BadRequest("User not found!.");
    }

    const userSecret = process.env.TOKEN_USER_SECRET;
    const userToken = await generateToken(
      forgotPayload,
      userSecret as string,
      "30m"
    );

    const cryptedToken = await hasher(userToken, 12);

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { resetToken: cryptedToken },
    });

    const url = `${process.env.BASE_URL}/reset-password/${userToken}`;

    //send user email
    const subject = "Reset Password.";
    const payload = {
      name: user.fullName,
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
    console.log(error);
    throw error;
  }
};

// change password service
const changePassword = async (changePayload: any) => {
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
const deleteUser = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: id } });
    if (!user) {
      throw new BadRequest("User not found!.");
    }

    const deleteUser = await prisma.user.delete({
      where: { id: user.id },
    });

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
const updateProfile = async (updatePayload: any, id: string) => {
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

export {
  saveUser,
  getUser,
  getAllUsers,
  verifyAccount,
  loginUser,
  forgotPassword,
  changePassword,
  updateProfile,
  deleteUser,
  saveUserWithGoogle,
};
