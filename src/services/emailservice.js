const sender = require("../config/emailconfig");
const TicketRepository = require("../repository/ticketreposistory");

const sendBasicEmail = async (from, to, subject, mailBody) => {
  try {
    const response = await sender.sendMail({
      from: from,
      to: to,
      subject: subject,
      text: mailBody,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const fetchPendingEmails = async (timestamp) => {
  try {
    const repo = new TicketRepository();
    const response = await repo.get({ status: "PENDING" });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createNotification = async (data) => {
  try {
    const repo = new TicketRepository();
    const response = await repo.create(data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const updateTickets = async (data, ticketid) => {
  try {
    const repo = new TicketRepository();
    const response = await repo.update(data, ticketid);
    return response;
  } catch (error) {
    throw error;
  }
};
// const testingQueue = async (data) => {
//   console.log("inside service layer", data);

// };
const subscribeEvents = async (payload) => {
  let service = payload.service;
  let data = payload.data;
  switch (service) {
    case "CREATE_TICKET":
      await createNotification(data);
      break;

    case "SEND_BASIC_EMAIL":
      await sendBasicEmail(data);
      break;
    default:
      console.log("no valid events");
      break;
  }
};
module.exports = {
  updateTickets,
  sendBasicEmail,
  fetchPendingEmails,
  createNotification,
  //testingQueue,
  subscribeEvents
};
