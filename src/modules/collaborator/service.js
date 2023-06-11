const { PrismaClient } = require("@prisma/client");
const logger = require("../../config/logger");
const { hasher, matchChecker } = require("../../common/hash");
const { generateToken, verifyUserToken } = require("../../common/token");
const EmailSender = require("../../services/emailEngine");
const prisma = new PrismaClient();

//IN PROGRESS

//create collaborator service
const saveCollaborator = async (collaboratorPayload) => {
  try {
    const checkCollaborator = await prisma.collaborator.findUnique({
      where: { email: collaboratorPayload.email.toLowerCase() },
    });

    if (checkCollaborator !== null) {
      return {
        error: "collaborator with this email already exists",
        statusCode: 400,
      };
    }

    const cryptedPassword = await hasher(collaboratorPayload.password, 12);

    const values = {
      firstName: collaboratorPayload.firstName,
      lastName: collaboratorPayload.lastName,
      email: collaboratorPayload.email.toLowerCase(),
      password: cryptedPassword,
      phone: collaboratorPayload.phone,
      verified: false,
      isPartner: collaboratorPayload.isPartner,
    };
    const collaborator = await prisma.collaborator.create({ data: values });

    if (!collaborator) {
      return {
        error: "Error occured while creating collaborator",
        statusCode: 400,
      };
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
    logger.error({
      message: `error occured while creating an account for ${collaboratorPayload.email} with error message: ${error}`,
    });

    console.log(error);
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
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
    if (collaborator === null) {
      return {
        error: "collaborator not found!.",
        statusCode: 400,
      };
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
    logger.error({
      message: `error occured while fetching collaborator with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
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

    if (collaborator === null) {
      return {
        error: "collaborator not found!.",
        statusCode: 400,
      };
    }

    let checkPassword = await matchChecker(
      collaboratorPayload.password,
      collaborator.password
    );

    if (!checkPassword)
      return {
        error: "Invalid credentials",
        statusCode: 400,
      };

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
    logger.error({
      message: `error occured while fetching collaborator with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
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

    if (collaborator.error) {
      return {
        error: collaborator.error,
        statusCode: collaborator.statusCode,
      };
    }

    const checkCollaborator = await prisma.collaborator.findUnique({
      where: { id: collaborator.id },
    });

    if (checkCollaborator === null) {
      return {
        error: "Collaborator not found.",
        statusCode: 400,
      };
    }

    if (checkCollaborator.verified == true) {
      return {
        statusCode: 400,
        error: "This account is already verified.",
      };
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
    logger.error({
      message: `error occured while verifying this collaborator with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
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

    if (collaborator === null) {
      return {
        error: "collaborator not found!.",
        statusCode: 400,
      };
    }

    const collaboratorSecret = process.env.TOKEN_COLLABORATOR_SECRET;
    const collaboratorToken = await generateToken(
      resetPayload,
      collaboratorSecret,
      "30m"
    );

    if (collaboratorToken.error) {
      return {
        error: collaboratorToken.error,
        statusCode: collaboratorToken.statusCode,
      };
    }

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
    logger.error({
      message: `error occured while sending reset link with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
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

    if (collaborator === null) {
      return {
        error: "collaborator not found!.",
        statusCode: 400,
      };
    }

    let checkToken = await matchChecker(
      changePayload.token,
      collaborator.resetToken
    );

    if (!checkToken)
      return {
        error: "Invalid token",
        statusCode: 400,
      };

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
    logger.error({
      message: `error occured while reseting password with error message: ${error}`,
    });

    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

// update profile service
const updateProfile = async (updatePayload, id) => {
  try {
    const collaborator = await prisma.user.findUnique({ where: { id: id } });
    if (collaborator === null) {
      return {
        error: "Collaborator not found",
        statusCode: 400,
      };
    }

    const updateCollaborator = await prisma.user.update({
      where: { id: collaborator.id },
      data: { phone: updatePayload.phone },
    });

    if (!updateCollaborator) {
      return {
        error: "Error occured while updating user",
        statusCode: 400,
      };
    }
    return {
      message: "Collaborator profile updated successfully",
      statusCode: 200,
    };
  } catch (error) {
    logger.error({
      message: `error occured while updating this collaborator profile with error message: ${error}`,
    });

    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

// delete collaborator account
const deleteCollaborator = async (id) => {
  try {
    const collaborator = await prisma.collaborator.findUnique({
      where: { id: id },
    });
    if (collaborator === null) {
      return {
        error: "Collaborator not found",
        statusCode: 400,
      };
    }
    console.log(collaborator);
    const deleteCollaborator = await prisma.collaborator.delete({
      where: { id: collaborator.id },
    });

    console.log(deleteCollaborator);
    if (!deleteCollaborator) {
      return {
        error: "Error occured while deleting collaborator",
        statusCode: 400,
      };
    }
    return {
      message: "Collaborator deleted successfully",
      statusCode: 200,
    };
  } catch (error) {
    logger.error({
      message: `error occured while deleting this collaborator profile with error message: ${error}`,
    });

    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
  }
};

//save collaborator documents
const saveDocument = async (documentPayload, id) => {
  //   //add the new document to the table

  try {
    const values = {
      documentName: documentPayload.documentName,
      documentType: documentPayload.documentType,
      documentDescription: documentPayload.documentDescription,
      collaboratorId: id,
    };

    const collaborator = await prisma.collaborator.findUnique({
      where: { id: id },
    });
    if (collaborator === null) {
      return {
        error: "collaborator not found!.",
        statusCode: 400,
      };
    }

    const document = await prisma.collaboratorDocument.create({ data: values });

    if (!document) {
      return {
        error: "Error occured while creating document",
        statusCode: 400,
      };
    }

    logger.info({
      message: `${documentPayload.documentName} created successfully`,
    });
    return {
      message: "Document created successfully",
      statusCode: 200,
      data: document,
    };
  } catch (error) {
    logger.error({
      message: `error occured while creating a document with error ${error}`,
    });
    console.log(error);
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
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
    if (collaborator === null) {
      return {
        error: "collaborator not found!.",
        statusCode: 400,
      };
    }
    const documents = await prisma.collaboratorDocument.findMany();

    if (documents === null) {
      return {
        error: "Documents not found!.",
        statusCode: 400,
      };
    }

    return {
      message: "Documents fetched successfully",
      data: documents,
      statusCode: 200,
    };
  } catch (error) {
    logger.error({
      message: `error occured while fetching all collaborator documents with error message: ${error}`,
    });
    return {
      error: "Error occurred!.",
      statusCode: 500,
    };
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
