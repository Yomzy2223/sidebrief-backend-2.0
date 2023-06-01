const { PrismaClient } = require("@prisma/client");
const logger = require("../../config/logger");
const models = require("../../data/models/index");
const prisma = new PrismaClient();

//create bank service
const saveBank = async (bankPayload) => {
  //   //add the new bank to the table

  try {
    const values = {
      bankName: bankPayload.bankName,
      bankCode: bankPayload.bankCode,
      bankUrl: bankPayload.bankUrl,
      bankImage: bankPayload.bankImage,
    };
    const bank = await prisma.bank.create({ data: values });

    if (!bank) {
      return { error: "Error occured while creating bank", statusCode: 400 };
    }

    logger.info({ message: `${bankPayload.bankName} created successfully` });
    return {
      message: "Bank created successfully",
      statusCode: 200,
      data: bank,
    };
  } catch (error) {
    logger.error({
      message: `error occured while creating a bank with error ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

//get all bank service
const getAllBanks = async () => {
  //  get the bank list from the table
  //  return the bank list to the bank controller
  try {
    const bank = await prisma.bank.findMany({});
    return {
      message: "banks fetched successfully",
      data: bank,
    };
  } catch (error) {
    logger.error({
      message: `error occured while fetching all banks with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

//get a bank service
const getBank = async (id) => {
  //   //check if the bank exists
  //   //return the bank to the bank controller

  try {
    const bank = await prisma.bank.findUnique({
      where: {
        id: id,
      },
    });
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
    logger.error({
      message: `error occured while fetching bank with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

//update a bank service
const updateBank = async (id, bankPayload) => {
  // take both id and bank payload from the bank controller
  //  check if the bank exists
  //  update the bank
  //  return the bank to the bank controller

  try {
    const values = {
      bankName: bankPayload.bankName,
      bankCode: bankPayload.bankCode,
      bankUrl: bankPayload.bankUrl,
      bankImage: bankPayload.bankImage,
    };

    const bank = await prisma.bank.findUnique({
      where: {
        id: id,
      },
    });
    if (bank === null) {
      return {
        error: "Bank not found!.",
        statusCode: 400,
      };
    }

    const updateBank = await prisma.bank.update({
      where: {
        id: id,
      },
      data: values,
    });

    if (!updateBank) {
      return {
        error: "Error occured while updating bank!.",
        statusCode: 400,
      };
    }

    return {
      message: "Bank updated successfully",
    };
  } catch (error) {
    logger.error({
      message: `error occured while updating bank with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

//remove a bank service
const removeBank = async (id) => {
  //take id from the bank controller
  //check if the bank exists
  //remove the bank from the record
  //return response to the bank controller

  try {
    const deleteBank = await prisma.bank.delete({
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
    logger.error({
      message: `error occured while deleting bank with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
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