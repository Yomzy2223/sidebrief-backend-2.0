const addBank =
  "INSERT INTO banks(bankName, bankCode, bankUrl, bankImage) VALUES ($1, $2, $3, $4) RETURNING *";

const getBanks = "SELECT * FROM banks";

const getABank = "SELECT * FROM banks WHERE id = $1";

const deleteBank = "DELETE FROM banks WHERE id = $1";

const checkCodeExists = "SELECT * FROM banks WHERE bankCode = $1";

module.exports = {
  addBank,
  getABank,
  getBanks,
  deleteBank,
  checkCodeExists,
};
