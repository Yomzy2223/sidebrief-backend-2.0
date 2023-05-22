const logger = require("../../config/logger");
const models = require("../../data/entities/index");

//create user service
const saveUser = async (userPayload) => {
  try {
    const cryptedPassword = await hash(userPayload.password, 12);

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
      message: `${firstName} ${lastName} created an account successfully with ${email}.`,
    });

    return {
      message: "User created successfully",
      data: user,
    };
  } catch (error) {
    logger.error({
      message: `error occured while creating an account for ${email} with error message: ${error}`,
    });
    return {
      message: "Error occurred!.",
    };
  }
};

module.exports = { saveUser };
