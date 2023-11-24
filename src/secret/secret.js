require("dotenv").config();
const PORT = process.env.PORT || 4000;
const dbURL = process.env.dbURL;

module.exports = {
  PORT,
  dbURL,
};
