var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akshaygavhane97@yahoo.in',
    pass: 'borntowin'
  }
});

var mailOptions = {
  from: 'akshaygavhane8499@gmail.com',
  to: 'prathameshs13@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});