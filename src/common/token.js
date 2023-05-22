const jwt = require("jsonwebtoken");

exports.generateToken = (payload, expired) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: expired,
  });
};

exports.verifyUserToken = (token) => {
  try {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(400).json({
          message: "Authentification error, please check your token.",
        });
      }
      return user;
    });
  } catch (error) {}
};
