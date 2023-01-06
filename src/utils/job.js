const cron=require('node-cron');
const emailservice=require('../services/emailservice');
/*
we will check are their any pending email which are to be sent by now  and is pending
*/
const setupjobs=()=>{
    cron.schedule('*/2 * * * *',async () => {
        const response=await emailservice.fetchPendingEmails() 
        console.log(response); 
      });
}
module.exports=
    setupjobs;