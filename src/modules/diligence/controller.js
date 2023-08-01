const { hasher } = require("../../common/hash");
const { PrismaClient } = require("@prisma/client");

const {
  createBank,
  getAllBanks,
  getAllDiligenceBanks,
  createBranch,
  createStaff,
  getAllDiligenceStaffs,
  createAccount,
  loginUser,
  createRequest,
  getAllDiligenceRequests,
  saveRequestDocument,
  removeRequestDocument,
  verifyRequest,
  updateRequest,
  getAllDiligenceBranches,
  forgotPassword,
  changePassword,
  getBranch,
  getStaff,
  getBank,
  udpateBank,
  deleteBank,
  getDiligenceRequest,
  deleteRequest,
  deleteBranch,
  udpateBranch,
  deleteStaff,
  getBankByAdminEmail,
  udpateNigerianBank,
  getDocument,
  getAllDocuments,
  updateRequestDocument,
} = require("./service");

//DILIGENCE PRODUCT CONTROLLERS

//get all banks
exports.GetAllNigerianBanks = async (req, res, next) => {
  try {
    // get the banks list
    // return response to the client

    const banks = await getAllBanks();
    return res
      .status(banks.statusCode)
      .json({ message: banks.message, data: banks.data });
  } catch (error) {
    next(error);
  }
};

//create diligence bank
exports.CreateBank = async (req, res, next) => {
  try {
    const bankPayload = req.body;

    const values = {
      name: bankPayload.name,
      address: bankPayload.address,
      adminEmail: bankPayload.adminEmail,
    };

    const diligenceBank = await createBank(values);

    return res
      .status(diligenceBank.statusCode)
      .json({ message: diligenceBank.message, data: diligenceBank.data });
  } catch (error) {
    next(error);
  }
};

//update diligence bank
exports.UpdateBank = async (req, res, next) => {
  try {
    const bankId = req.params.bankId;
    const bankPayload = req.body;

    const values = {
      name: bankPayload.name,
      address: bankPayload.address,
      adminEmail: bankPayload.adminEmail,
    };

    const diligenceBank = await udpateBank(bankId, values);

    return res
      .status(diligenceBank.statusCode)
      .json({ message: diligenceBank.message, data: diligenceBank.data });
  } catch (error) {
    next(error);
  }
};

//delete diligence bank
exports.DeleteBank = async (req, res, next) => {
  try {
    const bankId = req.params.bankId;

    const diligenceBank = await deleteBank(bankId);

    return res
      .status(diligenceBank.statusCode)
      .json({ message: diligenceBank.message });
  } catch (error) {
    next(error);
  }
};

//get all banks
exports.GetAllDiligenceBanks = async (req, res, next) => {
  try {
    // get the diligence banks list
    // return response to the client

    const diligenceBanks = await getAllDiligenceBanks();
    return res
      .status(diligenceBanks.statusCode)
      .json({ message: diligenceBanks.message, data: diligenceBanks.data });
  } catch (error) {
    next(error);
  }
};

//create diligence branch
exports.CreateBranch = async (req, res, next) => {
  try {
    const bankId = req.params.bankId;
    const branchPayload = req.body;

    const values = {
      name: branchPayload.name,
      state: branchPayload.state,
      managerEmail: branchPayload.managerEmail,
      diligenceBankId: bankId,
    };

    const diligenceBranch = await createBranch(bankId, values);

    return res
      .status(diligenceBranch.statusCode)
      .json({ message: diligenceBranch.message, data: diligenceBranch.data });
  } catch (error) {
    next(error);
  }
};

//get all branches
exports.GetAllDiligenceBranches = async (req, res, next) => {
  try {
    // get the diligence branches list
    // return response to the client
    const bankId = req.params.bankId;
    const diligenceBranches = await getAllDiligenceBranches(bankId);

    return res.status(diligenceBranches.statusCode).json({
      message: diligenceBranches.message,
      data: diligenceBranches.data,
    });
  } catch (error) {
    next(error);
  }
};

//create diligence staff
exports.CreateStaff = async (req, res, next) => {
  try {
    const branchId = req.params.branchId;
    const { email } = req.body;

    const values = {
      email: email,
      diligenceBranchId: branchId,
    };
    const diligenceStaff = await createStaff(branchId, values);

    return res
      .status(diligenceStaff.statusCode)
      .json({ message: diligenceStaff.message, data: diligenceStaff.data });
  } catch (error) {
    next(error);
  }
};

//get all staffs
exports.GetAllDiligenceStaffs = async (req, res, next) => {
  try {
    // get the diligence staffs list
    // return response to the client
    const branchId = req.params.branchId;
    const diligenceStaffs = await getAllDiligenceStaffs(branchId);

    return res.status(diligenceStaffs.statusCode).json({
      message: diligenceStaffs.message,
      data: diligenceStaffs.data,
    });
  } catch (error) {
    next(error);
  }
};

