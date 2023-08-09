const { hasher } = require("../../common/hash");
const { PrismaClient } = require("@prisma/client");

const {
  getAllBanks,
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
  forgotPassword,
  changePassword,
  getStaff,
  getDiligenceRequest,
  deleteRequest,
  deleteStaff,
  udpateNigerianBank,
  getDocument,
  getAllDocuments,
  updateRequestDocument,
  createEnterprise,
  udpateEnterprise,
  deleteEnterprise,
  getAllDiligenceEnterprises,
  getEnterprise,
  getEnterpriseByAdminEmail,
  getAllDiligenceManagers,
  getManagerByManagerEmail,
  createManager,
  udpateManager,
  deleteManager,
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

//ENTERPRISE
//create diligence enterprise
exports.CreateEnterprise = async (req, res, next) => {
  try {
    const enterprisePayload = req.body;

    const values = {
      name: enterprisePayload.name,
      address: enterprisePayload.address,
      adminEmail: enterprisePayload.adminEmail,
      color: enterprisePayload.color,
      logo: enterprisePayload.logo,
    };

    const diligenceEnterprise = await createEnterprise(values);

    return res.status(diligenceEnterprise.statusCode).json({
      message: diligenceEnterprise.message,
      data: diligenceEnterprise.data,
    });
  } catch (error) {
    next(error);
  }
};

//update diligence enterprise
exports.UpdateEnterprise = async (req, res, next) => {
  try {
    const enterpriseId = req.params.enterpriseId;
    const enterprisePayload = req.body;

    const values = {
      name: enterprisePayload.name,
      address: enterprisePayload.address,
      adminEmail: enterprisePayload.adminEmail,
      color: enterprisePayload.color,
      logo: enterprisePayload.logo,
    };

    const diligenceEnterprise = await udpateEnterprise(enterpriseId, values);

    return res.status(diligenceEnterprise.statusCode).json({
      message: diligenceEnterprise.message,
      data: diligenceEnterprise.data,
    });
  } catch (error) {
    next(error);
  }
};

//delete diligence enterprise
exports.DeleteEnterprise = async (req, res, next) => {
  try {
    const enterpriseId = req.params.enterpriseId;

    const diligenceEnterprise = await deleteEnterprise(enterpriseId);

    return res
      .status(diligenceEnterprise.statusCode)
      .json({ message: diligenceEnterprise.message });
  } catch (error) {
    next(error);
  }
};

// get single enterprise
exports.GetSingleEnterprise = async (req, res, next) => {
  try {
    const enterpriseId = req.params.enterpriseId;
    const enterprise = await getEnterprise(enterpriseId);

    return res
      .status(enterprise.statusCode)
      .json({ message: enterprise.message, data: enterprise.data });
  } catch (error) {
    next(error);
  }
};

//get all enterprises
exports.GetAllDiligenceEnterprises = async (req, res, next) => {
  try {
    // get the diligence enterprises list
    // return response to the client

    const diligenceEnterprises = await getAllDiligenceEnterprises();
    return res.status(diligenceEnterprises.statusCode).json({
      message: diligenceEnterprises.message,
      data: diligenceEnterprises.data,
    });
  } catch (error) {
    next(error);
  }
};

//get a single enterprise with admin email address
exports.GetSingleEnterpriseByAdminEmail = async (req, res, next) => {
  try {
    const adminEmail = req.params.adminEmail;
    const enterprise = await getEnterpriseByAdminEmail(adminEmail);

    return res
      .status(enterprise.statusCode)
      .json({ message: enterprise.message, data: enterprise.data });
  } catch (error) {
    next(error);
  }
};

//MANAGER
//create diligence manager
exports.CreateManager = async (req, res, next) => {
  try {
    const enterpriseId = req.params.enterpriseId;
    const managerPayload = req.body;

    const values = {
      name: managerPayload.name,
      location: managerPayload.location,
      managerEmail: managerPayload.managerEmail,
      diligenceEnterpriseId: enterpriseId,
    };

    const manager = await createManager(enterpriseId, values);

    return res
      .status(manager.statusCode)
      .json({ message: manager.message, data: manager.data });
  } catch (error) {
    next(error);
  }
};

//get all managers
exports.GetAllDiligenceManagers = async (req, res, next) => {
  try {
    // get the diligence branches list
    // return response to the client
    const enterpriseId = req.params.enterpriseId;
    const managers = await getAllDiligenceManagers(enterpriseId);

    return res.status(managers.statusCode).json({
      message: managers.message,
      data: managers.data,
    });
  } catch (error) {
    next(error);
  }
};

//get single manager
exports.GetSingleManager = async (req, res, next) => {
  try {
    const managerId = req.params.managerId;
    const manager = await getManagers(managerId);

    return res
      .status(manager.statusCode)
      .json({ message: manager.message, data: manager.data });
  } catch (error) {
    next(error);
  }
};

//get a single manager with email address
exports.GetSingleManagerByManagerEmail = async (req, res, next) => {
  try {
    const managerEmail = req.params.managerEmail;
    const manager = await getManagerByManagerEmail(managerEmail);

    return res
      .status(manager.statusCode)
      .json({ message: manager.message, data: manager.data });
  } catch (error) {
    next(error);
  }
};

//update diligence manager
exports.UpdateManager = async (req, res, next) => {
  try {
    const managerId = req.params.managerId;
    const managerPayload = req.body;

    const values = {
      name: managerPayload.name,
      location: managerPayload.location,
      managerEmail: managerPayload.managerEmail,
    };

    const manager = await udpateManager(managerId, values);

    return res
      .status(manager.statusCode)
      .json({ message: manager.message, data: manager.data });
  } catch (error) {
    next(error);
  }
};

//delete diligence branch
exports.DeleteManager = async (req, res, next) => {
  try {
    const managerId = req.params.managerId;

    const manager = await deleteManager(managerId);

    return res.status(manager.statusCode).json({ message: manager.message });
  } catch (error) {
    next(error);
  }
};

//STAFF
//create diligence staff
exports.CreateStaff = async (req, res, next) => {
  try {
    const managerId = req.params.managerId;
    const { email } = req.body;

    const values = {
      email: email,
      diligenceManagerId: managerId,
    };
    const diligenceStaff = await createStaff(managerId, values);

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
    const managerId = req.params.managerId;
    const diligenceStaffs = await getAllDiligenceStaffs(managerId);

    return res.status(diligenceStaffs.statusCode).json({
      message: diligenceStaffs.message,
      data: diligenceStaffs.data,
    });
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
    console.log(error);
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

// //create category
// exports.CreateCategory = async (req, res, next) => {
//   try {
//     const countryId = req.params.countryId;
//     const categoryPayload = req.body;

//     const values = {
//       name: categoryPayload.name,
//       description: categoryPayload.description,
//       slug: categoryPayload.slug,
//       price: categoryPayload.price,
//       name: categoryPayload.name,
//       countryId: countryId,
//     };

//     const reqCat = await categoryService.create(values);

//     return res
//       .status(reqCat.statusCode)
//       .json({ message: reqCat.message, data: reqCat.data });
//   } catch (error) {
//     next(error);
//   }
// };

// //get category list
// exports.GetAllCategory = async (req, res, next) => {
//   try {
//     const reqCat = await categoryService.getAll();

//     return res
//       .status(reqCat.statusCode)
//       .json({ message: reqCat.message, data: reqCat.data });
//   } catch (error) {
//     next(error);
//   }
// };

// //get category
// exports.GetCategory = async (req, res, next) => {
//   try {
//     const categoryId = req.params.categoryId;
//     const reqCat = await categoryService.get(categoryId);

//     return res
//       .status(reqCat.statusCode)
//       .json({ message: reqCat.message, data: reqCat.data });
//   } catch (error) {
//     next(error);
//   }
// };

// //update category
// exports.UpdateCategory = async (req, res, next) => {
//   try {
//     const categoryId = req.params.categoryId;
//     const categoryPayload = req.body;

//     const values = {
//       name: categoryPayload.name,
//       description: categoryPayload.description,
//       slug: categoryPayload.slug,
//       price: categoryPayload.price,
//       name: categoryPayload.name,
//     };

//     const reqCat = await categoryService.update(categoryId, values);

//     return res
//       .status(reqCat.statusCode)
//       .json({ message: reqCat.message, data: reqCat.data });
//   } catch (error) {
//     next(error);
//   }
// };

// //delete category
// exports.DeleteCategory = async (req, res, next) => {
//   try {
//     const categoryId = req.params.categoryId;
//     const reqCat = await categoryService.delete(categoryId);

//     return res.status(reqCat.statusCode).json({ message: reqCat.message });
//   } catch (error) {
//     next(error);
//   }
// };
