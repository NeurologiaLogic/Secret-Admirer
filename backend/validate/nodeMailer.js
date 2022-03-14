const nodemailer = require("nodemailer");

exports.nodeMailer = async (req, res) => {
  let transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "secreteadmirers@gmail.com",
      pass: "SecreteAdmirers25",
    },
  });
  transporter.sendMail({
    from: "rypernetic@gmail.com", // sender address
    to: `${req.body.email}`, // list of receivers
    subject: "Someone is seeking for your precense", // Subject line
    // text: "Hello world?", // plain text body
    html: "<b>come and look</b>", // html body
  });
  res.send({success:"Email successfully sent"})
};

// async..await is not allowed in global scope, must use a wrapper
