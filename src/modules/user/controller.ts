import { Request, Response, NextFunction } from "express";

import { hasher } from "../../common/hash";
import {
  saveUser,
  getUser,
  loginUser,
  getAllUsers,
  verifyAccount,
  forgotPassword,
  changePassword,
  updateProfile,
  deleteUser,
} from "./service";
import { UserPayload } from "./entities";

exports.UserRegisration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userPayload = req.body;
    const cryptedPassword = await hasher(userPayload.password, 12);
    const values: UserPayload = {
      firstName: userPayload.firstName,
      lastName: userPayload.lastName,
      username: userPayload.username,
      email: userPayload.email.toLowerCase(),
      password: cryptedPassword,
      phone: userPayload.phone,
      verified: false,
      referral: userPayload.referral,
    };

    const user = await saveUser(values);

    return res
      .status(user.statusCode)
      .json({ message: user.message, data: user.data });
  } catch (error) {
    next(error);
  }
};

//get a user with id
exports.UserFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // check if there is id
    // pass the id to the service
    // return user to client

    const id = req.params.id;
    const user = await getUser(id);

    return res
      .status(user.statusCode)
      .json({ message: user.message, data: user.data });
  } catch (error) {
    next(error);
  }
};

//get all users controller
exports.UsersFetcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // call the getAllUsers service
    // return user to client

    const users = await getAllUsers();

    return res
      .status(users.statusCode)
      .json({ message: users.message, data: users.data });
  } catch (error) {
    next(error);
  }
};

exports.UserGrantor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the login payload
    // validate the payload
    // pass wht payload to login service
    // generate token
    // return user and the token to client

    const loginPayload = req.body;

    const user = await loginUser(loginPayload);

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

exports.UserVerification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const verifyPayload: string = req.params.token;

    const verify = await verifyAccount(verifyPayload);

    return res.status(verify.statusCode).json({ message: verify.message });
  } catch (error) {
    next(error);
  }
};

exports.UserPasswordResetLink = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = req.body;

    const reset = await forgotPassword(email);

    return res.status(reset.statusCode).json({ message: reset.message });
  } catch (error) {
    next(error);
  }
};

exports.UserPasswordReset = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the login payload
    // validate the payload
    // pass the payload to reset service

    // return the response to the client

    const loginPayload = req.body;
    const userPass = await changePassword(loginPayload);

    return res.status(userPass.statusCode).json({ message: userPass.message });
  } catch (error) {
    next(error);
  }
};

//get a user with id
exports.UserRemover = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // check if there is id
    // pass the id to the service
    // return user to client

    const id = req.params.id;

    const user = await deleteUser(id);

    return res.status(user.statusCode).json({ message: user.message });
  } catch (error) {
    next(error);
  }
};

// IN PROGRESS
exports.UserProfileModifier = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the updatePayload and the user id
    // validate the payload
    // pass the payload and the id to update service

    // return user and message

    const id = req.params.id;
    const updatePayload = req.body;

    const userUpdate = await updateProfile(updatePayload, id);

    return res
      .status(userUpdate.statusCode)
      .json({ message: userUpdate.message });
  } catch (error) {
    next(error);
  }
};
