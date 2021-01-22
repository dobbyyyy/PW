const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Risdfaa',
    pass: 'bdafdsd' // naturally, replace both with your real credentials or an application-specific password
  }
});

const mailOptions = {
  from: 'randomeemail8@gmail.com',
  to: 'fsdfa@mail.com',
  subject: 'Invoices due',
  text: 'Dudes, we really need your money.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});