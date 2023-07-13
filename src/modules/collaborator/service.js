const { PrismaClient } = require("@prisma/client");
const logger = require("../../config/logger");
const { hasher, matchChecker } = require("../../common/hash");
const { generateToken, verifyUserToken } = require("../../common/token");
const EmailSender = require("../../services/emailEngine");
const prisma = new PrismaClient();
const { BadRequest } = require("../../utils/requestErrors");

//IN PROGRESS

//create collaborator service
const saveCollaborator = async (collaboratorPayload) => {
  try {
    const checkCollaborator = await prisma.collaborator.findUnique({
      where: { email: collaboratorPayload.email },
    });

    if (checkCollaborator) {
      throw new BadRequest("collaborator with this name already exists");
    }

    const collaborator = await prisma.collaborator.create({
      data: collaboratorPayload,
    });

    if (!collaborator) {
      throw new BadRequest("Error occured while creating collaborator");
    }

    const collaboratorSecret = process.env.TOKEN_COLLABORATOR_SECRET;
    const emailVerificationToken = generateToken(
      { id: collaborator.id },
      collaboratorSecret,
      "30m"
    );

    const url = `${process.env.BASE_URL}/collaborator/activate/${emailVerificationToken}`;
    //send collaborator email
    const subject = "Welcome to Sidebrief.";
    payload = {
      name: collaboratorPayload.firstName,
      url: url,
    };
    const senderEmail = '"Sidebrief" <hey@sidebrief.com>';
    const recipientEmail = collaboratorPayload.email;
    EmailSender(
      subject,
      payload,
      recipientEmail,
      senderEmail,
      "../view/welcomeStaff.ejs"
    );

    logger.info({
      message: `${collaboratorPayload.firstName} ${collaboratorPayload.lastName} created an account successfully with ${collaboratorPayload.email}.`,
    });

    return {
      message: "collaborator created successfully",
      data: {
        id: collaborator.id,
        firstName: collaborator.firstName,
        lastName: collaborator.lastName,
        email: collaborator.email,
        phone: collaborator.phone,
        picture: collaborator.picture,
        verified: collaborator.verified,
        verified: collaborator.isPartner,
      },
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//get a collaborator service
const getCollaborator = async (id) => {
  //   //check if the collaborator exists
  //   //return the collaborator to the collaborator controller

  try {
    const collaborator = await prisma.collaborator.findUnique({
      where: { id: id },
    });
    if (!collaborator) {
      throw new BadRequest("collaborator not found!.");
    }
    return {
      message: "Collaborator fetched successfully",
      data: {
        id: collaborator.id,
        firstName: collaborator.firstName,
        lastName: collaborator.lastName,
        email: collaborator.email,
        phone: collaborator.phone,
        picture: collaborator.picture,
        verified: collaborator.verified,
        isPartner: collaborator.isPartner,
      },
    };
  } catch (error) {
    throw error;
  }
};
//sign in service
const loginCollaborator = async (collaboratorPayload) => {
  // take the login payload  from the controller
  //   //check if the collaborator exists with the email address
  //   //return the collaborator to the collaborator controller

  try {
    const collaborator = await prisma.collaborator.findUnique({
      where: { email: collaboratorPayload.email },
    });

    if (!collaborator) {
      throw new BadRequest("collaborator not found!.");
    }

    let checkPassword = await matchChecker(
      collaboratorPayload.password,
      collaborator.password
    );

    if (!checkPassword) {
      throw new BadRequest("Invalid credentials");
    }

    const collaboraorSecret = process.env.TOKEN_COLLABORATOR_SECRET;
    const token = generateToken(
      { id: collaborator.id },
      collaboraorSecret,
      "14d"
    );
    logger.info({
      message: `collaborator with ${collaboratorPayload.email} signed in successfully.`,
    });

    return {
      message: "Login successfully",
      data: {
        id: collaborator.id,
        firstName: collaborator.firstName,
        lastName: collaborator.lastName,
        email: collaborator.email,
        phone: collaborator.phone,
        picture: collaborator.picture,
        token: token,
        isPartner: collaborator.isPartner,
        verified: collaborator.verified,
      },
    };
  } catch (error) {
    throw error;
  }
};

// verify collaborator account service
const verifyCollaboratorAccount = async (collaboratorPayload) => {
  try {
    const collaboratorSecret = process.env.TOKEN_COLLABORATOR_SECRET;
    const collaborator = await verifyUserToken(
      collaboratorPayload,
      collaboratorSecret
    );

    const checkCollaborator = await prisma.collaborator.findUnique({
      where: { id: collaborator.id },
    });

    if (!checkCollaborator) {
      throw new BadRequest("Collaborator not found.");
    }

    if (checkCollaborator.verified == true) {
      throw new BadRequest("This account is already verified.");
    }

    const updateCollaborator = await prisma.collaborator.update({
      where: { id: checkCollaborator.id },
      data: { verified: true },
    });

    return {
      message: "Your account is now verified.",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

// forgot password service
const forgotPassword = async (resetPayload) => {
  try {
    // take the email from the controller
    // check that the email is registered to a collaborator account
    // generate reset token string
    // save and send the reset token the collaborator

    const collaborator = await prisma.collaborator.findUnique({
      where: { email: resetPayload.email },
    });

    if (!collaborator) {
      throw new BadRequest("Collaborator not found.");
    }

    const collaboratorSecret = process.env.TOKEN_COLLABORATOR_SECRET;
    const collaboratorToken = await generateToken(
      resetPayload,
      collaboratorSecret,
      "30m"
    );

    const cryptedToken = await await hasher(collaboratorToken, 12);

    const updatedCollaborator = await prisma.collaborator.update({
      where: { id: collaborator.id },
      data: { resetToken: cryptedToken },
    });

    const url = `${process.env.BASE_URL}/reset-password/${collaboratorToken}`;

    //send collaborator email
    const subject = "Reset Password.";
    payload = {
      name: collaborator.firstName,
      url: url,
    };
    const senderEmail = '"Sidebrief" <hey@sidebrief.com>';
    const recipientEmail = collaborator.email;
    EmailSender(
      subject,
      payload,
      recipientEmail,
      senderEmail,
      "../view/welcomeStaff.ejs"
    );

    return {
      message: "Email reset code has been sent to your email",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

// change password service
const changePassword = async (changePayload) => {
  // take the email, resetToken and password from the controller
  // check that the email is registered to a collaborator account
  // compare the token with the one saved in the database
  // save the new password and update reset token to null

  try {
    const collaborator = await prisma.collaborator.findUnique({
      where: { email: changePayload.email },
    });

    if (!collaborator) {
      throw new BadRequest("Collaborator not found.");
    }

    let checkToken = await matchChecker(
      changePayload.token,
      collaborator.resetToken
    );

    if (!checkToken) throw new BadRequest("Invalid token");

    const cryptedPassword = await hasher(changePayload.password, 12);

    const updateCollaborator = await prisma.collaborator.update({
      where: { id: collaborator.id },
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

// update profile service
const updateProfile = async (updatePayload, id) => {
  try {
    const collaborator = await prisma.user.findUnique({ where: { id: id } });
    if (!collaborator) {
      throw new BadRequest("Collaborator not found.");
    }

    const updateCollaborator = await prisma.user.update({
      where: { id: collaborator.id },
      data: { phone: updatePayload.phone },
    });

    if (!updateCollaborator) {
      throw new BadRequest("Error occured while updating user");
    }
    return {
      message: "Collaborator profile updated successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

// delete collaborator account
const deleteCollaborator = async (id) => {
  try {
    const collaborator = await prisma.collaborator.findUnique({
      where: { id: id },
    });
    if (!collaborator) {
      throw new BadRequest("Collaborator not found.");
    }
    const deleteCollaborator = await prisma.collaborator.delete({
      where: { id: collaborator.id },
    });

    console.log(deleteCollaborator);
    if (!deleteCollaborator) {
      throw new BadRequest("Error occured while deleting collaborator");
    }
    return {
      message: "Collaborator deleted successfully",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

//save collaborator documents
const saveDocument = async (documentPayload, id) => {
  //   //add the new document to the table

  try {
    const collaborator = await prisma.collaborator.findUnique({
      where: { id: id },
    });
    if (!collaborator) {
      throw new BadRequest("Collaborator not found.");
    }

    const document = await prisma.collaboratorDocument.create({
      data: documentPayload,
    });

    if (!document) {
      throw new BadRequest("Error occured while creating document");
    }

    logger.info({
      message: `${documentPayload.name} created successfully`,
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

//get a collaborator service
const getDocumentByCollaboratorId = async (id) => {
  //   //check if the collaborator exists
  //   //return the collaborator document to the doument controller

  try {
    const collaborator = await prisma.collaborator.findUnique({
      where: { id: id },
    });
    if (!collaborator) {
      throw new BadRequest("Collaborator not found.");
    }
    const documents = await prisma.collaboratorDocument.findMany();

    if (!documents) {
      throw new BadRequest("Documents not found!.");
    }

    return {
      message: "Documents fetched successfully",
      data: documents,
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  saveCollaborator,
  getCollaborator,
  loginCollaborator,
  verifyCollaboratorAccount,
  forgotPassword,
  changePassword,
  updateProfile,
  deleteCollaborator,
  saveDocument,
  getDocumentByCollaboratorId,
};
