const express = require("express");
const cors = require("cors");
const Routes = require("./routes/route");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());
app.use("/auth", Routes);

app.use(express.static("./src/client/build"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.use(async (req, res, next) => {
  return res.status(req.error.code).json({ error: req.error.message });
});

app.listen(PORT, () => {
  console.log("Listening");
});
