const express = require("express");

const connect = require("./config/db");
const resController = require("./controllers/restaurent.controller");

const app = express();

app.use(express.json());

app.use("/get-restaurants", resController);

app.listen(8080, async () => {
  try {
    await connect();
    console.log("Listening on port 8080");
  } catch (e) {
    console.log(e.message);
  }
});
