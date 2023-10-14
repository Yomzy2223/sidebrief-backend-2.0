import jwt from "jsonwebtoken";
import { Unauthorized } from "../utils/requestErrors";

const generateToken = (payload: any, secret: string, expired: string) => {
  return jwt.sign(payload, secret, {
    expiresIn: expired,
  });
};

const verifyUserToken = async (token: string, secret: string) => {
  try {
    const result = jwt.verify(token, secret);
    return result;
  } catch (err) {
    throw new Unauthorized("Authentification error, please check your token.");
  }
};

export { generateToken, verifyUserToken };
