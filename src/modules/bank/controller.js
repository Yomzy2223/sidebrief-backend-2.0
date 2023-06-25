const { validateBank } = require("../../utils/validation");
const {
  saveBank,
  getAllBanks,
  getBank,
  removeBank,
  updateBank,
} = require("./service");

// create a new bank
exports.BankCreator = async (req, res) => {
  // get the validated payload from the the request body
  // send the validated payload to addBank service
  // return response to the client

  const bankPayload = req.body;

  const bank = await saveBank(bankPayload);

  if (bank.error) {
    return res.status(bank.statusCode).json({ error: bank.error });
  }

  return res.json(bank);
};

//get all banks
exports.BanksFetcher = async (req, res) => {
  // get the bank list
  // return response to the client

  const banks = await getAllBanks();
  if (banks === null) {
    return res
      .status(500)
      .json({ error: "Error occured while getting all banks." });
  }

  return res.status(200).json(banks);
};

//get a bank with id
exports.BankFetcher = async (req, res) => {
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
  return res.status(200).json(bank);
};

//update a bank
exports.BankModifier = async (req, res) => {
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

  return res.status(200).json(bank);
};

//delete a bank
exports.BankRemover = async (req, res) => {
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
  return res.status(200).json(deleteBank);
};
