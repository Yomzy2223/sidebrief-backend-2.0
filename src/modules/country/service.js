const { PrismaClient } = require("@prisma/client");
const logger = require("../../config/logger");
const { BadRequest } = require("../../utils/requestErrors");
const prisma = new PrismaClient();

//create country service
const saveCountry = async (countryPayload) => {
  //   //add the new country to the table

  try {
    const checkCountry = await prisma.country.findUnique({
      where: { name: countryPayload.name },
    });
    if (!checkCountry) {
      throw new BadRequest("Country with this name already exists");
    }

    const country = await prisma.country.create({ data: countryPayload });

    if (!country) {
      throw new BadRequest("Error occured while creating country");
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
    throw error;
  }
};

//get all country service
const getAllCountries = async () => {
  //  get the country list from the table
  //  return the country list to the country controller
  try {
    const countries = await prisma.country.findMany({});
    if (!countries) {
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
    throw error;
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
    if (!country) {
      throw new BadRequest("Country not found!.");
    }
    return {
      message: "Country fetched successfully",
      data: country,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//update a country service
const updateCountry = async (id, countryPayload) => {
  // take both id and country payload from the country controller
  //  check if the country exists
  //  update the country
  //  return the country to the country controller

  try {
    const country = await prisma.country.findUnique({
      where: {
        id: id,
      },
    });
    if (!country) {
      throw new BadRequest("Country not found!.");
    }

    const updateCountry = await prisma.country.update({
      where: {
        id: id,
      },
      data: countryPayload,
    });

    if (!updateCountry) {
      throw new BadRequest("Error occured while updating country!.");
    }
    logger.info({
      message: `${countryPayload.name} updated successfully`,
    });
    return {
      message: "Country updated successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
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
      throw new BadRequest("Country not found!.");
    }

    return {
      message: "Country deleted successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  saveCountry,
  getAllCountries,
  getCountry,
  updateCountry,
  removeCountry,
};
