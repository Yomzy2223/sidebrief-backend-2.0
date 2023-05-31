const jwt = require("jsonwebtoken");

exports.generateToken = (payload, secret, expired) => {
  return jwt.sign(payload, secret, {
    expiresIn: expired,
  });
};

exports.verifyUserToken = async (token, secret) => {
  try {
    const validate = await jwt.verify(token, secret);

    if (!validate) {
      return {
        error: "Authentification error, please check your token.",
        statusCode: 403,
      };
    }
    return validate;
  } catch (error) {
    return {
      error: "Authentification error, please check your token.",
      statusCode: 403,
    };
  }
};
