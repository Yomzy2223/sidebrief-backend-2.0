const { PrismaClient } = require("@prisma/client");
const logger = require("../../config/logger");
const prisma = new PrismaClient();

//create country service
const saveCountry = async (countryPayload) => {
  //   //add the new country to the table

  try {
    const checkCountry = await prisma.country.findUnique({
      where: { name: countryPayload.name.toLowerCase() },
    });
    if (checkCountry !== null) {
      return {
        error: "Country with this name already exists",
        statusCode: 400,
      };
    }

    const values = {
      name: countryPayload.name.toLowerCase(),
      iso: countryPayload.iso,
      flagUrl: countryPayload.flagUrl,
      code: countryPayload.code,
      currency: countryPayload.currency,
    };

    const country = await prisma.country.create({ data: values });

    if (!country) {
      return { error: "Error occured while creating country", statusCode: 400 };
    }

    logger.info({
      message: `${countryPayload.name} created successfully`,
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

//get all country service
const getAllCountries = async () => {
  //  get the country list from the table
  //  return the country list to the country controller
  try {
    const countries = await prisma.country.findMany({});
    if (countries === null) {
      return {
        message: "Empty Data",
        statusCode: 200,
        data: [],
      };
    }
    return {
      message: "Countries fetched successfully",
      data: countries,
      statusCode: 200,
    };
  } catch (error) {
    logger.error({
      message: `Error occured while fetching all countries with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

//get a country service
const getCountry = async (id) => {
  //   //check if the country exists
  //   //return the country to the country controller

  try {
    const country = await prisma.country.findUnique({
      where: {
        id: id,
      },
    });
    if (country === null) {
      return {
        error: "Country not found!.",
        statusCode: 400,
      };
    }
    return {
      message: "Country fetched successfully",
      data: country,
      statusCode: 200,
    };
  } catch (error) {
    logger.error({
      message: `Error occured while fetching country with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

//update a country service
const updateCountry = async (id, countryPayload) => {
  // take both id and country payload from the country controller
  //  check if the country exists
  //  update the country
  //  return the country to the country controller

  try {
    const values = {
      name: countryPayload.name.toLowerCase(),
      iso: countryPayload.iso,
      flagUrl: countryPayload.flagUrl,
      code: countryPayload.code,
      currency: countryPayload.currency,
    };

    const country = await prisma.country.findUnique({
      where: {
        id: id,
      },
    });
    if (country === null) {
      return {
        error: "Country not found!.",
        statusCode: 400,
      };
    }

    const updateCountry = await prisma.country.update({
      where: {
        id: id,
      },
      data: values,
    });

    if (!updateCountry) {
      return {
        error: "Error occured while updating country!.",
        statusCode: 400,
      };
    }
    logger.info({
      message: `${countryPayload.name} updated successfully`,
    });
    return {
      message: "Country updated successfully",
      statusCode: 200,
    };
  } catch (error) {
    logger.error({
      message: `error occured while updating country with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

//remove a country service
const removeCountry = async (id) => {
  //take id from the country controller
  //check if the country exists
  //remove the country from the record
  //return response to the country controller

  try {
    const deleteCountry = await prisma.country.delete({
      where: {
        id: id,
      },
    });
    if (!deleteCountry) {
      return {
        error: "Country not found.",
        statusCode: 400,
      };
    }

    return {
      message: "Country deleted successfully",
      statusCode: 200,
    };
  } catch (error) {
    logger.error({
      message: `error occured while deleting country with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

module.exports = {
  saveCountry,
  getAllCountries,
  getCountry,
  updateCountry,
  removeCountry,
};
