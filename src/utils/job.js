const cron=require('node-cron');
const emailservice=require('../services/emailservice');
const sender=require('../config/emailconfig')
/*
we will check are their any pending email which are to be sent by now  and is pending
*/
const setupjobs=()=>{
    cron.schedule('*/2 * * * *',async () => {
        const response=await emailservice.fetchPendingEmails() 
        response.forEach((email) => {
            sender.sendMail({
               // from: from,
                to: email.recepientEmail,
                subject: email.subject,
                text:email.content,
              },async(err,data)=>{
                if(err)
                console.log(err);
                else 
                console.log(data);
                await emailservice.updateTickets({status:"SUCCESS"},email.id)
              });   
        });
        console.log(response); 
      });
}
module.exports=
    setupjobs;