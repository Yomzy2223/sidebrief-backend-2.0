const logger = require("../../../utils/logger");
const {
  removeBank,
  saveBank,
  getAllBanks,
  getBank,
} = require("../services/bankService");

exports.CreateBank = async (req, res) => {
  try {
    //get the payload from the request body
    //validate the payload
    //add the new bank to the table

    const { bankName, bankCode, bankUrl, bankImage } = req.body;

    const bank = await saveBank({
      bankName,
      bankCode,
      bankUrl,
      bankImage,
    });

    if (!bank) {
      return res
        .status(400)
        .json({ message: "Error occured while creating this bank." });
    }

    if (bank.error) {
      return res.status(bank.statusCode).json({ error: bank.error });
    }

    res.status(200).json(bank);
    console.log("dddd", bankCode);
    logger.info({ message: `${bankCode} created successfully` });
  } catch (error) {
    logger.error({
      message: `error occured while creatiin a bank`,
      level: "error",
    });
    console.log(error);
    return res.status(500).json({ message: "Error Occured!." });
  }
};

exports.GetAllBanks = async (req, res) => {
  try {
    //get the bank list from the table
    //return the bank list to the client

    const banks = await getAllBanks();
    if (banks === null) {
      return res
        .status(500)
        .json({ error: "Error occured while getting all banks." });
    }

    res.status(200).json(banks);

    logger.info("Banks fetched successfuly");
  } catch (error) {
    logger.error({
      message: `error occured while fetching all banks`,
      level: "error",
    });
    console.log(error);
    return res.status(500).json({ message: "Error Occured!." });
  }
};

exports.GetBank = async (req, res) => {
  try {
    //check if there is id
    //check if the bank exists
    //get the bank from the record
    //return the bank to the client

    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "Please provide an id." });
    }
    const bank = await getBank(id);

    if (bank.rowCount < 1) {
      return res.status(400).json({ message: "Bank not found!." });
    }

    if (!bank) {
      return res
        .status(400)
        .json({ message: "Error occured while getting bank." });
    }

    res.status(200).json({
      message: "Bank fetched successfully",
      data: bank.rows,
    });

    logger.info("Bank fetched successfuly");
  } catch (error) {
    logger.error({
      message: `error occured while getting `,
      level: "error",
    });
    console.log(error);
    return res.status(500).json({ message: "Error Occured!." });
  }
};

exports.DeleteBank = async (req, res) => {
  try {
    //check if there is id
    //check if the bank exists
    //remove the bank from the record

    const id = req.params.id;

    const bank = await removeBank(id);

    if (bank.rowCount < 1) {
      return res.status(400).json({ error: "Bank not found!." });
    }

    if (!bank) {
      return res
        .status(400)
        .json({ error: "Error occured while deleting bank." });
    }

    res.status(200).json({
      message: "Bank deleted successfully",
    });
  } catch (error) {
    logger.error({
      message: `error occured while deleting bank `,
      level: "error",
    });
    return res.status(500).json({ error: "Error Occured!." });
  }
};
