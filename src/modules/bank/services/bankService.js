const client = require("../../../../database/connection");
const {
  getBanks,
  getABank,
  deleteBank,
  addBank,
  checkCodeExists,
} = require("../queries/bankQuery");

const saveBank = async ({ bankName, bankCode, bankUrl, bankImage }) => {
  //check if email exists
  const existingBank = await client.query(checkCodeExists, [bankCode]);

  if (existingBank.rows.length > 0) {
    return { error: "Bank with this bankCode already exists", statusCode: 400 };
  }

  const values = [bankName, bankCode, bankUrl, bankImage];
  const result = await client.query(addBank, values);

  return {
    message: "Bank created successfully",
    data: result.rows[0],
  };
};

const getAllBanks = async () => {
  try {
    const result = await client.query(getBanks);
    return {
      message: "banks fetched successfully",
      data: result.rows,
    };
  } catch (error) {
    return null;
  }
};

const getBank = async (id) => {
  const values = [id];
  const result = await client.query(getABank, values);
  return result;
};

const removeBank = async (id) => {
  const values = [id];
  const result = await client.query(deleteBank, values);
  return result;
};

module.exports = {
  saveBank,
  getAllBanks,
  getBank,
  removeBank,
};
