const { PrismaClient } = require("@prisma/client");
const { verifyUserToken } = require("../common/token");
const prisma = new PrismaClient();

//IN PROGRESS
const userAuth = async (req, res, next) => {
  const reqToken = req.headers.authorization;
  if (!reqToken) {
    return res.status(401).json({ error: "Authorization token is missing." });
  }

  const token = reqToken.split(" ")[1];
  const userSecret = process.env.TOKEN_USER_SECRET;
  const user = await verifyUserToken(token, userSecret);
  if (user.error) {
    return res.status(user.statusCode).json({ error: user.error });
  }
  if (!user) {
    return res.status(401).json({ error: "Invalid or expired user token." });
  }
  req.user = user;
  next();
};

const staffAuth = async (req, res, next) => {
  const reqToken = req.headers.authorization;
  if (!reqToken) {
    return res.status(401).json({ error: "Authorization token is missing." });
  }
  const token = reqToken.split(" ")[1];
  const staffSecret = process.env.TOKEN_STAFF_SECRET;

  const staff = await verifyUserToken(token, staffSecret);
  if (staff.error) {
    return res.status(staff.statusCode).json({ error: staff.error });
  }
  if (!staff) {
    return res.status(401).json({ error: "Invalid or expired staff token." });
  }

  const checkStaff = await prisma.staff.findUnique({ where: { id: staff.id } });
  if (checkStaff === null) {
    return {
      error: "Staff is not authorized.",
      statusCode: 403,
    };
  }
  req.user = checkStaff;
  next();
};

const partnerAuth = async (req, res, next) => {
  const reqToken = req.headers.authorization;
  if (!reqToken) {
    return res.status(401).json({ error: "Authorization token is missing." });
  }
  const token = reqToken.split(" ")[1];
  const collaboratorSecret = process.env.TOKEN_COLLABORATOR_SECRET;

  const partner = await verifyUserToken(token, collaboratorSecret);
  if (partner.error) {
    return res.status(partner.statusCode).json({ error: partner.error });
  }
  if (!partner) {
    return res.status(401).json({ error: "Invalid or expired partner token." });
  }

  const checkPartner = await prisma.collaborator.findUnique({
    where: { id: partner.id },
  });
  if (checkPartner === null) {
    return {
      error: "Partner is not authorized.",
      statusCode: 403,
    };
  }

  if (checkPartner.isPartner === false) {
    return {
      error: "Partner is not authorized.",
      statusCode: 403,
    };
  }
  req.user = checkPartner;
  next();
};

const ResellerrAuth = async (req, res, next) => {
  const reqToken = req.headers.authorization;
  if (!reqToken) {
    return res.status(401).json({ error: "Authorization token is missing." });
  }
  const token = reqToken.split(" ")[1];
  const collaboratorSecret = process.env.TOKEN_COLLABORATOR_SECRET;

  const reseller = await verifyUserToken(token, collaboratorSecret);
  if (reseller.error) {
    return res.status(reseller.statusCode).json({ error: reseller.error });
  }
  if (!reseller) {
    return res
      .status(401)
      .json({ error: "Invalid or expired reseller token." });
  }

  const checkReseller = await prisma.collaborator.findUnique({
    where: { id: reseller.id },
  });
  if (checkReseller === null) {
    return {
      error: "Reseller is not authorized.",
      statusCode: 403,
    };
  }

  if (checkReseller.isPartner === true) {
    return {
      error: "Reseller is not authorized.",
      statusCode: 403,
    };
  }
  req.user = checkReseller;
  next();
};

module.exports = {
  userAuth,
  staffAuth,
  partnerAuth,
  ResellerrAuth,
};
