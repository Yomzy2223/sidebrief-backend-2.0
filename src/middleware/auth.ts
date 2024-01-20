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
    const user = await verifyUserToken(token, userSecret as string);
    if (!user) {
      throw new Unauthorized("Invalid or expired user token.");
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

const staffAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqToken = req.headers.authorization;
    if (!reqToken) {
      throw new Unauthorized("Authorization token is missing.");
    }
    const token = reqToken.split(" ")[1];
    const staffSecret = process.env.TOKEN_STAFF_SECRET;

    const staff = (await verifyUserToken(
      token,
      staffSecret as string
    )) as JwtResponse;

    if (!staff) {
      throw new Unauthorized("Invalid or expired staff token.");
    }

    const checkStaff = await prisma.staff.findUnique({
      where: { id: staff.id },
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
