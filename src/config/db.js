const mongoose = require("mongoose");
const { dbURL } = require("../secret/secret");

const dbConnection = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("db is connected successfully");
    mongoose.connection.on("error", () => {
      console.error("db connection error ", error);
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = dbConnection;
