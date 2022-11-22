require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
// const routes = require("./routes");
require("./config/database.js");
const path = require('path')

var app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({extended: false,}));
// app.use("/", routes);

app.get('/', function (req, res)
{
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

const port = process.env.PORT || 5000;

var server = app.listen(port, (error) => {
  if (error) {
    console.log("Server Error: ", error.message);
    return;
  }
  var host = server.address().address;
  var port = server.address().port;
  console.log("Server listening at http://%s:%s", host, port);
});

exports.app = app;