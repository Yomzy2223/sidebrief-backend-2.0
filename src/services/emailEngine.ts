import nodemailer from "nodemailer";
import path from "path";
import ejs from "ejs";

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  html: string | any;
}
const EmailSender = async (
  subject: string,
  payload: any,
  recipientEmail: string,
  senderEmail: string,
  template: any
) => {
  try {
    //creating transporter
    const transporter = nodemailer.createTransport({
      port: parseInt(process.env.MAIL_PORT as string, 10), // true for 465, false for other ports
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      secure: true,
    });

    const requiredPath = path.join(__dirname, template);

    const data = await ejs.renderFile(requiredPath, payload);

    const mailOptions = (): MailOptions => {
      return {
        from: senderEmail,
        to: recipientEmail,
        subject: subject,
        html: data,
      };
    };

    //send email
    transporter.sendMail(mailOptions(), (error: any, info: any) => {
      if (error) {
        console.log(error);
      } else {
        console.log(info);
      }
    });
  } catch (error) {
    // return error;
    console.log(error);
  }
};

export default EmailSender;