//create diligence user
exports.CreateAccount = async (req, res, next) => {
  try {
    const accountPayload = req.body;

    const cryptedPassword = await hasher(accountPayload.password, 12);

    const values = {
      firstName: accountPayload.firstName,
      lastName: accountPayload.lastName,
      email: accountPayload.email,
      password: cryptedPassword,
    };

    const diligenceUser = await createAccount(values);

    return res
      .status(diligenceUser.statusCode)
      .json({ message: diligenceUser.message, data: diligenceUser.data });
  } catch (error) {
    next(error);
  }
};

// login user
exports.UserLogin = async (req, res, next) => {
  try {
    // get the login payload
    // validate the payload
    // pass the payload to login service
    // return diligence user and the token to client

    const loginPayload = req.body;

    const user = await loginUser(loginPayload);

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

//send diligence user a reset link
exports.UserPasswordResetLink = async (req, res, next) => {
  try {
    const { email } = req.body;

    const reset = await forgotPassword(email);

    return res.status(reset.statusCode).json({ message: reset.message });
  } catch (error) {
    next(error);
  }
};

//reset diligence user password
exports.UserPasswordReset = async (req, res, next) => {
  try {
    // get the login payload
    // validate the payload
    // pass the payload to reset service

    // return the response to the client

    const loginPayload = req.body;
    const userPass = await changePassword(loginPayload);

    return res.status(userPass.statusCode).json({ message: userPass.message });
  } catch (error) {
    next(error);
  }
};

//create diligence request
exports.CreateRequest = async (req, res, next) => {
  try {
    const requestPayload = req.body;

    const values = {
      name: requestPayload.name,
      registrationNumber: requestPayload.registrationNumber,
      status: "Unverified",
      createdBy: requestPayload.email,
    };

    const diligenceRequest = await createRequest(values);

    return res
      .status(diligenceRequest.statusCode)
      .json({ message: diligenceRequest.message, data: diligenceRequest.data });
  } catch (error) {
    next(error);
  }
};

//get a diligence request
exports.GetRequest = async (req, res, next) => {
  try {
    const requestId = req.params.requestId;

    const diligenceRequest = await getDiligenceRequest(requestId);

    return res
      .status(diligenceRequest.statusCode)
      .json({ message: diligenceRequest.message, data: diligenceRequest.data });
  } catch (error) {
    next(error);
  }
};

//delete a diligence request
exports.DeleteRequest = async (req, res, next) => {
  try {
    const requestId = req.params.requestId;

    const diligenceRequest = await deleteRequest(requestId);

    return res
      .status(diligenceRequest.statusCode)
      .json({ message: diligenceRequest.message });
  } catch (error) {
    next(error);
  }
};

//get all requests
exports.GetAllDiligenceRequests = async (req, res, next) => {
  try {
    // get the diligence requests list
    // return response to the client

    const diligenceRequests = await getAllDiligenceRequests();

    return res.status(diligenceRequests.statusCode).json({
      message: diligenceRequests.message,
      data: diligenceRequests.data,
    });
  } catch (error) {
    next(error);
  }
};

//verify a request
exports.VerifyRequest = async (req, res, next) => {
  try {
    //check if there is id
    // send the id to the verify service
    //return response to the client

    const id = req.params.id;

    const verify = await verifyRequest(id);

    return res.status(verify.statusCode).json({ message: verify.message });
  } catch (error) {
    next(error);
  }
};

//update a request
exports.UpdateRequest = async (req, res, next) => {
  try {
    //check if there is id
    // send the id to the update service
    //return response to the client

    const id = req.params.id;

    const update = await updateRequest(id);

    return res.status(update.statusCode).json({ message: update.message });
  } catch (error) {
    next(error);
  }
};
//add diligence document
exports.AddRequestDocument = async (req, res, next) => {
  try {
    const documentPayload = req.body;
    const requestId = req.params.requestId;

    const values = {
      name: documentPayload.name,
      type: documentPayload.type,
      description: documentPayload.description,
      link: documentPayload.link,
      diligenceRequestId: requestId,
    };

    const document = await saveRequestDocument(requestId, values);
    if (document.error) {
      return res.status(document.statusCode).json({ error: document.error });
    }
    return res.status(200).json(document);
  } catch (error) {
    next(error);
  }
};

//delete a document
exports.DeleteDocument = async (req, res, next) => {
  try {
    //check if there is id
    // send the id to the delete service
    //return response to the client

    const id = req.params.id;

    const deleteDocument = await removeRequestDocument(id);

    return res
      .status(deleteDocument.statusCode)
      .json({ message: deleteDocument.message });
  } catch (error) {
    next(error);
  }
};

//update a document
exports.UpdateDocument = async (req, res, next) => {
  try {
    //check if there is id
    // send the id to the delete service
    //return response to the client
    const documentId = req.params.documentId;
    const documentPayload = req.body;

    const values = {
      name: documentPayload.name,
      type: documentPayload.type,
      description: documentPayload.description,
      link: documentPayload.link,
    };

    const deleteDocument = await updateRequestDocument(documentId, values);

    return res
      .status(deleteDocument.statusCode)
      .json({ message: deleteDocument.message, data: deleteDocument.data });
  } catch (error) {
    next(error);
  }
};

// get single document
exports.GetDocument = async (req, res, next) => {
  try {
    const documentId = req.params.documentId;
    const document = await getDocument(documentId);

    return res
      .status(document.statusCode)
      .json({ message: document.message, data: document.data });
  } catch (error) {
    next(error);
  }
};

// get all documents
exports.GetAllDocuments = async (req, res, next) => {
  try {
    const requestId = req.params.requestId;
    const document = await getAllDocuments(requestId);

    return res
      .status(document.statusCode)
      .json({ message: document.message, data: document.data });
  } catch (error) {
    next(error);
  }
};

// get single bank
exports.GetSingleBank = async (req, res, next) => {
  try {
    const bankId = req.params.bankId;
    const bank = await getBank(bankId);

    return res
      .status(bank.statusCode)
      .json({ message: bank.message, data: bank.data });
  } catch (error) {
    next(error);
  }
};

//get single branch
exports.GetSingleBranch = async (req, res, next) => {
  try {
    const branchId = req.params.branchId;
    const branch = await getBranch(branchId);

    return res
      .status(branch.statusCode)
      .json({ message: branch.message, data: branch.data });
  } catch (error) {
    next(error);
  }
};

//get single staff
exports.GetSingleStaff = async (req, res, next) => {
  try {
    const staffId = req.params.staffId;
    const staff = await getStaff(staffId);

    return res
      .status(staff.statusCode)
      .json({ message: staff.message, data: staff.data });
  } catch (error) {
    next(error);
  }
};

//delete diligence staff
exports.DeleteStaff = async (req, res, next) => {
  try {
    const staffId = req.params.staffId;

    const diligenceStaff = await deleteStaff(staffId);

    return res
      .status(diligenceStaff.statusCode)
      .json({ message: diligenceStaff.message });
  } catch (error) {
    next(error);
  }
};

//update diligence branch
exports.UpdateBranch = async (req, res, next) => {
  try {
    const branchId = req.params.branchId;
    const branchPayload = req.body;

    const values = {
      name: branchPayload.name,
      state: branchPayload.state,
      managerEmail: branchPayload.managerEmail,
    };

    const diligenceBranch = await udpateBranch(branchId, values);

    return res
      .status(diligenceBranch.statusCode)
      .json({ message: diligenceBranch.message, data: diligenceBranch.data });
  } catch (error) {
    next(error);
  }
};

//delete diligence branch
exports.DeleteBranch = async (req, res, next) => {
  try {
    const branchId = req.params.branchId;

    const diligenceBranch = await deleteBranch(branchId);

    return res
      .status(diligenceBranch.statusCode)
      .json({ message: diligenceBranch.message });
  } catch (error) {
    next(error);
  }
};

//get a single bank with admin email address
exports.GetSingleBankByAdminEmail = async (req, res, next) => {
  try {
    const adminEmail = req.params.adminEmail;
    const bank = await getBankByAdminEmail(adminEmail);

    return res
      .status(bank.statusCode)
      .json({ message: bank.message, data: bank.data });
  } catch (error) {
    next(error);
  }
};

//update Nigerian bank
exports.UpdateNigerianBank = async (req, res, next) => {
  try {
    const bankId = req.params.bankId;
    const bankPayload = req.body;

    const values = {
      color: bankPayload.color,
    };

    const bank = await udpateNigerianBank(bankId, values);

    return res
      .status(bank.statusCode)
      .json({ message: bank.message, data: bank.data });
  } catch (error) {
    next(error);
  }
};

// exports.Test = async (req, res, next) => {
//   try {
//     const url = "https://nigerianbanks.xyz";
//     const response = await axios.get(url);

//     const newList = response.data.map((data) => ({
//       name: data.name,
//       slug: data.slug,
//       logo: data.logo,
//     }));

//     const save = await prisma.nigerianBank.createMany({
//       data: newList,
//       skipDuplicates: true,
//     });
//     console.log(save);
//     return res.status(200).json({ data: save });
//   } catch (error) {
//     console.log(error);
//   }
// };
