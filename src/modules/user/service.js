const logger = require("../../config/logger");
const models = require("../../data/entities/index");
const { hasher, matchChecker } = require("../../common/hash");
const { generateToken } = require("../../common/token");

//IN PROGRESS

//create user service
const saveUser = async (userPayload) => {
  try {
    const checkUser = await models.User.findOne({
      where: { email: userPayload.email.toLowerCase() },
    });

    if (checkUser !== null) {
      return { error: "User with this email already exists", statusCode: 400 };
    }

    const checkUsername = await models.User.findOne({
      where: { username: userPayload.username.toLowerCase() },
    });

    if (checkUsername !== null) {
      return {
        error: "Username already taken, please try another one",
        statusCode: 400,
      };
    }

    const cryptedPassword = await hasher(userPayload.password, 12);

    const values = {
      firstName: userPayload.firstName,
      lastName: userPayload.lastName,
      username: userPayload.username,
      email: userPayload.email.toLowerCase(),
      password: cryptedPassword,
      phone: userPayload.phone,
      picture: userPayload.picture,
      verified: false,
      referral: userPayload.referral,
    };
    const user = await models.User.create(values);

    if (!user) {
      return { error: "Error occured while creating user", statusCode: 400 };
    }

    logger.info({
      message: `${userPayload.firstName} ${userPayload.lastName} created an account successfully with ${userPayload.email}.`,
    });

    return {
      message: "User created successfully",
      data: user,
    };
  } catch (error) {
    logger.error({
      message: `error occured while creating an account for ${userPayload.email} with error message: ${error}`,
    });

    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

//get a user service
const getUser = async (id) => {
  //   //check if the user exists
  //   //return the user to the user controller

  try {
    const user = await models.User.findByPk(id);
    if (user === null) {
      return {
        error: "User not found!.",
        statusCode: 400,
      };
    }
    return {
      message: "User fetched successfully",
      data: user,
    };
  } catch (error) {
    logger.error({
      message: `error occured while fetching user with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};
//sign in service
const loginUser = async (loginPayload) => {
  // take the login payload  from the controller
  //   //check if the user exists with the email address
  //   //return the user to the user controller

  try {
    const user = await models.User.findOne({
      where: { email: loginPayload.email },
    });

    if (user === null) {
      return {
        error: "User not found!.",
        statusCode: 400,
      };
    }

    let checkPassword = await matchChecker(
      loginPayload.password,
      user.password
    );

    if (!checkPassword)
      return {
        error: "Invalid credentials",
        statusCode: 400,
      };

    const token = generateToken({ id: user.id.toString() }, "14d");
    logger.info({
      message: `User with ${loginPayload.email} signed in successfully.`,
    });

    return {
      message: "Login successfully",
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        phone: user.phone,
        picture: user.picture,
        token: token,
        verified: user.verified,
        referral: user.referral,
      },
    };
  } catch (error) {
    logger.error({
      message: `error occured while fetching user with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};
module.exports = { saveUser, getUser, loginUser };
