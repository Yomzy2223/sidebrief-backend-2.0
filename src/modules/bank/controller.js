const {
  saveBank,
  getAllBanks,
  getBank,
  removeBank,
  updateBank,
} = require("./service");

// create a new bank
exports.CreateBank = async (req, res, next) => {
  try {
    // get the validated payload from the the request body
    // send the validated payload to addBank service
    // return response to the client

    const bankPayload = req.body;

    const values = {
      name: bankPayload.name.toLowerCase(),
      code: bankPayload.code,
      url: bankPayload.url,
      image: bankPayload.image,
    };

    const bank = await saveBank(values);

    return res
      .status(bank.statusCode)
      .json({ message: bank.message, data: bank.data });
  } catch (error) {
    next(error);
  }
};

//get all banks
exports.GetAllBanks = async (req, res, next) => {
  try {
    // get the bank list
    // return response to the client

    const banks = await getAllBanks();

    return res
      .status(banks.statusCode)
      .json({ message: banks.message, data: banks.data });
  } catch (error) {
    next(error);
  }
};

//get a bank with id
exports.GetBank = async (req, res, next) => {
  try {
    // check if there is id
    // pass the id to the service
    // return bank to client

    const id = req.params.id;

    const bank = await getBank(id);

    return res
      .status(bank.statusCode)
      .json({ message: bank.message, data: bank.data });
  } catch (error) {
    next(error);
  }
};

//update a bank
exports.UpdateBank = async (req, res, next) => {
  try {
    //get the payload
    // validate the payload
    // send the payload to the service
    // return response

    const id = req.params.id;
    const bankPayload = req.body;

    const values = {
      name: bankPayload.name.toLowerCase(),
      code: bankPayload.code,
      url: bankPayload.url,
      image: bankPayload.image,
    };

    const bank = await updateBank(id, values);

    return res.status(bank.statusCode).json({ message: bank.message });
  } catch (error) {
    next(error);
  }
};

//delete a bank
exports.DeleteBank = async (req, res) => {
  try {
    //check if there is id
    // send the id to the delete service
    //return response to the client

    const id = req.params.id;

    const deleteBank = await removeBank(id);

    return res
      .status(deleteBank.statusCode)
      .json({ message: deleteBank.message });
  } catch (error) {
    next(error);
  }
};
