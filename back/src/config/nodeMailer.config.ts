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
        },
        from: "Motors Shop - Grupo 23"
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
          name: "Motors Shop - Grupo 23",
        //   link: `${protocol}://${host}`,
          link: `http://localhost:5173/`,
        },
    });
    
    const email = {
        body: {
            name: userName,
            greeting: "Olá",
            intro: "Não está conseguindo lembrar da sua senha? não se preocupe.",
            action: {
                instructions: "Clique no botão abaixo para redefinir sua senha:",
                button: {
                    color: "#DC4D2F",
                    text: "Clique Aqui",
                    link: `http://localhost:5173/resetPassword/${resetToken}`,
                }
            },
            outro: "Se você não solicitou uma redefinição de senha, pode ignorar esse email",
            signature: "Atenciosamente"
        },
    };

    const emailBody = mailGenerator.generate(email);

    const emailTemplate = {
        to: userEmail,
        subject: "Recuperação de senha",
        text: emailBody,
        html: emailBody,
    };

    return emailTemplate;
    
}

export {sendEmail, resetPasswordTemplate}

