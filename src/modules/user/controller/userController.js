const logger = require("../../../utils/logger");
const { saveUser, getAllUsers } = require("../services/userService");

exports.signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password, referral } = req.body;

    const user = await saveUser({
      firstName,
      lastName,
      email,
      phone,
      password,
      referral,
    });

    if (user.error) {
      return res.status(user.statusCode).json({ error: user.error });
    }
    res.status(200).json(user);

    logger.info("User created!", {
      userId: `${user.id}`,
      user_email: `${req.body.email}`,
    });
  } catch (error) {
    logger.error({
      message: `error occured while creatiing ${req.body.email} as a user`,
      level: "error",
    });
    console.log(error);
    return res.status(500).json("An error occured while creating the user");
  }
};

exports.SignIn = async (res, req) => {};

exports.GetAll = async (req, res) => {
  try {
    const users = await getAllUsers();
    if (!users) {
      return res
        .status(400)
        .json({ error: "Error occured while getting all users." });
    }
    res.status(200).json({
      message: "user fetched successfully",
      data: users.rows,
    });

    logger.info("User fetched successfuly");
  } catch (error) {
    logger.error({
      message: `error occured while getting `,
      level: "error",
    });
    console.log(error);
    return res.status(500).json({ error: "Error Occured!." });
  }
};
