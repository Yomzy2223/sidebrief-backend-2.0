const models = require("../../../sequelize/models/index");
const logger = require("../../../utils/logger");
const {
  saveBank,
  getAllBanks,
  getBank,
  removeBank,
  updateBank,
} = require("../services/bankService");

// create a new bank
exports.CreateBank = async (req, res) => {
  //   //get the payload from the the request body
  //   //validate the payload
  //   //add the new bank to the table

  try {
    const { bankName, bankCode, bankUrl, bankImage } = req.body;

    const bank = await saveBank({
      bankName,
      bankCode,
      bankUrl,
      bankImage,
    });

    if (bank.error) {
      return res.status(bank.statusCode).json({ error: bank.error });
    }

    res.status(200).json(bank);
    logger.info({ message: `${bankName} created successfully` });
  } catch (error) {
    logger.error({
      message: `error occured while creatiin a bank`,
      level: "error",
    });
    console.log(error);
    return res.status(500).json({ error: "Error Occured!." });
  }
};

//get all banks
exports.GetAllBanks = async (req, res) => {
  try {
    const banks = await getAllBanks();
    if (banks === null) {
      return res
        .status(500)
        .json({ error: "Error occured while getting all banks." });
    }

    res.status(200).json(banks);
  } catch (error) {
    logger.error({
      message: `error occured while fetching all banks`,
      level: "error",
    });
    console.log(error);
    return res.status(500).json({ error: "Error Occured!." });
  }
};

//get a bank with id
exports.GetBank = async (req, res) => {
  // check if there is id
  // return bank to client

  try {
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
    res.status(200).json(bank);
  } catch (error) {
    logger.error({
      message: `error occured while getting bank`,
      level: "error",
    });
    return res.status(500).json({ error: "Error Occured!." });
  }
};

//update a bank
exports.UpdateBank = async (req, res) => {
  try {
    const id = req.params.id;
    const { bankName, bankCode, bankUrl, bankImage } = req.body;
    const body = {
      bankName: bankName,
      bankCode: bankCode,
      bankUrl: bankUrl,
      bankImage: bankImage,
    };
    const bank = await updateBank(id, body);

    if (bank.error) {
      return res.status(bank.statusCode).json({ error: bank.error });
    }

    console.log("service baaaa", bank);

    res.status(200).json(bank);
  } catch (error) {
    logger.error({
      message: `error occured while fetching all banks`,
      level: "error",
    });
    console.log(error);
    return res.status(500).json({ error: "Error Occured!." });
  }
};

//delete a bank
exports.DeleteBank = async (req, res) => {
  //check if there is id
  //delete the bank

  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        error: "Please provide id",
      });
    }
    const deleteBank = await removeBank(id);

    if (deleteBank.error) {
      return res
        .status(deleteBank.statusCode)
        .json({ error: deleteBank.error });
    }
    res.status(200).json(deleteBank);
  } catch (error) {
    logger.error({
      message: `error occured while deleting bank `,
      level: "error",
    });
    return res.status(500).json({ error: "Error Occuredddd!." });
  }
};
