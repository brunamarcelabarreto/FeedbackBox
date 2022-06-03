import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3d92f104b4c7e3",
    pass: "009066abcfbd4e"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body}: SendMailData) {
    await transport.sendMail({
        from: 'Equipe Feedget <teste@feedget.com>',
        to: 'Bruna Marcela Barreto <bruna_marcelabarreto@hotmail.com>',
        subject,
        html: body,
      });

  };
}
