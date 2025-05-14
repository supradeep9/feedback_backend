const mongoose = require("mongoose");

const feedBackSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

const feedBackModel = mongoose.model("feedBack", feedBackSchema);

module.exports = feedBackModel;
