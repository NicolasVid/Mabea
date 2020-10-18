const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    }
  });

  const mailOptions = (email) => {
   return {
    from: 'mabea.signup@gmail.com',
    to: email,
    subject: 'MABEA - Confirmez votre compte',
    text: 'Cliquez sur ce lien pour confirmer votre compte ...'
  }
};
  
exports.sendValidationMail = (email) => {
  transporter.sendMail(mailOptions(email), (err,data) => {
    if (err)
      console.log('Error Occurs');
    else
      console.log('Email sent !')
  });
};