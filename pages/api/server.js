const nodemailer = require('nodemailer');

export default async (req, res) => {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const output = `<h3>Information</h3>
  <ul>
    <li>Name: ${data.name}</li>
    <li>Email: ${data.email}</li>
  </ul>
  <h3>Message</h3>
  <p>${data.message}</p>`;

  let mailOptions = {
    from: '"the-DevLab" <contact@the-devlab.co.uk>',
    to: 'contact@the-devlab.co.uk',
    subject: `Message from ${data.name}`,
    html: output
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send(response);
    }
  });
};
