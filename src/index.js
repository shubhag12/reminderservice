const express=require("express");
const bodyParser=require("body-parser");
const {PORT}=require("./config/serverconfig")
const {sendBasicEmail}=require('./services/emailservice');
const setupandstartservice=async()=>{
    const app=express();
    app.use(bodyParser.json);
    app.use(bodyParser.urlencoded({extended:true}));
   // const PORT=3000;
    app.listen(PORT,()=>{
        console.log(`server starting at ${PORT}`);
       // console.log(process.env);
       sendBasicEmail(
        'support@admin.com',
        'shubhcod1@gmail.com',
        'this is a tester mail',
        'this we will be able to lead the team',
       )
    })
}
setupandstartservice();