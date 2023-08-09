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

//update nigerian bank
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

//ENTERPRISE
//create diligence enterprise
const createEnterprise = async (enterprisePayload) => {
  try {
    const checkEnterprise = await prisma.DiligenceEnterprise.findUnique({
      where: { name: enterprisePayload.name },
    });

    if (checkEnterprise) {
      throw new BadRequest("Enterprise with this name already exists");
    }

    const checkEnterpriseEmail = await prisma.DiligenceEnterprise.findUnique({
      where: { adminEmail: enterprisePayload.adminEmail },
    });

    if (checkEnterpriseEmail) {
      throw new BadRequest("Email already exists");
    }

    const diligence = await prisma.DiligenceEnterprise.create({
      data: enterprisePayload,
    });

    if (!diligence) {
      throw new BadRequest("Error occured while creating enterprise");
    }
    logger.info({ message: `${enterprisePayload.name} created successfully` });

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
      message: "Enterprise created successfully!",
      data: diligence,
    };
  } catch (error) {
    throw error;
  }
};

//update diligence enterprise
const udpateEnterprise = async (enterpriseId, enterprisePayload) => {
  try {
    const checkEnterprise = await prisma.DiligenceEnterprise.findUnique({
      where: { id: enterpriseId },
    });

    if (!checkEnterprise) {
      throw new BadRequest("Enterprise with this id not found.");
    }

    const diligence = await prisma.DiligenceEnterprise.update({
      where: { id: enterpriseId },
      data: enterprisePayload,
    });

    if (!diligence) {
      throw new BadRequest("Error occured while updating enterprise");
    }
    logger.info({
      message: `${enterprisePayload.name} enterprise updated successfully`,
    });

    return {
      statusCode: 200,
      message: "Enterprise updated successfully!",
      data: diligence,
    };
  } catch (error) {
    throw error;
  }
};

//delete diligence enterprise
const deleteEnterprise = async (enterpriseId) => {
  try {
    const checkEnterprise = await prisma.diligenceEnterprise.findUnique({
      where: { id: enterpriseId },
    });

    if (!checkEnterprise) {
      throw new BadRequest("Enterprise with this ID not found.");
    }

    const diligence = await prisma.diligenceEnterprise.delete({
      where: { id: enterpriseId },
    });

    if (!diligence) {
      throw new BadRequest("Error occured while deleting enterprise");
    }
    logger.info({
      message: `${checkEnterprise.name} enterprise deleted successfully`,
    });

    return {
      statusCode: 200,
      message: "Enterprise deleted successfully!",
    };
  } catch (error) {
    throw error;
  }
};

//get an enterprise
const getEnterprise = async (id) => {
  try {
    const checkEnterprise = await prisma.diligenceEnterprise.findUnique({
      where: { id: id },
    });
    if (!checkEnterprise) {
      throw new BadRequest("Enterprise with this id does not exist");
    }

    return {
      statusCode: 200,
      message: "Enterprise fetched successfully",
      data: checkEnterprise,
    };
  } catch (error) {
    throw error;
  }
};

