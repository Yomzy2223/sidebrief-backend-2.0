const addUsers =
  "INSERT INTO users(firstName,lastName,email, phone, password,referral) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";

const getUsers = "SELECT * FROM users";

const getUser = "SELECT * FROM users WHERE id = $1";

const checkEmailExists = "SELECT * FROM users WHERE email = $1";

module.exports = {
  addUsers,
  getUsers,
  getUser,
  checkEmailExists,
};
