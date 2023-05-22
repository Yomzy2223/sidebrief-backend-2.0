const { hash } = require("../../common/hash");
const validateUser = require("../../common/validation");
const { saveUser } = require("./service");

exports.Regisration = async (req, res) => {
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

exports.Login = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error Occured!." });
  }
};

exports.GetUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error Occured!." });
  }
};

exports.GetAllUsers = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error Occured!." });
  }
};

exports.UpdateUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error Occured!." });
  }
};
