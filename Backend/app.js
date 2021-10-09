const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");
const addRoute = require("./routes/addRoute");
const getRoute= require("./routes/getRoute");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/api/v1/add", addRoute);
app.use("/api/v1/get", getRoute);

app.use(express.static('./static'));
app.use('*', (req, res) => 
{
  res.sendFile(__dirname +'/static/index.html');
});



module.exports = app;

