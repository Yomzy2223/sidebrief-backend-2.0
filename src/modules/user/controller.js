const {
  validateUser,
  validateUserCredentials,
} = require("../../common/validation");
const { saveUser, getUser, loginUser } = require("./service");

//IN PROGRESS

exports.UserRegisration = async (req, res) => {
  const userPayload = req.body;

  const isValidUser = validateUser(userPayload);

  if (isValidUser) {
    const user = await saveUser(userPayload);

    if (user.error) {
      return res.status(user.statusCode).json({ error: user.error });
    }
    return res.status(200).json(user);
  }

  return res.status(400).json({ error: check[0].message });
};

//get a user with id
exports.UserFetcher = async (req, res) => {
  // check if there is id
  // pass the id to the service
  // return user to client

  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      error: "Please provide id",
    });
  }
  const user = await getUser(id);

  if (user.error) {
    return res.status(user.statusCode).json({ error: user.error });
  }
  return res.status(200).json(user);
};

exports.UserGrantor = async (req, res) => {
  // get the login payload
  // validate the payload
  // pass wht payload to login service
  // generate token
  // return user and the token to client

  const loginPayload = req.body;
  isValidUser = await validateUserCredentials(loginPayload);
  if (isValidUser) {
    const user = await loginUser(loginPayload);

    if (user.error) {
      return res.status(user.statusCode).json({ error: user.error });
    }
    return res.status(200).json(user);
  }

  return res.status(400).json({ error: check[0].message });
};
