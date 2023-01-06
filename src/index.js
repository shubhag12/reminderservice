const express=require("express");
const bodyParser=require("body-parser");
const {PORT}=require("./config/serverconfig")
//const {sendBasicEmail}=require('./services/emailservice');

const cron = require('node-cron');
const setupandstartservice=async()=>{
    const app=express();
    app.use(bodyParser.json);
    app.use(bodyParser.urlencoded({extended:true}));
   // const PORT=3000;
    app.listen(PORT,()=>{
        console.log(`server starting at ${PORT}`);
       // console.log(process.env);
    //    sendBasicEmail(
    //     '"support"<support@admin.com>',
    //     'shubhcod1@gmail.com',
    //     'this is a tester mail',
    //     'this we will be able to lead the team',
    //    )
    cron.schedule('*/2 * * * *', () => {
        console.log('running a task every two minutes');
      });
    })
}
setupandstartservice();