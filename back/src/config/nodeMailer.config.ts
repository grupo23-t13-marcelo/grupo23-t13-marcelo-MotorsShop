import { createTransport } from "nodemailer"
import { ISendEmailRequest } from "../interfaces/users"
import "dotenv/config"
import { AppError } from "../errors"
import Mailgen from "mailgen";

const sendEmail = async ({to, subject, text, html}: ISendEmailRequest) => {
    const transporter = createTransport({
        host: "smtp.gmail.com",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMPT_PASS
        }
    });

    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject,
        html
    }).then(() => {
        console.log("email enviado com sucesso");
    }).catch((err) => {
        console.log(err);
        throw new AppError("Error sending email", 500);
    });

}

const resetPasswordTemplate = (userEmail: string, userName: string, protocol: string, host: string, resetToken: string) => {
    const mailGenerator = new Mailgen({
        theme: "default",
        product: {
          name: "Recuperação de senha",
          link: `${protocol}://${host}`,
        },
      });
    
      const email = {
        body: {
          name: userName,
          intro: "Recuperação de senha",
          action: {
            instructions: "Clique no botão abaixo para redefinir sua senha:",
            button: {
              color: "#DC4D2F",
              text: "Redefinir sua senha",
              link: `${protocol}://${host}/users/resetPassword/${resetToken}`,
            },
          },
          outro: "Se você não solicitou uma redefinição de senha, pode ignorar esse email",
        },
      };
    
      const emailBody = mailGenerator.generate(email);
    
      const emailTemplate = {
        to: userEmail,
        subject: "Reset password",
        text: emailBody,
        html: emailBody,
      };
    
      return emailTemplate;
    
}

export {sendEmail, resetPasswordTemplate}

