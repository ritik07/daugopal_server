const pool = require("./database");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const v1Routes = require("./server/v1");

app.use(express.static('file'))

app.use(cors());
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/v1", v1Routes);

app.listen(process.env.PORT || 5050, () => {
  console.log(`Now listening on port ` + 5050);
});
