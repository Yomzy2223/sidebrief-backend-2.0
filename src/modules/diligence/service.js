const { PrismaClient, Prisma } = require("@prisma/client");
const logger = require("../../config/logger");
const { BadRequest, NotFound } = require("../../utils/requestErrors");
const prisma = new PrismaClient();
const EmailSender = require("../../services/emailEngine");
const { generateToken } = require("../../common/token");
const { matchChecker } = require("../../common/hash");

//DILIGENCE PRODUCT SERVICES

const UserRoles = {
  ADMIN: "Admin",
  MANAGER: "Manager",
  STAFF: "Staff",
};

const RequestStatus = {
  UNVERIFIED: "Unverified",
  VERIFIED: "Verified",
  INPROGRESS: "In progress",
};

//NIGERIAN BANKS
//create diligence enterprise
const createNigerianBank = async (bankPayload) => {
  try {
    const bank = await prisma.nigerianBank.create({
      data: bankPayload,
    });

    if (!bank) {
      throw new BadRequest("Error occured while creating this Nigerian bank");
    }

    return {
      statusCode: 200,
      message: "Ngerian Bank created successfully!",
      data: bank,
    };
  } catch (error) {
    throw error;
  }
};

//get all banks service
const getAllBanks = async () => {
  //  get the bank list from the table
  //  return the bank list to the country controller
  try {
    const banks = await prisma.nigerianBank.findMany({});
    if (!banks) {
      throw new NotFound("Banks not found!.");
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

//get a nigerian bank
const getNigerianBank = async (id) => {
  try {
    const checkBank = await prisma.nigerianBank.findUnique({
      where: { id: id },
    });
    if (!checkBank) {
      throw new BadRequest("Nigerian Bank with this id does not exist");
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

//update nigerian bank
const udpateNigerianBank = async (bankId, bankPayload) => {
  try {
    const checkBank = await prisma.nigerianBank.findUnique({
      where: { id: bankId },
    });

    if (!checkBank) {
      throw new NotFound("Bank not found.");
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

//delete nigerian bank
const deleteNigerianBank = async (bankId) => {
  try {
    const checkBank = await prisma.nigerianBank.findUnique({
      where: { id: bankId },
    });

    if (!checkBank) {
      throw new NotFound("Bank with this ID not found.");
    }

    const bank = await prisma.nigerianBank.delete({
      where: { id: bankId },
    });

    if (!bank) {
      throw new BadRequest("Error occured while deleting bank");
    }

    return {
      statusCode: 200,
      message: "Nigerian Bank deleted successfully!",
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

    const checkManager = await prisma.diligenceManager.findUnique({
      where: { managerEmail: enterprisePayload.adminEmail },
    });

    if (checkManager) {
      throw new BadRequest(" Email already exists as a manager");
    }

    const checkStaff = await prisma.diligenceStaff.findUnique({
      where: { email: enterprisePayload.adminEmail },
    });

    if (checkStaff) {
      throw new BadRequest("Email already exists as a staff");
    }

    const diligence = await prisma.DiligenceEnterprise.create({
      data: enterprisePayload,
    });

    if (!diligence) {
      throw new BadRequest("Error occured while creating enterprise");
    }
    logger.info({ message: `${enterprisePayload.name} created successfully` });

    const regUrl = `${process.env.BASE_URL}/auth/signup`;
    const subject = "Welcome to Sidebrief.";

    payload = {
      name: diligence.name,
      url: regUrl,
      role: "Enterprise",
    };

    const senderEmail = '"Sidebrief" <hey@sidebrief.com>';
    const recipientEmail = diligence.adminEmail;
    //send email
    EmailSender(
      subject,
      payload,
      recipientEmail,
      senderEmail,
      "../view/diligence/diligence.ejs"
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
      throw new NotFound("Enterprise with this id not found.");
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
      throw new NotFound("Enterprise with this ID not found.");
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
      include: {
        diligenceManager: {
          include: {
            diligenceStaff: true,
          },
        },
        diligenceRequest: true,
      },
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

//get an enterprise details
const getEnterpriseDetails = async (id) => {
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
    const diligenceEnterprises = await prisma.diligenceEnterprise.findMany({
      include: {
        diligenceManager: {
          include: {
            diligenceStaff: true,
          },
        },
        diligenceRequest: true,
      },
    });
    if (!diligenceEnterprises) {
      throw new NotFound("Diligence enterprises not found!.");
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
      include: {
        diligenceManager: {
          include: {
            diligenceStaff: true,
          },
        },
        diligenceRequest: true,
      },
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
const createManager = async (adminId, managerPayload) => {
  try {
    const checkEnterpriseAdmin = await prisma.diligenceUser.findUnique({
      where: { id: adminId },
    });

    if (!checkEnterpriseAdmin) {
      throw new NotFound("Enterprise admin with this ID not found.");
    }

    if (checkEnterpriseAdmin.role !== UserRoles.ADMIN) {
      throw new NotFound("Enterprise admin with this ID not found.");
    }

    const checkEnterprise = await prisma.diligenceEnterprise.findUnique({
      where: { adminEmail: checkEnterpriseAdmin.email },
    });

    const values = {
      name: managerPayload.name,
      location: managerPayload.location,
      managerEmail: managerPayload.managerEmail,
      diligenceEnterpriseId: checkEnterprise.id,
    };

    const checkManagerEmail = await prisma.diligenceManager.findUnique({
      where: { managerEmail: managerPayload.managerEmail },
    });

    if (checkManagerEmail) {
      throw new BadRequest("Manager this email already exists");
    }

    const checkAdmin = await prisma.diligenceEnterprise.findUnique({
      where: { adminEmail: managerPayload.managerEmail },
    });

    if (checkAdmin) {
      throw new BadRequest("Email already exists as an admin");
    }

    const checkStaff = await prisma.diligenceStaff.findUnique({
      where: { email: managerPayload.managerEmail },
    });

    if (checkStaff) {
      throw new BadRequest("Email already exists as a staff");
    }

    const manager = await prisma.diligenceManager.create({
      data: values,
    });

    if (!manager) {
      throw new BadRequest("Error occured while adding manager");
    }
    logger.info({
      message: `manager with ${managerPayload.managerEmail} added  successfully`,
    });

    const regUrl = `${process.env.BASE_URL}/auth/signup`;
    const subject = "Welcome to Sidebrief.";

    payload = {
      name: managerPayload.managerEmail,
      url: regUrl,
      role: UserRoles.MANAGER,
    };

    const senderEmail = '"Sidebrief" <hey@sidebrief.com>';
    const recipientEmail = managerPayload.managerEmail;
    //send email
    EmailSender(
      subject,
      payload,
      recipientEmail,
      senderEmail,
      "../view/diligence/diligence.ejs"
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
      throw new NotFound(" managers not found!.");
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
      message: "Manager fetched successfully",
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
      throw new NotFound("Manager with this ID not found.");
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
      throw new NotFound("Manager not found.");
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
const createStaff = async (managerId, email) => {
  try {
    const checkEnterpriseManager = await prisma.diligenceUser.findUnique({
      where: { id: managerId },
    });
    if (!checkEnterpriseManager) {
      throw new NotFound("Manager not found.");
    }

    if (checkEnterpriseManager.role !== UserRoles.MANAGER) {
      throw new BadRequest("The user with this ID is not a manager.");
    }

    const checkManager = await prisma.diligenceManager.findUnique({
      where: { managerEmail: checkEnterpriseManager.email },
    });

    const values = {
      email: email,
      diligenceManagerId: checkManager.id,
    };

    const checkStaff = await prisma.diligenceStaff.findUnique({
      where: { email: email },
    });

    if (checkStaff) {
      throw new BadRequest("Staff with this email already exists");
    }

    const checkBranch = await prisma.diligenceManager.findUnique({
      where: { managerEmail: email },
    });

    if (checkBranch) {
      throw new BadRequest(" Email already exists as a manager");
    }

    const checkAdmin = await prisma.diligenceEnterprise.findUnique({
      where: { adminEmail: email },
    });

    if (checkAdmin) {
      throw new BadRequest("Email already exists as an admin");
    }

    const diligenceStaff = await prisma.diligenceStaff.create({
      data: values,
    });

    if (!diligenceStaff) {
      throw new BadRequest("Error occured while creating staff");
    }
    logger.info({
      message: `diligence staff with ${email} created successfully`,
    });

    const regUrl = `${process.env.BASE_URL}/auth/signup`;
    const subject = "Welcome to Sidebrief.";

    payload = {
      name: email,
      url: regUrl,
      role: UserRoles.STAFF,
    };

    const senderEmail = '"Sidebrief" <hey@sidebrief.com>';
    const recipientEmail = email;
    //send email
    EmailSender(
      subject,
      payload,
      recipientEmail,
      senderEmail,
      "../view/diligence/diligence.ejs"
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
      throw new NotFound("Diligence Staffs not found!.");
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
      throw new NotFound("Staff not found.");
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
const createDiligenceUser = async (
  accountPayload,
  role,
  enterpriseId,
  managerId
) => {
  try {
    const value = {
      ...accountPayload,
      role: `${role}`,
      diligenceEnterpriseId: enterpriseId,
      managerId: managerId,
    };
    const user = await prisma.diligenceUser.create({ data: value });

    if (!user) {
      throw new BadRequest("Error occurred while creating user");
    }

    return user;
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
      include: {
        diligenceManager: true,
      },
    });

    if (!enterprise && !manager && !staff) {
      throw new BadRequest("The email address is not registered");
    }

    if (enterprise) {
      let create = await createDiligenceUser(
        accountPayload,
        UserRoles.ADMIN,
        enterprise.id,
        ""
      );

      const userSecret = process.env.TOKEN_USER_SECRET;
      const token = generateToken({ id: create.id }, userSecret, "14d");

      return {
        statusCode: 200,
        message: `User created successfully!`,
        data: {
          id: create.id,
          firstName: create.firstName,
          lastName: create.lastName,
          email: create.email,
          token: token,
          role: create.role,
          enterpriseId: create.diligenceEnterpriseId,
        },
      };
    }

    if (manager) {
      let create = await createDiligenceUser(
        accountPayload,
        UserRoles.MANAGER,
        manager.diligenceEnterpriseId,
        manager.id
      );

      const userSecret = process.env.TOKEN_USER_SECRET;
      const token = generateToken({ id: create.id }, userSecret, "14d");

      return {
        statusCode: 200,
        message: `User created successfully!`,
        data: {
          id: create.id,
          firstName: create.firstName,
          lastName: create.lastName,
          email: create.email,
          token: token,
          role: create.role,
          enterpriseId: create.diligenceEnterpriseId,
          managerId: manager.id,
        },
      };
    }

    if (staff) {
      let create = await createDiligenceUser(
        accountPayload,
        UserRoles.STAFF,
        staff.diligenceManager.diligenceEnterpriseId,
        staff.diligenceManagerId
      );
      const manager = await prisma.diligenceManager.findUnique({
        where: { id: staff.diligenceManagerId },
      });

      const userSecret = process.env.TOKEN_USER_SECRET;
      const token = generateToken({ id: create.id }, userSecret, "14d");

      return {
        statusCode: 200,
        message: `User created successfully!`,
        data: {
          id: create.id,
          firstName: create.firstName,
          lastName: create.lastName,
          email: create.email,
          token: token,
          role: create.role,
          enterpriseId: create.diligenceEnterpriseId,
          managerId: manager.id,
          managerEmail: manager.managerEmail,
        },
      };
    }

    logger.info({
      message: `Diligence user with ${accountPayload.email} created successfully`,
    });
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
      throw new NotFound("Diligence user not found!.");
    }

    const enterprise = await prisma.diligenceEnterprise.findUnique({
      where: { adminEmail: loginPayload.email },
    });
    const manager = await prisma.diligenceManager.findUnique({
      where: { managerEmail: loginPayload.email },
    });
    const staff = await prisma.diligenceStaff.findUnique({
      where: { email: loginPayload.email },
      include: {
        diligenceManager: true,
      },
    });

    if (!enterprise && !manager && !staff) {
      throw new NotFound("User not found");
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

    if (user.role === UserRoles.ADMIN) {
      return {
        message: "Login successful.",
        data: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          token: token,
          role: user.role,
          enterpriseId: user.diligenceEnterpriseId,
        },
      };
    } else {
      const manager = await prisma.diligenceManager.findUnique({
        where: { id: user.managerId },
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
          enterpriseId: user.diligenceEnterpriseId,
          managerId: manager.id,
          managerEmail: manager.managerEmail,
        },
      };
    }
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
      throw new NotFound("User not found!.");
    }

    const userSecret = process.env.TOKEN_USER_SECRET;
    const userToken = await generateToken({ email: email }, userSecret, "30m");

    const updatedUser = await prisma.diligenceUser.update({
      where: { id: user.id },
      data: { resetToken: userToken },
    });

    const url = `${process.env.BASE_URL}/auth/new-password/${userToken}`;

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
      "../view/resetLink.ejs"
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
    const user = await prisma.diligenceUser.findMany({
      where: { resetToken: changePayload.token },
    });

    if (user.length === 0) {
      throw new BadRequest("Invalid token or user not found");
    }

    const cryptedPassword = await hasher(changePayload.password, 12);

    const updateUser = await prisma.diligenceUser.update({
      where: { id: user[0].id },
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

    const checkEnterprise = await prisma.diligenceEnterprise.findUnique({
      where: { id: requestPayload.diligenceEnterpriseId },
    });

    if (!checkEnterprise) {
      throw new NotFound("Enterprise with this ID not found.");
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

    const subject = "Request created successfully.";

    payload = {
      name: checkUser.firstName,
      businessName: requestPayload.name,
      regNo: requestPayload.registrationNumber,
      status: requestPayload.status,
    };

    const senderEmail = '"Sidebrief" <hey@sidebrief.com>';
    const recipientEmail = requestPayload.createdBy;
    //send email
    EmailSender(
      subject,
      payload,
      recipientEmail,
      senderEmail,
      "../view/diligence/diligenceRequest.ejs"
    );

    //send staff email
    staffPayload = {
      enterpriseName: checkEnterprise.name,
      businessName: requestPayload.name,
      regNo: requestPayload.registrationNumber,
    };

    const staffEmail =
      process.env.NODE_ENV === "production"
        ? "aw@sidebrief.com, sales@sidebrief.com, compliance@sidebrief.com"
        : "dev@sidebrief.com";

    EmailSender(
      subject,
      staffPayload,
      staffEmail,
      senderEmail,
      "../view/diligence/staffRequestCreate.ejs"
    );

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
    const diligenceRequests = await prisma.diligenceRequest.findMany({
      include: {
        diligenceRequestDocument: true,
      },
    });
    if (!diligenceRequests) {
      throw new NotFound("Diligence requests not found!.");
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
      throw new NotFound("Diligence requests not found!.");
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

//update diligence request
const updateDiligenceRequest = async (requestId, requestPayload) => {
  //add the new request to the table

  try {
    const request = await prisma.diligenceRequest.findUnique({
      where: { id: requestId },
    });
    if (!request) {
      throw new BadRequest("Request with this ID does not exist");
    }
    if (request.status === "Completed") {
      throw new BadRequest("Completed request cannot be updated ");
    }
    const updateRequest = await prisma.diligenceRequest.update({
      where: { id: requestId },
      data: requestPayload,
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
      data: updateRequest,
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
      throw new NotFound("Request not found.");
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
      data: { status: RequestStatus.VERIFIED },
    });

    if (!updateRequest) {
      throw new BadRequest("Error occured while verifying this Request");
    }

    logger.info({
      message: `Request with the name ${request.name}, verified successfully`,
    });

    const subject = "Request verified successfully.";

    payload = {
      businessName: updateRequest.name,
      regNo: updateRequest.registrationNumber,
      status: RequestStatus.VERIFIED,
    };

    const senderEmail = '"Sidebrief" <hey@sidebrief.com>';
    const recipientEmail = updateRequest.createdBy;
    //send email
    EmailSender(
      subject,
      payload,
      recipientEmail,
      senderEmail,
      "../view/diligence/verifiedRequest.ejs"
    );

    return {
      message: "Request verified successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//update request status
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
      data: { status: RequestStatus.INPROGRESS },
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

//verify multiple request document
const verifyMultipleRequest = async (requestList) => {
  try {
    const updateRequest = await prisma.diligenceRequest.updateMany({
      where: {
        id: { in: requestList },
      },
      data: { status: RequestStatus.VERIFIED },
    });

    if (!updateRequest) {
      throw new BadRequest("Error occured while verifying these requests");
    }

    return {
      message: ` ${updateRequest.count} request(s) updated successfully.`,
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

    const subject = "Request completed successfully.";

    payload = {
      businessName: updateRequest.name,
      regNo: updateRequest.registrationNumber,
      status: "Completed",
    };

    const senderEmail = '"Sidebrief" <hey@sidebrief.com>';
    const recipientEmail = updateRequest.createdBy;
    //send email
    EmailSender(
      subject,
      payload,
      recipientEmail,
      senderEmail,
      "../view/diligence/completedDiligenceRequest.ejs"
    );

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
      where: { id: id },
    });
    if (!deleteRequestDocument) {
      throw new NotFound("Document not found");
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

const getStaffAndRequest = async (managerId) => {
  try {
    const result = await prisma.$queryRaw`
SELECT
    "DiligenceUser"."firstName" AS firstname,
    "DiligenceUser"."lastName" AS lastname,
    "DiligenceStaff"."email",
    "DiligenceStaff"."createdAt",
    COUNT("DiligenceRequest"."id") AS num_requests
FROM
    "DiligenceStaff"
LEFT JOIN
    "DiligenceUser" ON "DiligenceStaff"."email" = "DiligenceUser"."email"
LEFT JOIN
    "DiligenceRequest" ON "DiligenceStaff"."email" = "DiligenceRequest"."createdBy"
WHERE
    "DiligenceStaff"."diligenceManagerId" = ${managerId}
GROUP BY
    "DiligenceUser"."firstName",
    "DiligenceUser"."lastName",
    "DiligenceStaff"."email",
    "DiligenceStaff"."createdAt";`;

    if (!result) {
      throw new BadRequest(
        "Error occured while fetching all requests by staffs"
      );
    }

    const modifiedResult = result.map((item) => ({
      firstname: item.firstname,
      lastname: item.lastname,
      email: item.email,
      createdAt: item.createdAt,
      num_requests: Number(item.num_requests),
    }));

    return {
      statusCode: 200,
      message: "Data fetched successfully",
      data: modifiedResult,
    };
  } catch (error) {
    console.log("sdfs", error);
    throw error;
  }
};

const getBranchRequest = async (managerId) => {
  try {
    const checkManager = await prisma.diligenceManager.findUnique({
      where: { id: managerId },
    });
    if (!checkManager) {
      throw new BadRequest("Manager with this id does not exist");
    }

    // Retrieve staff emails
    const staffEmails = await prisma.diligenceStaff.findMany({
      where: {
        diligenceManagerId: checkManager.id,
      },
      select: {
        email: true,
      },
    });

    // Extract staff emails from the result
    const staffEmailList = staffEmails.map((staff) => staff.email);
    // Retrieve requests for manager and staff
    const requests = await prisma.diligenceRequest.findMany({
      where: {
        OR: [
          { createdBy: checkManager.managerEmail },
          { createdBy: { in: staffEmailList } },
        ],
      },
    });

    return {
      statusCode: 200,
      message: "Data fetched successfully",
      data: requests,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  //enterprise
  createEnterprise,
  deleteEnterprise,
  udpateEnterprise,
  getAllDiligenceEnterprises,
  getEnterprise,
  getEnterpriseByAdminEmail,
  getEnterpriseDetails,

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
  createNigerianBank,
  getAllBanks,
  getNigerianBank,
  udpateNigerianBank,
  deleteNigerianBank,

  //User
  createAccount,
  loginUser,
  forgotPassword,
  changePassword,

  //Request
  createRequest,
  getAllDiligenceRequests,
  verifyRequest,
  updateDiligenceRequest,
  updateRequest,
  getDiligenceRequest,
  deleteRequest,
  verifyMultipleRequest,

  //Request Document
  saveRequestDocument,
  removeRequestDocument,
  updateRequestDocument,
  getDocument,
  getAllDocuments,

  getStaffAndRequest,
  getBranchRequest,
};
