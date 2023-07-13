const {
  saveCountry,
  getAllCountries,
  getCountry,
  updateCountry,
  removeCountry,
} = require("./service");

// create a new country
exports.CreateCountry = async (req, res, next) => {
  try {
    // get the validated payload from the the request body
    // send the validated payload to addCountry service
    // return response to the client

    const countryPayload = req.body;
    const values = {
      name: countryPayload.name.toLowerCase(),
      iso: countryPayload.iso,
      flagUrl: countryPayload.flagUrl,
      code: countryPayload.code,
      currency: countryPayload.currency,
    };
    const country = await saveCountry(values);
    return res.json(country);
  } catch (error) {
    next(error);
  }
};

//get all countries
exports.GetCountries = async (req, res, next) => {
  try {
    // get the country list
    // return response to the client

    const countries = await getAllCountries();

    return res
      .status(countries.statusCode)
      .json({ message: countries.message, data: countries.data });
  } catch (error) {
    next(error);
  }
};

//get a country with id
exports.GetCountry = async (req, res, next) => {
  try {
    // check if there is id
    // pass the id to the service
    // return country to client

    const id = req.params.id;

    const country = await getCountry(id);

    return res
      .status(country.statusCode)
      .json({ message: country.message, data: country.data });
  } catch (error) {
    next(error);
  }
};

//update a country
exports.UpdateCountry = async (req, res, next) => {
  try {
    //get the payload
    // validate the payload
    // send the payload to the service
    // return response

    const id = req.params.id;
    const countryPayload = req.body;
    const values = {
      name: countryPayload.name.toLowerCase(),
      iso: countryPayload.iso,
      flagUrl: countryPayload.flagUrl,
      code: countryPayload.code,
      currency: countryPayload.currency,
    };
    const country = await updateCountry(id, values);

    return res.status(country.statusCode).json({ message: country.message });
  } catch (error) {
    next(error);
  }
};

//delete a country
exports.DeleteCountry = async (req, res, next) => {
  try {
    //check if there is id
    // send the id to the delete service
    //return response to the client

    const id = req.params.id;

    const deleteCountry = await removeCountry(id);

    return res
      .status(deleteCountry.statusCode)
      .json({ message: deleteCountry.message });
  } catch (error) {
    next(error);
  }
};
