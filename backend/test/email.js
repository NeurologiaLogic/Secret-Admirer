// const  emailjs   = require ('@emailjs/browser');
// const axios = require ('axios')
// const nodemailer = require ('nodemailer');
// init("NxAepYZ0EDuFW8suH");

// var data = {
//    service_id: 'service_s73xkl1',
//    template_id: 'template_32e53hg',
//    user_id: 'NxAepYZ0EDuFW8suH',
//    accessToken:"FGAJvjt63cFqwgrUpNijG",
//    template_params: {
//        'to_email':'patrickkwon777@gmail.com',
//        'reply_to':'patrickkwon777@gmail.com',
//        'to_name': 'Patrick',
//        'message': "this is a link",
//    }
// };

// emailjs.send(data.service_id, data.template_id,data.template_params,data.user_id,data.access_token)
// .then(() =>{
//    console.log('Your mail is sent!');
// }).catch((error) =>{
//    console.log('Oops... ' + JSON.stringify(error));
// });
// axios.post('https://api.emailjs.com/api/v1.0/email/send',data)
// .then(() =>{
//    console.log('Your mail is sent!');
// }).catch((error) =>{
//    console.log('Oops... ' + JSON.stringify(error));
// });

// let testAccount = await nodemailer.createTestAccount();

// let transporter = nodemailer.createTransport({
//    service:"gmail",
//    auth:{
//       user: 'rypernetic@gmail.com',
//       pass: 'rpbs1369!'
//    }
// })
// let mailOption = {
//    from: 'rypernetic@gmail.com',
//    to: 'patrickkwon777@gmail.com',
//    subject: 'Sending Email using Node.js',
//    text: 'That was easy!'
// }
// transporter.send(mailOption)
// .then(e=>console.log(e))
// .catch(e=>console.log(e))


// const smtpTransport = require("nodemailer-smtp-transport");
const nodemailer = require("nodemailer")
// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = await nodemailer.createTransport({
   //  host: "smtp.ethereal.email",
   //  port: 587,
   //  secure: false, // true for 465, false for other ports
   service:'gmail',
   auth: {
     user: 'secreteadmirers@gmail.com',
     pass: 'SecreteAdmirers25'
   }
  });

  // send mail with defined transport object
  transporter.sendMail({
    from: 'rypernetic@gmail.com', // sender address
    to: 'aryantomichelle@gmail.com', // list of receivers
    subject: "Someone is seeking for your precense", // Subject line
    // text: "Hello world?", // plain text body
    html: "<b>come and loook</b>", // html body
  },(err,res)=>{
     if(err) return    console.log(err)
     else
     console.log(res)
  });

//   await console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);