const bcrypt = require("bcryptjs");
const client = require("../../../../database/connection");
const {
  addUsers,
  checkEmailExists,
  getUsers,
} = require("../queries/userQuery");

const saveUser = async ({
  firstName,
  lastName,
  email,
  phone,
  password,
  referral,
}) => {
  try {
    //check if email exists
    const existingUser = await client.query(checkEmailExists, [email]);

    if (existingUser.rows.length > 0) {
      return { error: "User with this email already exists", statusCode: 400 };
    }

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    //add user to database
    const values = [
      firstName,
      lastName,
      email,
      phone,
      hashedPassword,
      referral,
    ];
    let result = await client.query(addUsers, values);

    return {
      message: "user created successfully",
      data: result.rows[0],
    };
  } catch (error) {
    return {
      error: "An error occurred while adding the user",
      statusCode: 500,
    };
  }
};

const getAllUsers = async () => {
  const result = client.query(getUsers);
  return result;
};

module.exports = {
  saveUser,
  getAllUsers,
};
