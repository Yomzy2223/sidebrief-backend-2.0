const { PrismaClient } = require("@prisma/client");
const logger = require("../../config/logger");
const { BadRequest } = require("../../utils/requestErrors");
const prisma = new PrismaClient();

//create bank service
const saveBank = async (bankPayload) => {
  //   //add the new bank to the table

  try {
    const checkBank = await prisma.bank.findUnique({
      where: { name: bankPayload.name },
    });

    if (checkBank) {
      throw new BadRequest("Bank with this name already exists");
    }

    const bank = await prisma.bank.create({ data: bankPayload });

    if (!bank) {
      throw new BadRequest("Error occured while creating bank");
    }

    logger.info({ message: `${bankPayload.name} created successfully` });
    return {
      message: "Bank created successfully",
      statusCode: 200,
      data: bank,
    };
  } catch (error) {
    throw error;
  }
};

//get all bank service
const getAllBanks = async () => {
  //  get the bank list from the table
  //  return the bank list to the bank controller
  try {
    const banks = await prisma.bank.findMany({});
    if (!banks) {
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
    throw error;
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
    if (!bank) {
      throw new BadRequest("Bank not found!.");
    }
    return {
      message: "Bank fetched successfully",
      data: bank,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//update a bank service
const updateBank = async (id, bankPayload) => {
  // take both id and validated bank payload from the bank controller
  //  check if the bank exists
  //  update the bank
  //  return the bank to the bank controller

  try {
    const bank = await prisma.bank.findUnique({
      where: {
        id: id,
      },
    });
    if (!bank) {
      throw new BadRequest("Bank not found!");
    }

    const updateBank = await prisma.bank.update({
      where: {
        id: id,
      },
      data: bankPayload,
    });

    if (!updateBank) {
      throw new BadRequest("Error occured while updating bank!.");
    }

    return {
      message: "Bank updated successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
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
      throw new BadRequest("Bank not found");
    }

    return {
      message: "Bank deleted successfully",
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  saveBank,
  getAllBanks,
  getBank,
  updateBank,
  removeBank,
};
