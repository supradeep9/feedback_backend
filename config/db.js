const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("DB connected successfully");
  } catch (err) {
    console.log("DB connection failed", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
