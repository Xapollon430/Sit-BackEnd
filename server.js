import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import Routes from "./routes/route";
import connectDB from "./database/db";
import { ReactDOMServer } from "react-dom";
import App from "./static/App";
import React from "react";
require("dotenv").config();
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("/static"));

app.get("/", (req, res, next) => {
  fs.readFile(path.resolve("./static/index.html"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
          React.createElement(App)
        )}</div>`
      )
    );
  });
});
const X = () => <div>123</div>;

console.log(<X />);
// app.use(Routes);

// app.use(async (req, res, next) => {
//   return res.status(req.error.code).json({ error: req.error.message });
// });

app.listen(PORT, () => {
  console.log("Listening");
});
