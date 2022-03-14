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
  let transporter = await nodemailer.createTransport({
   service:'gmail',
   auth: {
     user: 'secreteadmirers@gmail.com',
     pass: 'SecreteAdmirers25'
   }
  });
  transporter.sendMail({
    from: 'rypernetic@gmail.com', // sender address
    to: 'kevenwen18@gmail.com', // list of receivers
    subject: "Someone is seeking for your precense", // Subject line
    // text: "Hello world?", // plain text body
    html: "<b>come and loook</b>", // html body
  },(err,res)=>{
     if(err) return console.log(err)
     else
     console.log(res)
  });
}

main().catch(console.error);