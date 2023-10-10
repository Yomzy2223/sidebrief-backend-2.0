import { Request, Response, NextFunction } from "express";
import { CountryPayload } from "./entities";
import {
  saveCountry,
  getAllCountries,
  getCountry,
  updateCountry,
  removeCountry,
} from "./service";

// create a new country
const CreateCountry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the validated payload from the the request body
    // send the validated payload to addCountry service
    // return response to the client

    const countryPayload = req.body;

    const values: CountryPayload = {
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
const GetCountries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
const GetCountry = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // check if there is id
    // pass the id to the service
    // return country to client

    const id: string = req.params.id;

    const country = await getCountry(id);

    return res
      .status(country.statusCode)
      .json({ message: country.message, data: country.data });
  } catch (error) {
    next(error);
  }
};

//update a country
const UpdateCountry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //get the payload
    // validate the payload
    // send the payload to the service
    // return response

    const id: string = req.params.id;
    const countryPayload = req.body;

    const values: CountryPayload = {
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
const DeleteCountry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //check if there is id
    // send the id to the delete service
    //return response to the client

    const id: string = req.params.id;

    const deleteCountry = await removeCountry(id);

    return res
      .status(deleteCountry.statusCode)
      .json({ message: deleteCountry.message });
  } catch (error) {
    next(error);
  }
};

export {
  CreateCountry,
  UpdateCountry,
  GetCountry,
  DeleteCountry,
  GetCountries,
};
