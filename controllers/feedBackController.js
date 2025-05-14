const feedbackModel = require("../models/feedBackModel");
const getFeedBack = async (req, res) => {
  try {
    const data = await feedbackModel.find();
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to get feedback data" });
  }
};

const setFeedBack = async (req, res) => {
  try {
    let result = new feedbackModel(req.body);
    let data = await result.save();
    res.status(200).json({ message: "success", data: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to post feedback data" });
  }
};

module.exports = { getFeedBack, setFeedBack };
