import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../../prisma/generated/main";
import { verifyUserToken } from "../common/token";
import { Unauthorized } from "../utils/requestErrors";
import { JwtResponse } from "../common/entities";

const prisma = new PrismaClient();

interface MyUserRequest extends Request {
  user?: any;
}
//IN PROGRESS
const userAuth = async (
  req: MyUserRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const reqToken = req.headers.authorization;
    if (!reqToken) {
      throw new Unauthorized("Authorization token is missing.");
    }

    const token = reqToken.split(" ")[1];
    const userSecret = process.env.TOKEN_USER_SECRET;
    const user = (await verifyUserToken(
      token,
      userSecret as string
    )) as JwtResponse;
    if (!user) {
      throw new Unauthorized("Invalid or expired user token.");
    }
    const checkUser = await prisma.user.findFirst({
      where: {
        id: user.id,
        isStaff: false,
        isPartner: false,
      },
    });
    if (!checkUser) {
      throw new Unauthorized("User is not authorized.");
    }
    req.user = checkUser;
    next();
  } catch (error) {
    next(error);
  }
};

const staffAuth = async (
  req: MyUserRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const reqToken = req.headers.authorization;
    if (!reqToken) {
      throw new Unauthorized("Authorization token is missing.");
    }
    const token = reqToken.split(" ")[1];
    const userSecret = process.env.TOKEN_USER_SECRET;

    const staff = (await verifyUserToken(
      token,
      userSecret as string
    )) as JwtResponse;
    if (!staff) {
      throw new Unauthorized("Invalid or expired staff token.");
    }

    const checkStaff = await prisma.user.findFirst({
      where: {
        id: staff.id,
        isStaff: true,
      },
    });
    if (!checkStaff) {
      throw new Unauthorized("Staff is not authorized.");
    }
    req.user = checkStaff;
    next();
  } catch (error) {
    next(error);
  }
};

export { userAuth, staffAuth };
