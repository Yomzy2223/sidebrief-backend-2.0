const { verifyUserToken } = require("../common/verification");
const { emailTypePicker } = require("../utils");

//IN PROGRESS
const userAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Authorization token is missing." });
  }

  const user = verifyUserToken(verifyUserToken);

  if (!user) {
    return res.status(401).json({ error: "Invalid or expired user token." });
  }

  req.user = user;
  next();
};

const userStaff = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Authorization token is missing." });
  }

  const user = verifyUserToken(verifyUserToken);

  if (!user) {
    return res.status(401).json({ error: "Invalid or expired user token." });
  }

  const result = emailTypePicker(user.email);
  if (result === "@sidebrief.com") {
    req.user = user;
    next();
  } else {
    return res.status(403).json({ error: "User is not authorized." });
  }
};
