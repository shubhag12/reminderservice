const sender = require("../config/emailconfig");
const TicketRepository=require('../repository/ticketreposistory');
const sendBasicEmail = async (from, to, subject, mailBody) => {
  try {
    const response=await sender.sendMail({
      from: from,
      to: to,
      subject: subject,
      text: mailBody,
    });
    console.log(response);
  } 
  catch (error) {
    console.log(error);
  }
};

const fetchPendingEmails=async(timestamp)=>{
    try {
        const repo=new TicketRepository();
        const response=await repo.getAllTickets();
        return response;
    } catch (error) {
        console.log(error);
        
    }
}

const createNotification=async(data)=>{
    try {
        const repo=new TicketRepository();
        const response=await repo.create(data);
        return response;
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createNotification
};
