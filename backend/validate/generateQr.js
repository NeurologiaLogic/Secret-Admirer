const qrCode = require('qrCode');

// qrCode.toDataURL("hi",{},(req,res)=>{

// })
data = [];
const getQr =async(url)=>{
   // qrCode.toDataURL(url, { errorCorrectionLevel: 'H' })
   // .then(res=>{data = res;})
   // .catch(err=>{err})
   await qrCode.toDataURL(url, { errorCorrectionLevel: 'H' })
   .then(res=>{data = res;})
   .catch(err=>{err})
}
module.exports = {getQr,data};