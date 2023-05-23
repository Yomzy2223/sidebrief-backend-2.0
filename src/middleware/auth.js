const { verifyUserToken } = require("../common/token");
const { emailTypePicker } = require("../utils");
const models = require("../data/models/index");

//IN PROGRESS
const userAuth = async (req, res, next) => {
  const reqToken = req.headers.authorization;
  console.log(reqToken);
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

  const checkStaff = await models.Staff.findByPk(staff.id);
  if (checkStaff === null) {
    return {
      error: "Staff is not authorized.",
      statusCode: 403,
    };
  }
  req.user = checkStaff;
  next();
};

module.exports = {
  userAuth,
  staffAuth,
};
