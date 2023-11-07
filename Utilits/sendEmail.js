const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config()

async function sendEmail(name, sender, subject, message) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "info@ppelectrical.org",
      pass: "lnqbjbunmzfyyikh",
    }
  });

  const info = await transporter.sendMail({
    from: process.env.EMAIL_USER, // sender address
    to: "Paul.parnell@ppelectrical.org, steve.brind225@outlook.com",
    subject: subject, // Subject line
    text:`From ${name}\n${sender}\n\n${message}\n`,
  });

}

module.exports = sendEmail