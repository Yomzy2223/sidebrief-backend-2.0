const models = require("../../../sequelize/models/index");

//create bank service
const saveBank = async ({ bankName, bankCode, bankUrl, bankImage }) => {
  try {
    const values = {
      bankName: bankName,
      bankCode: bankCode,
      bankUrl: bankUrl,
      bankImage: bankImage,
    };
    const bank = await models.Bank.create(values);

    if (!bank) {
      return { error: "Error occured while creating bank", statusCode: 400 };
    }

    return {
      message: "Bank created successfully",
      data: bank,
    };
  } catch (error) {
    return {
      message: "Error occurred!.",
    };
  }
};

//get all bank service
const getAllBanks = async () => {
  //  get the bank list from the table
  //  return the bank list to the client
  try {
    const bank = await models.Bank.findAll();
    return {
      message: "banks fetched successfully",
      data: bank,
    };
  } catch (error) {
    return {
      message: "Error occurred!.",
    };
  }
};

//get a bank service
const getBank = async (id) => {
  //   //check if the bank exists
  //   //return the bank to the client

  try {
    const bank = await models.Bank.findByPk(id);
    if (bank === null) {
      return {
        error: "Bank not found!.",
        statusCode: 400,
      };
    }
    return {
      message: "Bank fetched successfully",
      data: bank,
    };
  } catch (error) {
    return {
      message: "Error occurred!.",
    };
  }
};

//update a bank service
const updateBank = async (id, body) => {
  //   //check if the bank exists
  //   update the bank
  //   //return the bank to the client

  try {
    const bank = await models.Bank.findByPk(id);
    if (bank === null) {
      return {
        error: "Bank not found!.",
        statusCode: 400,
      };
    }

    const updateBank = await models.Bank.update(body, {
      where: {
        id: id,
      },
    });
    console.log("upd", updateBank);

    if (!bank) {
      return {
        error: "Error occured while updating bank!.",
        statusCode: 400,
      };
    }

    return {
      message: "Bank updated successfully",
    };
  } catch (error) {
    return {
      message: "Error occurred!.",
    };
  }
};

//remove a bank service
const removeBank = async (id) => {
  //check if the bank exists
  //remove the bank from the record
  console.log("ddddddddd", id);
  try {
    const deleteBank = await models.Bank.destroy({
      where: {
        id: id,
      },
    });
    if (!deleteBank) {
      return {
        error: "Bank not found.",
        statusCode: 400,
      };
    }

    return {
      message: "Bank deleted successfully",
    };
  } catch (error) {
    return {
      message: "Error occurred!.",
    };
  }
};

module.exports = {
  saveBank,
  getAllBanks,
  getBank,
  updateBank,
  removeBank,
};
