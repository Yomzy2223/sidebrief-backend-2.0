import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../../prisma/generated/client2";
import { verifyUserToken } from "../common/token";
import { Unauthorized } from "../utils/requestErrors";
import { JwtResponse } from "../common/entities";

const prisma = new PrismaClient();

//IN PROGRESS
const userAuth = async (req: Request, res: Response, next: NextFunction) => {
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

const staffAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("header", req.headers);
    const reqToken = req.headers.authorization;
    console.log("token", reqToken);
    if (!reqToken) {
      throw new Unauthorized("Authorization token is missing.");
    }
    const token = reqToken.split(" ")[1];
    console.log("token filt", token);
    const userSecret = process.env.TOKEN_USER_SECRET;

    const staff = (await verifyUserToken(
      token,
      userSecret as string
    )) as JwtResponse;
    console.log(staff);
    if (!staff) {
      throw new Unauthorized("Invalid or expired staff token.");
    }

    // const checkStaff = await prisma.$queryRaw`
    // SELECT * FROM "user" WHERE id = ${staff.id} AND "isStaff" = true`;
    // console.log("essss", checkStaff);

    const checkStaff = await prisma.user.findFirst({
      where: {
        id: staff.id,
        isStaff: true,
      },
    });
    console.log("checkstaff", checkStaff);
    if (!checkStaff) {
      throw new Unauthorized("Staff is not authorized.");
    }
    req.user = checkStaff;
    next();
  } catch (error) {
    next(error);
  }
};

const partnerAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqToken = req.headers.authorization;
    if (!reqToken) {
      throw new Unauthorized("Authorization token is missing.");
    }
    const token = reqToken.split(" ")[1];
    const collaboratorSecret = process.env.TOKEN_COLLABORATOR_SECRET;

    const partner = (await verifyUserToken(
      token,
      collaboratorSecret as string
    )) as JwtResponse;

    if (!partner) {
      throw new Unauthorized("Invalid or expired partner token.");
    }

    const checkPartner = await prisma.collaborator.findUnique({
      where: { id: partner.id },
    });
    if (!checkPartner) {
      throw new Unauthorized("Partner is not authorized.");
    }

    if (checkPartner.isPartner === false) {
      return {
        error: "Partner is not authorized.",
        statusCode: 403,
      };
    }
    req.user = checkPartner;
    next();
  } catch (error) {
    next(error);
  }
};

const ResellerrAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reqToken = req.headers.authorization;
    if (!reqToken) {
      throw new Unauthorized("Authorization token is missing.");
    }
    const token = reqToken.split(" ")[1];
    const collaboratorSecret = process.env.TOKEN_COLLABORATOR_SECRET;

    const reseller = (await verifyUserToken(
      token,
      collaboratorSecret as string
    )) as JwtResponse;

    if (!reseller) {
      throw new Unauthorized("Invalid or expired reseller token.");
    }

    const checkReseller = await prisma.collaborator.findUnique({
      where: { id: reseller.id },
    });
    if (!checkReseller) {
      throw new Unauthorized("Reseller is not authorized.");
    }

    if (checkReseller.isPartner === true) {
      throw new Unauthorized("Reseller is not authorized.");
    }
    req.user = checkReseller;
    next();
  } catch (error) {
    next(error);
  }
};

export { userAuth, staffAuth };
