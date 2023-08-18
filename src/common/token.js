const jwt = require("jsonwebtoken");
const { Unauthorized } = require("../utils/requestErrors");

exports.generateToken = (payload, secret, expired) => {
  return jwt.sign(payload, secret, {
    expiresIn: expired,
  });
};

exports.verifyUserToken = async (token, secret) => {
  try {
    const result = await jwt.verify(token, secret);
    return result;
  } catch (err) {
    throw new Unauthorized("Authentification error, please check your token.");
  }
};
