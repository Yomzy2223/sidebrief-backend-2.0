const {
  saveCountry,
  getAllCountries,
  getCountry,
  updateCountry,
  removeCountry,
} = require("./service");

// create a new country
exports.CreateCountry = async (req, res) => {
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

  if (country.error) {
    return res.status(country.statusCode).json({ error: country.error });
  }

  return res.json(country);
};

//get all countries
exports.GetCountries = async (req, res) => {
  // get the country list
  // return response to the client

  const countries = await getAllCountries();
  if (countries.error) {
    return res.status(countries.statusCode).json({ error: countries.error });
  }

  return res
    .status(countries.statusCode)
    .json({ message: countries.message, data: countries.data });
};

//get a country with id
exports.GetCountry = async (req, res) => {
  // check if there is id
  // pass the id to the service
  // return country to client

  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      error: "Please provide id",
    });
  }
  const country = await getCountry(id);

  if (country.error) {
    return res.status(country.statusCode).json({ error: country.error });
  }
  return res
    .status(country.statusCode)
    .json({ message: country.message, data: country.data });
};

//update a country
exports.UpdateCountry = async (req, res) => {
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

  if (country.error) {
    return res.status(country.statusCode).json({ error: country.error });
  }

  return res.status(country.statusCode).json({ message: country.message });
};

//delete a country
exports.DeleteCountry = async (req, res) => {
  //check if there is id
  // send the id to the delete service
  //return response to the client

  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      error: "Please provide id",
    });
  }
  const deleteCountry = await removeCountry(id);

  if (deleteCountry.error) {
    return res
      .status(deleteCountry.statusCode)
      .json({ error: deleteCountry.error });
  }
  return res
    .status(deleteCountry.statusCode)
    .json({ message: deleteCountry.message });
};
