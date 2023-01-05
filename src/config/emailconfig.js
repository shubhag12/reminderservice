const nodeMailer=require('nodemailer');
const {Email_Id,Email_Password}=require('./serverconfig')
console.log(Email_Id);
console.log(Email_Password);
const sender=nodeMailer.createTransport({
    service:'Gmail',
    auth:{
        user:Email_Id,
        pass:Email_Password
    }
})
module.exports=sender;