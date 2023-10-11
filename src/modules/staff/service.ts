import {
  ChangePasswordPayload,
  StaffLogin,
  StaffPayload,
  StaffResponseProps,
} from "./entities";

import { PrismaClient } from "@prisma/client";
import logger from "../../config/logger";
import { hasher, matchChecker } from "../../common/hash";
import { generateToken, verifyUserToken } from "../../common/token";
import EmailSender from "../../services/emailEngine";
import { BadRequest } from "../../utils/requestErrors";
import { JwtResponse } from "../../common/entities";
const prisma = new PrismaClient();

//IN PROGRESS

//create staff service
const saveStaff = async (
  staffPayload: StaffPayload
): Promise<StaffResponseProps> => {
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
      staffSecret as string,
      "30m"
    );

    const url = `${process.env.BASE_URL}/staff/activate/${emailVerificationToken}`;
    //send staff email
    const subject = "Welcome to Sidebrief.";
    const payload = {
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
    const token = generateToken(
      { id: staff.id },
      staffTokenSecret as string,
      "14d"
    );

    const refreshToken = generateToken(
      { id: staff.id },
      staffTokenSecret as string,
      "2h"
    );

    const currentTime = Date.now();
    const expirationTime = currentTime + 30 * 60 * 1000;

    const response: StaffResponseProps = {
      message: "Staff created successfully",
      data: {
        id: staff.id,
        firstName: staff.firstName,
        lastName: staff.lastName,
        email: staff.email,
        phone: staff.phone,
        picture: staff.picture,
        token: token,
        tokenExpiresIn: expirationTime,
        refreshToken: refreshToken,
        verified: staff.verified,
      },
      statusCode: 200,
    };
    return response;
  } catch (error) {
    throw error;
  }
};

//get a staff service
const getStaff = async (id: string): Promise<StaffResponseProps> => {
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
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};
//sign in service
const loginStaff = async (
  loginPayload: StaffLogin
): Promise<StaffResponseProps> => {
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
    const token = generateToken({ id: staff.id }, staffSecret as string, "14d");
    const refreshToken = generateToken(
      { id: staff.id },
      staffSecret as string,
      "2h"
    );

    const currentTime = Date.now();
    const expirationTime = currentTime + 30 * 60 * 1000;

    logger.info({
      message: `staff with ${loginPayload.email} signed in successfully.`,
    });

    const response: StaffResponseProps = {
      message: "Login successfully",
      data: {
        id: staff.id,
        firstName: staff.firstName,
        lastName: staff.lastName,
        email: staff.email,
        phone: staff.phone,
        picture: staff.picture,
        token: token,
        tokenExpiresIn: expirationTime,
        refreshToken: refreshToken,
        verified: staff.verified,
      },
      statusCode: 200,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

// verify staff account service
const verifyStaffAccount = async (verifyPayload: string) => {
  try {
    const staffSecret = process.env.TOKEN_STAFF_SECRET;
    const staff = (await verifyUserToken(
      verifyPayload,
      staffSecret as string
    )) as JwtResponse;

    const checkStaff = await prisma.staff.findUnique({
      where: { id: staff.id as string },
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
const forgotPassword = async (email: string) => {
  try {
    // take the email from the controller
    // check that the email is registered to a staff account
    // generate reset token string
    // save and send the reset token the staff

    const staff = await prisma.staff.findUnique({
      where: { email: email },
    });

    if (!staff) {
      throw new BadRequest("Staff not found");
    }

    const staffSecret = process.env.TOKEN_STAFF_SECRET;
    const staffToken = await generateToken(email, staffSecret as string, "30m");

    const cryptedToken = await await hasher(staffToken, 12);

    const updatedStaff = await prisma.staff.update({
      where: { id: staff.id },
      data: { resetToken: cryptedToken },
    });

    const url = `${process.env.BASE_URL}/reset-password/${staffToken}`;

    //send staff email
    const subject = "Reset Password.";
    const payload = {
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
const changePassword = async (changePayload: ChangePasswordPayload) => {
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
    throw error;
  }
};

// delete staff account
const deleteStaff = async (id: string) => {
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

export {
  saveStaff,
  getStaff,
  loginStaff,
  verifyStaffAccount,
  forgotPassword,
  changePassword,
  deleteStaff,
};
