const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT;  //8080;
const host = process.env.HOST;  //'127.0.0.1';
var cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
  exposedHeaders: ['Location'],
}));

app.listen(8080);

module.exports = app
require('./appl.js')