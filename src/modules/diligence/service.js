const { PrismaClient } = require("@prisma/client");
const logger = require("../../config/logger");
const { BadRequest } = require("../../utils/requestErrors");
const prisma = new PrismaClient();
const EmailSender = require("../../services/emailEngine");
const { generateToken } = require("../../common/token");
const { matchChecker } = require("../../common/hash");

//DILIGENCE PRODUCT SERVICES

//get all banks service
const getAllBanks = async () => {
  //  get the bank list from the table
  //  return the bank list to the country controller
  try {
    const banks = await prisma.nigerianBank.findMany({});
    if (!banks) {
      throw new BadRequest("Banks not found!.");
    }

    return {
      message: "Nigerian banks fetched successfully",
      data: banks,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//update nigerian branch
const udpateNigerianBank = async (bankId, bankPayload) => {
  try {
    const checkBank = await prisma.nigerianBank.findUnique({
      where: { id: bankId },
    });

    if (!checkBank) {
      throw new BadRequest("Bank not found.");
    }

    const bank = await prisma.nigerianBank.update({
      where: { id: bankId },
      data: {
        color: bankPayload.color,
      },
    });

    if (!bank) {
      throw new BadRequest("Error occured while updating bank");
    }

    return {
      statusCode: 200,
      message: "Bank updated successfully!",
      data: bank,
    };
  } catch (error) {
    throw error;
  }
};

//create diligence bank
const createBank = async (bankPayload) => {
  try {
    const checkBank = await prisma.diligenceBank.findUnique({
      where: { name: bankPayload.name },
    });

    if (checkBank) {
      throw new BadRequest("Bank with this name already exists");
    }

    const checkAdminEmail = await prisma.diligenceBank.findUnique({
      where: { adminEmail: bankPayload.adminEmail },
    });

    if (checkAdminEmail) {
      throw new BadRequest("Email already exists");
    }

    const diligence = await prisma.diligenceBank.create({ data: bankPayload });

    if (!diligence) {
      throw new BadRequest("Error occured while creating bank");
    }
    logger.info({ message: `${bankPayload.name} created successfully` });

    const regUrl = `${process.env.BASE_URL}`;
    const subject = "Welcome to Sidebrief.";

    payload = {
      name: diligence.name,
      url: regUrl,
    };

    const senderEmail = '"Sidebrief" <hey@sidebrief.com>';
    const recipientEmail = diligence.adminEmail;
    //send email
    EmailSender(
      subject,
      payload,
      recipientEmail,
      senderEmail,
      "../view/welcomeBank.ejs"
    );

    return {
      statusCode: 200,
      message: "Bank created successfully!",
      data: diligence,
    };
  } catch (error) {
    throw error;
  }
};

//update diligence bank
const udpateBank = async (bankId, bankPayload) => {
  try {
    const checkBank = await prisma.diligenceBank.findUnique({
      where: { id: bankId },
    });

    if (!checkBank) {
      throw new BadRequest("Bank not found.");
    }

    const diligence = await prisma.diligenceBank.update({
      where: { id: bankId },
      data: bankPayload,
    });

    if (!diligence) {
      throw new BadRequest("Error occured while updating bank");
    }
    logger.info({ message: `${bankPayload.name} bank updated successfully` });

    return {
      statusCode: 200,
      message: "Bank updated successfully!",
      data: diligence,
    };
  } catch (error) {
    throw error;
  }
};

//delete diligence bank
const deleteBank = async (bankId) => {
  try {
    const checkBank = await prisma.diligenceBank.findUnique({
      where: { id: bankId },
    });

    if (!checkBank) {
      throw new BadRequest("Bank not found.");
    }

    const diligence = await prisma.diligenceBank.delete({
      where: { id: bankId },
    });

    if (!diligence) {
      throw new BadRequest("Error occured while deleting bank");
    }
    logger.info({ message: `${checkBank.name} bank deleted successfully` });

    return {
      statusCode: 200,
      message: "Bank deleted successfully!",
    };
  } catch (error) {
    throw error;
  }
};

//get all diligence banks service
const getAllDiligenceBanks = async () => {
  //  get the diligence bank list from the table
  //  return the diligence bank list to the diligence bank controller
  try {
    const diligenceBanks = await prisma.diligenceBank.findMany({});
    if (!diligenceBanks) {
      throw new BadRequest("Diligence Banks not found!.");
    }

    return {
      message: "Diligence banks fetched successfully",
      data: diligenceBanks,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//create diligence branch
const createBranch = async (bankId, branchPayload) => {
  try {
    const checkBank = await prisma.diligenceBank.findUnique({
      where: { id: bankId },
    });

    if (!checkBank) {
      throw new BadRequest("Bank not found.");
    }

    const checkBranch = await prisma.diligenceBranch.findUnique({
      where: { name: branchPayload.name },
    });

    if (checkBranch) {
      throw new BadRequest("Branch with this name already exists");
    }

    const checkManagerEmail = await prisma.diligenceBranch.findUnique({
      where: { managerEmail: branchPayload.managerEmail },
    });

    if (checkManagerEmail) {
      throw new BadRequest("Branch Manager this email already exists");
    }

    const diligenceBranch = await prisma.diligenceBranch.create({
      data: branchPayload,
    });

    if (!diligenceBranch) {
      throw new BadRequest("Error occured while creating branch");
    }
    logger.info({
      message: `${branchPayload.name} diligence branch created successfully`,
    });

    const regUrl = `${process.env.BASE_URL}/${checkBank.url}`;
    const subject = "Welcome to Sidebrief.";

    payload = {
      name: branchPayload.managerName,
      url: regUrl,
    };

    const senderEmail = '"Sidebrief" <hey@sidebrief.com>';
    const recipientEmail = branchPayload.managerEmail;
    //send email
    EmailSender(
      subject,
      payload,
      recipientEmail,
      senderEmail,
      "../view/welcomeBank.ejs"
    );

    return {
      statusCode: 200,
      message: "Branch created successfully!",
      data: diligenceBranch,
    };
  } catch (error) {
    throw error;
  }
};

//get all diligence branches service
const getAllDiligenceBranches = async (bankId) => {
  //  get the diligence branches list from the table
  //  return the diligence branches list to the diligence branches controller
  try {
    const diligenceBranches = await prisma.diligenceBranch.findMany({
      where: { diligenceBankId: bankId },
    });
    if (!diligenceBranches) {
      throw new BadRequest("Diligence Branches not found!.");
    }

    return {
      message: "Diligence branches fetched successfully",
      data: diligenceBranches,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//create diligence staff
const createStaff = async (branchId, staffPayload) => {
  try {
    const checkBranch = await prisma.diligenceBranch.findUnique({
      where: { id: branchId },
    });
    if (!checkBranch) {
      throw new BadRequest("Branch not found.");
    }

    const checkStaff = await prisma.diligenceStaff.findUnique({
      where: { email: staffPayload.email },
    });

    if (checkStaff) {
      throw new BadRequest("Staff with this email already exists");
    }

    const diligenceStaff = await prisma.diligenceStaff.create({
      data: staffPayload,
    });

    if (!diligenceStaff) {
      throw new BadRequest("Error occured while creating staff");
    }
    logger.info({
      message: `diligence staff with ${staffPayload.email} created successfully`,
    });

    const regUrl = `${process.env.BASE_URL}/diligence`;
    const subject = "Welcome to Sidebrief.";

    payload = {
      name: staffPayload.email,
      url: regUrl,
    };

    const senderEmail = '"Sidebrief" <hey@sidebrief.com>';
    const recipientEmail = staffPayload.email;
    //send email
    EmailSender(
      subject,
      payload,
      recipientEmail,
      senderEmail,
      "../view/welcomeBank.ejs"
    );

    return {
      statusCode: 200,
      message: "Staff created successfully!",
      data: diligenceStaff,
    };
  } catch (error) {
    throw error;
  }
};

//get all diligence Staffs service
const getAllDiligenceStaffs = async (branchId) => {
  //  get the diligence Staffs list from the table
  //  return the diligence Staffs list to the diligence branches controller
  try {
    const diligenceStaffs = await prisma.diligenceStaff.findMany({
      where: { diligenceBranchId: branchId },
    });
    if (!diligenceStaffs) {
      throw new BadRequest("Diligence Staffs not found!.");
    }

    return {
      message: "Diligence Staffs fetched successfully",
      data: diligenceStaffs,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//add diligence user helper
const createDiligenceUser = async (accountPayload, role) => {
  const value = {
    ...accountPayload,
    role: `${role}`,
  };
  const user = await prisma.diligenceUser.create({ data: value });

  if (!user) {
    throw new BadRequest("Error occurred while creating user");
  }
};

//create diligence user
const createAccount = async (accountPayload) => {
  try {
    const checkUser = await prisma.diligenceUser.findUnique({
      where: { email: accountPayload.email },
    });

    if (checkUser) {
      throw new BadRequest("User with this email already exists");
    }

    const admin = await prisma.diligenceBank.findUnique({
      where: { adminEmail: accountPayload.email },
    });
    const manager = await prisma.diligenceBranch.findUnique({
      where: { managerEmail: accountPayload.email },
    });
    const staff = await prisma.diligenceStaff.findUnique({
      where: { email: accountPayload.email },
    });

    if (!admin && !manager && !staff) {
      throw new BadRequest("The email address is not registered");
    }

    if (admin) {
      createDiligenceUser(accountPayload, "Admin");
    }

    if (manager) {
      createDiligenceUser(accountPayload, "Branch Manager");
    }

    if (staff) {
      createDiligenceUser(accountPayload, "Staff");
    }

    logger.info({
      message: `Diligence user with ${accountPayload.email} created successfully`,
    });

    const findCreatedUser = await prisma.diligenceUser.findUnique({
      where: { email: accountPayload.email },
    });

    return {
      statusCode: 200,
      message: `User created successfully!`,
      data: {
        firstName: findCreatedUser.firstName,
        lastName: findCreatedUser.lastName,
        email: findCreatedUser.email,
        role: findCreatedUser.role,
      },
    };
  } catch (error) {
    throw error;
  }
};

//sign in service
const loginUser = async (loginPayload) => {
  // take the login payload  from the controller
  //   //check if the user exists with the email address
  //   //return the user to the user controller

  try {
    const user = await prisma.diligenceUser.findUnique({
      where: { email: loginPayload.email },
    });

    if (!user) {
      throw new BadRequest("Diligence user not found!.");
    }

    let checkPassword = await matchChecker(
      loginPayload.password,
      user.password
    );

    if (!checkPassword) {
      throw new BadRequest("Invalid credentials!");
    }

    const userSecret = process.env.TOKEN_USER_SECRET;
    const token = generateToken({ id: user.id }, userSecret, "14d");
    logger.info({
      message: `User with ${loginPayload.email} signed in successfully.`,
    });

    return {
      message: "Login successful.",
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token: token,
        role: user.role,
      },
    };
  } catch (error) {
    throw error;
  }
};

// forgot password service
const forgotPassword = async (email) => {
  try {
    // take the email from the controller
    // check that the email is registered to a user account
    // generate reset token string
    // save and send the reset token the user

    const user = await prisma.diligenceUser.findUnique({
      where: { email: email },
    });

    if (!user) {
      throw new BadRequest("User not found!.");
    }

    const userSecret = process.env.TOKEN_USER_SECRET;
    const userToken = await generateToken({ email: email }, userSecret, "30m");

    const cryptedToken = await hasher(userToken, 12);

    const updatedUser = await prisma.diligenceUser.update({
      where: { id: user.id },
      data: { resetToken: cryptedToken },
    });

    const url = `${process.env.BASE_URL}/reset-password/${userToken}`;

    //send user email
    const subject = "Reset Password.";
    payload = {
      name: user.firstName,
      url: url,
    };
    const senderEmail = '"Sidebrief" <hey@sidebrief.com>';
    const recipientEmail = user.email;
    EmailSender(
      subject,
      payload,
      recipientEmail,
      senderEmail,
      "../view/welcomeUser.ejs"
    );

    return {
      message: "A reset link has been sent to your email",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

// change password service
const changePassword = async (changePayload) => {
  // take the email, resetToken and password from the controller
  // check that the email is registered to a user account
  // compare the token with the one saved in the database
  // save the new password and update reset token to null

  try {
    const user = await prisma.diligenceUser.findUnique({
      where: { email: changePayload.email },
    });

    if (!user) {
      throw new BadRequest("diligence User not found!.");
    }

    let checkToken = await matchChecker(changePayload.token, user.resetToken);

    if (!checkToken) {
      throw new BadRequest("Invalid token");
    }

    const cryptedPassword = await hasher(changePayload.password, 12);

    const updateUser = await prisma.diligenceUser.update({
      where: { id: user.id },
      data: { resetToken: null, password: cryptedPassword },
    });

    return {
      message: "Password reset successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//create diligence request
const createRequest = async (requestPayload) => {
  try {
    const checkUser = await prisma.diligenceUser.findUnique({
      where: { email: requestPayload.createdBy },
    });

    if (!checkUser) {
      throw new BadRequest("User with this email not registered");
    }

    const request = await prisma.diligenceRequest.create({
      data: requestPayload,
    });

    if (!request) {
      throw new BadRequest("Error occured while creating request");
    }
    logger.info({
      message: `request with the name ${requestPayload.name} created successfully by ${requestPayload.createdBy}`,
    });

    return {
      statusCode: 200,
      message: "Request created successfully!",
      data: request,
    };
  } catch (error) {
    throw error;
  }
};

//get all diligence requests service
const getAllDiligenceRequests = async () => {
  //  get the diligence requests list from the table
  //  return the diligence requests list to the diligence requests controller
  try {
    const diligenceRequests = await prisma.diligenceRequest.findMany({});
    if (!diligenceRequests) {
      throw new BadRequest("Diligence requests not found!.");
    }

    return {
      message: "Diligence requests fetched successfully",
      data: diligenceRequests,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//get a diligence request service
const getDiligenceRequest = async (requestId) => {
  //  get the diligence request  from the table
  //  return the diligence request lis to the diligence requests controller
  try {
    const diligenceRequest = await prisma.diligenceRequest.findUnique({
      where: { id: requestId },
    });
    if (!diligenceRequest) {
      throw new BadRequest("Diligence requests not found!.");
    }
    return {
      message: "Diligence request fetched successfully",
      data: diligenceRequest,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//delete diligence request
const deleteRequest = async (requestId) => {
  try {
    const checkRequest = await prisma.diligenceRequest.findUnique({
      where: { id: requestId },
    });

    if (!checkRequest) {
      throw new BadRequest("Request not found.");
    }

    const request = await prisma.diligenceRequest.delete({
      where: { id: requestId },
    });

    if (!request) {
      throw new BadRequest("Error occured while deleting request");
    }
    logger.info({
      message: `${checkRequest.name} request deleted successfully`,
    });

    return {
      statusCode: 200,
      message: "Request deleted successfully!",
    };
  } catch (error) {
    throw error;
  }
};

//verify request document
const verifyRequest = async (requestId) => {
  //add the new request to the table

  try {
    const request = await prisma.diligenceRequest.findUnique({
      where: { id: requestId },
    });
    if (!request) {
      throw new BadRequest("Request does not exist");
    }

    const updateRequest = await prisma.diligenceRequest.update({
      where: { id: requestId },
      data: { status: "Verified" },
    });

    if (!updateRequest) {
      throw new BadRequest("Error occured while verifying this Request");
    }

    logger.info({
      message: `Request with the name ${request.name}, verified successfully`,
    });

    return {
      message: "Request verified successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//update request document
const updateRequest = async (requestId) => {
  //add the new request to the table

  try {
    const request = await prisma.diligenceRequest.findUnique({
      where: { id: requestId },
    });
    if (!request) {
      throw new BadRequest("Request does not exist");
    }

    const updateRequest = await prisma.diligenceRequest.update({
      where: { id: requestId },
      data: { status: "In progress" },
    });

    if (!updateRequest) {
      throw new BadRequest("Error occured while updating this Request");
    }

    logger.info({
      message: `Request with the name ${request.name}, updated successfully`,
    });

    return {
      message: "Request updated successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//save request document
const saveRequestDocument = async (requestId, documentPayload) => {
  //add the new document to the table

  try {
    const request = await prisma.diligenceRequest.findUnique({
      where: { id: requestId },
    });
    if (!request) {
      throw new BadRequest(
        "Request with this registration number does not exist"
      );
    }

    const docName = await prisma.diligenceRequestDocument.findUnique({
      where: { name: documentPayload.name },
    });
    if (docName) {
      throw new BadRequest("document already exist");
    }

    const document = await prisma.diligenceRequestDocument.create({
      data: documentPayload,
    });

    if (!document) {
      throw new BadRequest("Error occured while creating document");
    }

    logger.info({
      message: `dcoument with the name ${documentPayload.name} saved successfully`,
    });

    const updateRequest = await prisma.diligenceRequest.update({
      where: { id: requestId },
      data: { status: "Completed" },
    });

    return {
      message: "Document created successfully",
      statusCode: 200,
      data: document,
    };
  } catch (error) {
    throw error;
  }
};

//remove a request document
const removeRequestDocument = async (id) => {
  //take id from the request controller
  //check if the request exists
  //remove the request from the record
  //return response to the request controller

  try {
    const doc = await prisma.diligenceRequestDocument.findUnique({
      where: { id: id },
    });
    if (!doc) {
      throw new BadRequest("Document does not exist");
    }

    const deleteRequestDocument = await prisma.diligenceRequestDocument.delete({
      where: {
        id: id,
      },
    });
    if (!deleteRequestDocument) {
      throw new BadRequest("Document not found");
    }

    return {
      statusCode: 200,
      message: "Document deleted successfully",
    };
  } catch (error) {
    throw error;
  }
};

//get a document
const getDocument = async (documentId) => {
  try {
    const checkDocument = await prisma.diligenceRequestDocument.findUnique({
      where: { id: documentId },
    });
    if (!checkDocument) {
      throw new BadRequest("Document with this id does not exist");
    }

    return {
      statusCode: 200,
      message: "Document fetched successfully",
      data: checkDocument,
    };
  } catch (error) {
    throw error;
  }
};

//get all documents
const getAllDocuments = async (requestId) => {
  try {
    const checkRequest = await prisma.diligenceRequest.findUnique({
      where: { id: requestId },
    });
    if (!checkRequest) {
      throw new BadRequest("Request with this id does not exist");
    }

    const checkDocument = await prisma.diligenceRequestDocument.findMany({
      where: { diligenceRequestId: requestId },
    });
    if (!checkDocument) {
      throw new BadRequest("Documents with this id does not exist");
    }
    return {
      statusCode: 200,
      message: "Documents fetched successfully",
      data: checkDocument,
    };
  } catch (error) {
    throw error;
  }
};

//update a request document
const updateRequestDocument = async (documentId, updatePayload) => {
  //take id from the request controller
  //check if the request exists
  //update the document from the record
  //return response to the request controller

  try {
    const doc = await prisma.diligenceRequestDocument.findUnique({
      where: { id: documentId },
    });

    if (!doc) {
      throw new BadRequest("Document does not exist");
    }

    const updateRequestDocument = await prisma.diligenceRequestDocument.update({
      where: {
        id: documentId,
      },
      data: updatePayload,
    });
    if (!updateRequestDocument) {
      throw new BadRequest("Error occured while updating document");
    }

    return {
      statusCode: 200,
      message: "Document updated successfully",
      data: updateRequestDocument,
    };
  } catch (error) {
    throw error;
  }
};

const getBank = async (id) => {
  try {
    const checkBank = await prisma.diligenceBank.findUnique({
      where: { id: id },
    });
    if (!checkBank) {
      throw new BadRequest("Bank with this id does not exist");
    }

    return {
      statusCode: 200,
      message: "Bank fetched successfully",
      data: checkBank,
    };
  } catch (error) {
    throw error;
  }
};

const getBankByAdminEmail = async (adminEmail) => {
  try {
    const checkBank = await prisma.diligenceBank.findUnique({
      where: { adminEmail: adminEmail },
    });

    if (!checkBank) {
      throw new BadRequest("Bank with this admin email does not exist");
    }

    return {
      statusCode: 200,
      message: "Bank fetched successfully",
      data: checkBank,
    };
  } catch (error) {
    throw error;
  }
};

const getBranch = async (id) => {
  try {
    const checkBranch = await prisma.diligenceBranch.findUnique({
      where: { id: id },
    });
    if (!checkBranch) {
      throw new BadRequest("Branch with this id does not exist");
    }

    return {
      statusCode: 200,
      message: "Branch fetched successfully",
      data: checkBranch,
    };
  } catch (error) {
    throw error;
  }
};

const getStaff = async (id) => {
  try {
    const checkStaff = await prisma.diligenceStaff.findUnique({
      where: { id: id },
    });
    if (!checkStaff) {
      throw new BadRequest("Staff with this id does not exist");
    }

    return {
      statusCode: 200,
      message: "Staff fetched successfully",
      data: checkStaff,
    };
  } catch (error) {
    throw error;
  }
};

//delete diligence staff
const deleteStaff = async (staffId) => {
  try {
    const checkStaff = await prisma.diligenceStaff.findUnique({
      where: { id: staffId },
    });

    if (!checkStaff) {
      throw new BadRequest("Staff not found.");
    }

    const diligence = await prisma.diligenceStaff.delete({
      where: { id: staffId },
    });

    if (!diligence) {
      throw new BadRequest("Error occured while deleting stafaf");
    }
    logger.info({
      message: `staff with this email ${checkStaff.email}, deleted successfully`,
    });

    return {
      statusCode: 200,
      message: "Staff deleted successfully!",
    };
  } catch (error) {
    throw error;
  }
};

//update diligence branch
const udpateBranch = async (branchId, branchPayload) => {
  try {
    const checkBranch = await prisma.diligenceBranch.findUnique({
      where: { id: branchId },
    });

    if (!checkBranch) {
      throw new BadRequest("Branch not found.");
    }

    const diligence = await prisma.diligenceBranch.update({
      where: { id: branchId },
      data: branchPayload,
    });

    if (!diligence) {
      throw new BadRequest("Error occured while updating branch");
    }
    logger.info({
      message: `${branchPayload.name} branch updated successfully`,
    });

    return {
      statusCode: 200,
      message: "Branch updated successfully!",
      data: diligence,
    };
  } catch (error) {
    throw error;
  }
};

//delete diligence branch
const deleteBranch = async (branchId) => {
  try {
    const checkBranch = await prisma.diligenceBranch.findUnique({
      where: { id: branchId },
    });

    if (!checkBranch) {
      throw new BadRequest("Branch not found.");
    }

    const diligence = await prisma.diligenceBranch.delete({
      where: { id: branchId },
    });

    if (!diligence) {
      throw new BadRequest("Error occured while deleting branch");
    }
    logger.info({ message: `${checkBranch.name} branch deleted successfully` });

    return {
      statusCode: 200,
      message: "Branch deleted successfully!",
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getDiligenceRequest,
  deleteBank,
  udpateBank,
  deleteRequest,
  udpateNigerianBank,
  getAllBanks,
  createBank,
  getAllDiligenceBanks,
  createBranch,
  getAllDiligenceBranches,
  createStaff,
  getAllDiligenceStaffs,
  createAccount,
  loginUser,
  forgotPassword,
  changePassword,
  createRequest,
  getAllDiligenceRequests,
  verifyRequest,
  updateRequest,
  saveRequestDocument,
  removeRequestDocument,
  getBank,
  getBranch,
  getStaff,
  deleteStaff,
  udpateBranch,
  deleteBranch,
  getBankByAdminEmail,
  updateRequestDocument,
  getDocument,
  getAllDocuments,
};
