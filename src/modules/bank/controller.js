const { validateBank } = require("../../utils/validation");
const {
  saveBank,
  getAllBanks,
  getBank,
  removeBank,
  updateBank,
} = require("./service");

// create a new bank
exports.CreateBank = async (req, res) => {
  // get the validated payload from the the request body
  // send the validated payload to addBank service
  // return response to the client

  const bankPayload = req.body;

  const bank = await saveBank(bankPayload);

  if (bank.error) {
    return res.status(bank.statusCode).json({ error: bank.error });
  }

  return res
    .status(bank.statusCode)
    .json({ message: bank.message, data: bank.data });
};

//get all banks
exports.GetAllBanks = async (req, res) => {
  // get the bank list
  // return response to the client

  const banks = await getAllBanks();
  if (banks.error) {
    return res.status(banks.statusCode).json({ error: banks.error });
  }

  return res
    .status(banks.statusCode)
    .json({ message: banks.message, data: banks.data });
};

//get a bank with id
exports.GetBank = async (req, res) => {
  // check if there is id
  // pass the id to the service
  // return bank to client

  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      error: "Please provide id",
    });
  }
  const bank = await getBank(id);

  if (bank.error) {
    return res.status(bank.statusCode).json({ error: bank.error });
  }
  return res
    .status(bank.statusCode)
    .json({ message: bank.message, data: bank.data });
};

//update a bank
exports.UpdateBank = async (req, res) => {
  //get the payload
  // validate the payload
  // send the payload to the service
  // return response

  const id = req.params.id;
  const bankPayload = req.body;
  const bank = await updateBank(id, bankPayload);

  if (bank.error) {
    return res.status(bank.statusCode).json({ error: bank.error });
  }

  return res.status(bank.statusCode).json({ message: bank.message });
};

//delete a bank
exports.DeleteBank = async (req, res) => {
  //check if there is id
  // send the id to the delete service
  //return response to the client

  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      error: "Please provide id",
    });
  }
  const deleteBank = await removeBank(id);

  if (deleteBank.error) {
    return res.status(deleteBank.statusCode).json({ error: deleteBank.error });
  }
  return res
    .status(deleteBank.statusCode)
    .json({ message: deleteBank.message });
};
