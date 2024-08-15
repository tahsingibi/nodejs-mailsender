const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async (to, subject, htmlPath) => {
  const htmlContent = fs.readFileSync(path.join(__dirname, htmlPath), 'utf-8');

  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: to,
    subject: subject,
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`E-posta başarıyla gönderildi: ${info.messageId}`);
  } catch (error) {
    console.error(`E-posta gönderim hatası: ${error}`);
  }
};

const recipientEmail = process.env.TO_EMAIL;
const emailSubject = process.env.SUBJECT;
const htmlFilePath = 'email-template.html';

sendEmail(recipientEmail, emailSubject, htmlFilePath);
