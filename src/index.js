const express = require("express");

const connect = require("./config/db");

const resController = require("./controllers/restaurent.controller");
require("dotenv").config();

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use("/get-restaurants", resController);

app.listen(port, async () => {
  try {
    await connect();
    //await connect2();
    console.log("Listening on port 8080");
  } catch (e) {
    console.log(e.message);
  }
});
