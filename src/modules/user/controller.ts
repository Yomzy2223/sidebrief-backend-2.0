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
const UserRegisration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userPayload: UserPayload = req.body;
    const cryptedPassword = await hasher(userPayload.password, 12);
    const userValues = {
      email: userPayload.email.toLowerCase(),
      password: cryptedPassword,
      referral: userPayload.referral,
      partnerPermission: [],
      staffPermission: [],
      userPermission: [],
    };

    const user = await saveUser(userValues);

    return res
      .status(user.statusCode)
      .json({ message: user.message, data: user.data });
  } catch (error) {
    next(error);
  }
};

//get a user with id
const UserFetcher = async (req: Request, res: Response, next: NextFunction) => {
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
const UsersFetcher = async (
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

const UserGrantor = async (req: Request, res: Response, next: NextFunction) => {
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

const UserVerification = async (
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

const UserPasswordResetLink = async (
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

const UserPasswordReset = async (
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
const UserRemover = async (req: Request, res: Response, next: NextFunction) => {
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
const UserProfileModifier = async (
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

export {
  UserRegisration,
  UserFetcher,
  UserGrantor,
  UsersFetcher,
  UserVerification,
  UserPasswordResetLink,
  UserPasswordReset,
  UserProfileModifier,
  UserRemover,
};
