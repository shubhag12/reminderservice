const sender=require('../config/emailconfig');

const sendBasicEmail=(from,to,subject,mailBody)=>{
    sender.sendMail({
        from:from,
        to:to,
        subject:subject,
        text:mailBody
   })
}


module.exports={
    sendBasicEmail
}