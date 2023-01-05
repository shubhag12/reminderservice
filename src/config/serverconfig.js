const dotenv = require("dotenv").config();
dotenv.config;
module.exports = {
  PORT: process.env.PORT,
  Email_Id: process.env.Email_ID,
  Email_Password: process.env.Email_PASS,
};
