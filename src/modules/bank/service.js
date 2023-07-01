const { PrismaClient } = require("@prisma/client");
const logger = require("../../config/logger");
const prisma = new PrismaClient();

//create bank service
const saveBank = async (bankPayload) => {
  //   //add the new bank to the table

  try {
    const checkBank = await prisma.bank.findUnique({
      where: { name: bankPayload.name.toLowerCase() },
    });
    if (checkBank !== null) {
      return {
        error: "Bank with this name already exists",
        statusCode: 400,
      };
    }

    const values = {
      name: bankPayload.name.toLowerCase(),
      code: bankPayload.code,
      url: bankPayload.url,
      image: bankPayload.image,
    };
    const bank = await prisma.bank.create({ data: values });

    if (!bank) {
      return { error: "Error occured while creating bank", statusCode: 400 };
    }

    logger.info({ message: `${bankPayload.name} created successfully` });
    return {
      message: "Bank created successfully",
      statusCode: 200,
      data: bank,
    };
  } catch (error) {
    logger.error({
      message: `error occured while creating a bank with error ${error}`,
    });
    console.log(error);
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
    const banks = await prisma.bank.findMany({});
    if (banks === null) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    return {
      message: "Banks fetched successfully",
      data: banks,
      statusCode: 200,
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
      statusCode: 200,
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
      name: bankPayload.name.toLowerCase(),
      code: bankPayload.code,
      url: bankPayload.url,
      image: bankPayload.image,
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
      statusCode: 200,
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