//get all diligence enterprises service
const getAllDiligenceEnterprises = async () => {
  //  get the diligence enterprise list from the table
  //  return the diligence enterprise list to the diligence enterprise controller
  try {
    const diligenceEnterprises = await prisma.diligenceEnterprise.findMany({});
    if (!diligenceEnterprises) {
      throw new BadRequest("Diligence enterprises not found!.");
    }

    return {
      message: "Diligence enterprises fetched successfully",
      data: diligenceEnterprises,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//get an enterprise by admin email
const getEnterpriseByAdminEmail = async (adminEmail) => {
  try {
    const checkEnterprise = await prisma.diligenceEnterprise.findUnique({
      where: { adminEmail: adminEmail },
    });

    if (!checkEnterprise) {
      throw new BadRequest("Enterprise with this admin email does not exist");
    }

    return {
      statusCode: 200,
      message: "Enterprise fetched successfully",
      data: checkEnterprise,
    };
  } catch (error) {
    throw error;
  }
};

//MANAGER
//create diligence manager
const createManager = async (enterpriseId, managerPayload) => {
  try {
    const checkEnterprise = await prisma.diligenceEnterprise.findUnique({
      where: { id: enterpriseId },
    });

    if (!checkEnterprise) {
      throw new BadRequest("Enterprise with this ID not found.");
    }

    const checkManagerEmail = await prisma.diligenceManager.findUnique({
      where: { managerEmail: managerPayload.managerEmail },
    });

    if (checkManagerEmail) {
      throw new BadRequest("Manager this email already exists");
    }

    const manager = await prisma.diligenceManager.create({
      data: managerPayload,
    });

    if (!manager) {
      throw new BadRequest("Error occured while adding manager");
    }
    logger.info({
      message: `manager with ${managerPayload.managerEmail} added  successfully`,
    });

    const regUrl = `${process.env.BASE_URL}`;
    const subject = "Welcome to Sidebrief.";

    payload = {
      name: managerPayload.managerEmail,
      url: regUrl,
    };

    const senderEmail = '"Sidebrief" <hey@sidebrief.com>';
    const recipientEmail = managerPayload.managerEmail;
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
      message: "Manager created successfully!",
      data: manager,
    };
  } catch (error) {
    throw error;
  }
};

//get all diligence managers service
const getAllDiligenceManagers = async (enterpriseId) => {
  //  get the diligence managers list from the table
  //  return the diligence managers list to the diligence managers controller
  try {
    const managers = await prisma.diligenceManager.findMany({
      where: { diligenceEnterpriseId: enterpriseId },
    });
    if (!managers) {
      throw new BadRequest(" managers not found!.");
    }

    const enterprise = await prisma.diligenceEnterprise.findUnique({
      where: { id: enterpriseId },
    });

    return {
      message: `${enterprise.name}'s Managers fetched successfully`,
      data: managers,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//get manager by Id
const getManager = async (id) => {
  try {
    const checkManager = await prisma.diligenceManager.findUnique({
      where: { id: id },
    });
    if (!checkManager) {
      throw new BadRequest("Manager with this id does not exist");
    }

    return {
      statusCode: 200,
      message: "Manager fetched successfully",
      data: checkManager,
    };
  } catch (error) {
    throw error;
  }
};

//get an enterprise by admin email
const getManagerByManagerEmail = async (managerEmail) => {
  try {
    const checkManager = await prisma.diligenceManager.findUnique({
      where: { managerEmail: managerEmail },
    });

    if (!checkManager) {
      throw new BadRequest("Manager with this email does not exist");
    }

    return {
      statusCode: 200,
      message: "Enterprise fetched successfully",
      data: checkManager,
    };
  } catch (error) {
    throw error;
  }
};

//update diligence manager
const udpateManager = async (managerId, managerPayload) => {
  try {
    const checkManager = await prisma.diligenceManager.findUnique({
      where: { id: managerId },
    });

    if (!checkManager) {
      throw new BadRequest("Manager with this ID not found.");
    }

    const manager = await prisma.diligenceManager.update({
      where: { id: managerId },
      data: managerPayload,
    });

    if (!manager) {
      throw new BadRequest("Error occured while updating manager");
    }
    logger.info({
      message: `Manager with ${managerPayload.managerEmail} updated successfully`,
    });

    return {
      statusCode: 200,
      message: "Manager updated successfully!",
      data: manager,
    };
  } catch (error) {
    throw error;
  }
};

//delete diligence manager
const deleteManager = async (managerId) => {
  try {
    const checkManager = await prisma.diligenceManager.findUnique({
      where: { id: managerId },
    });

    if (!checkManager) {
      throw new BadRequest("Manager not found.");
    }

    const diligence = await prisma.diligenceManager.delete({
      where: { id: managerId },
    });

    if (!diligence) {
      throw new BadRequest("Error occured while deleting manager");
    }
    logger.info({
      message: `Manager with ${checkManager.managerEmail} deleted successfully`,
    });

    return {
      statusCode: 200,
      message: "Manager deleted successfully!",
    };
  } catch (error) {
    throw error;
  }
};

//STAFF
//create diligence staff
const createStaff = async (managerId, staffPayload) => {
  try {
    const checkManager = await prisma.diligenceManager.findUnique({
      where: { id: managerId },
    });
    if (!checkManager) {
      throw new BadRequest("Manager not found.");
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
const getAllDiligenceStaffs = async (managerId) => {
  //  get the diligence Staffs list from the table
  //  return the diligence Staffs list to the diligence managers controller
  try {
    const diligenceStaffs = await prisma.diligenceStaff.findMany({
      where: { diligenceManagerId: managerId },
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

// DILIGENCE USER
//add diligence user helper
const createDiligenceUser = async (accountPayload, role) => {
  try {
    const value = {
      ...accountPayload,
      role: `${role}`,
    };
    const user = await prisma.diligenceUser.create({ data: value });

    if (!user) {
      throw new BadRequest("Error occurred while creating user");
    }
  } catch (error) {
    throw error;
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

    const enterprise = await prisma.diligenceEnterprise.findUnique({
      where: { adminEmail: accountPayload.email },
    });
    const manager = await prisma.diligenceManager.findUnique({
      where: { managerEmail: accountPayload.email },
    });
    const staff = await prisma.diligenceStaff.findUnique({
      where: { email: accountPayload.email },
    });

    if (!enterprise && !manager && !staff) {
      throw new BadRequest("The email address is not registered");
    }

    if (enterprise) {
      createDiligenceUser(accountPayload, "Admin");
    }

    if (manager) {
      createDiligenceUser(accountPayload, "Manager");
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

// const categoryService = {
//   create: async (categoryPayload) => {
//     try {
//       const checkCategory = await prisma.requestCategory.findUnique({
//         where: { name: categoryPayload.name },
//       });
//       if (checkCategory) {
//         throw BadRequest("Category with this name already exists");
//       }

//       const category = await prisma.requestCategory.create({
//         data: categoryPayload,
//       });
//       if (!category) {
//         throw BadRequest("Error occured while creating category");
//       }

//       return {
//         message: "Category created successfully",
//         statusCode: 200,
//         data: category,
//       };
//     } catch (error) {
//       throw error;
//     }
//   },
//   getAll: async () => {
//     try {
//       const category = await prisma.requestCategory.findMany({});
//       if (!category) {
//         throw BadRequest("Error occured while fetching category list.");
//       }

//       return {
//         message: "Categories fetched successfully",
//         statusCode: 200,
//         data: category,
//       };
//     } catch (error) {
//       throw error;
//     }
//   },
//   get: async (categoryId) => {
//     try {
//       const checkCategory = await prisma.requestCategory.findUnique({
//         where: { id: categoryId },
//       });
//       if (checkCategory) {
//         throw BadRequest("Error occured while creating category");
//       }

//       return {
//         message: "Category fetched successfully",
//         statusCode: 200,
//         data: checkCategory,
//       };
//     } catch (error) {
//       throw error;
//     }
//   },
//   update: async (categoryId, categoryPayload) => {
//     try {
//       const checkCategory = await prisma.requestCategory.findUnique({
//         where: { id: categoryId },
//       });
//       if (!checkCategory) {
//         throw BadRequest("Category with this Id does not exist.");
//       }

//       const category = await prisma.requestCategory.update({
//         where: { id: categoryId },
//         data: categoryPayload,
//       });
//       if (!category) {
//         throw BadRequest("Error occured while updating category");
//       }

//       return {
//         message: "Category updated successfully",
//         statusCode: 200,
//         data: category,
//       };
//     } catch (error) {
//       throw error;
//     }
//   },
//   delete: async (categoryId) => {
//     try {
//       const checkCategory = await prisma.requestCategory.findUnique({
//         where: { id: categoryId },
//       });
//       if (!checkCategory) {
//         throw BadRequest("Category with this Id does not exist.");
//       }

//       const category = await prisma.requestCategory.delete({
//         where: { id: categoryId },
//       });
//       if (!category) {
//         throw BadRequest("Error occured while deleting category");
//       }

//       return {
//         message: "Category deleted successfully",
//         statusCode: 200,
//       };
//     } catch (error) {
//       throw error;
//     }
//   },
// };

module.exports = {
  //enterprise
  createEnterprise,
  deleteEnterprise,
  udpateEnterprise,
  getAllDiligenceEnterprises,
  getEnterprise,
  getEnterpriseByAdminEmail,

  //manager
  createManager,
  getManager,
  getAllDiligenceManagers,
  getManagerByManagerEmail,
  udpateManager,
  deleteManager,

  //STAFF
  createStaff,
  getStaff,
  deleteStaff,
  getAllDiligenceStaffs,

  //Nigerian banks
  getAllBanks,
  getDiligenceRequest,
  deleteRequest,
  udpateNigerianBank,

  //User
  createAccount,
  loginUser,
  forgotPassword,
  changePassword,

  //Request
  createRequest,
  getAllDiligenceRequests,
  verifyRequest,
  updateRequest,

  //Request Document
  saveRequestDocument,
  removeRequestDocument,
  updateRequestDocument,
  getDocument,
  getAllDocuments,
};
