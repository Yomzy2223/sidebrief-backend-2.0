const { PrismaClient } = require("@prisma/client");
const logger = require("../../config/logger");
const prisma = new PrismaClient();

//create country service
const saveCountry = async (countryPayload) => {
  //   //add the new country to the table

  try {
    const checkCountry = await prisma.country.findUnique({
      where: { countryName: countryPayload.countryName.toLowerCase() },
    });
    if (checkCountry !== null) {
      return {
        error: "Country with this name already exists",
        statusCode: 400,
      };
    }

    const values = {
      countryName: countryName.countryName.toLowerCase(),
      countryISO: bankPayload.countryISO,
      countryImage: bankPayload.countryImage,
    };

    const country = await prisma.country.create({ data: values });

    if (!country) {
      return { error: "Error occured while creating country", statusCode: 400 };
    }

    logger.info({
      message: `${countryPayload.countryName} created successfully`,
    });
    return {
      message: "Country created successfully",
      statusCode: 200,
      data: country,
    };
  } catch (error) {
    logger.error({
      message: `error occured while creating a country with error ${error}`,
    });
    console.log(error);
    country;
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
  saveCountry,
  getAllBanks,
  getBank,
  updateBank,
  removeBank,
};
