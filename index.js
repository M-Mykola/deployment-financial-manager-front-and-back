require("dotenv").config();

const express = require("express");
const app = express();
const mongooseConnection = require("./Db/mongoDb");
const router = require("./router");
const cors = require("cors");

app.use(
  cors({
    "Access-Control-Allow-Origin": "*",
  })
);

app.use(express.json());
app.use(router);
app.use(cors());

mongooseConnection();

app.listen(process.env.PORT, function () {
  console.log(`Server run in Port : ${process.env.PORT}`);
});
