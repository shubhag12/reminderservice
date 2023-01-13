const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverconfig");
//const {sendBasicEmail}=require('./services/emailservice');
const TicketController = require("./controllers/ticket-controller");
const { subscribeMessage, createChannel } = require("./utils/messageQueue");
const { REMINDER_BINDING_KEY } = require("./config/serverconfig");

//const cron = require('node-cron');
const jobs = require("./utils/job");
const setupandstartservice = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  //console.log("shubh")
  const channel = await createChannel();
  subscribeMessage(channel, undefined, REMINDER_BINDING_KEY);

  // const PORT=3000;
  app.post("/api/v1/tickets", TicketController.create);
  app.listen(PORT, () => {
    console.log(`server starting at ${PORT}`);
    // console.log(process.env);
    //    sendBasicEmail(
    //     '"support"<support@admin.com>',
    //     'shubhcod1@gmail.com',
    //     'this is a tester mail',
    //     'this we will be able to lead the team',
    //    )
    // cron.schedule('*/2 * * * *', () => {
    //     console.log('running a task every two minutes');
    //   });
    //jobs();
  });
};
setupandstartservice();
