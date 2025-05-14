const express = require("express");
const cors = require("cors");

const app = express();
const feedBackModel = require("./models/feedBackModel.js");

const {
  getFeedBack,
  setFeedBack,
} = require("./controllers/feedBackController.js");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/feedback", getFeedBack);

app.post("/feedback", setFeedBack);

module.exports = app;
