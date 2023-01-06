const sender = require("../config/emailconfig");
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
module.exports = {
  sendBasicEmail,
};
