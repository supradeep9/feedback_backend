const connectDB = require("./config/db.js");
require("dotenv").config();

const app = require("./app.js");
const port = process.env.PORT || 5000;

connectDB();

app.listen(5000, () => {
  console.log("server has started");
});
