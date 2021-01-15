const express = require('express');
const reqsRouter = require('./routes/requests');
const colaboratorRouter = require('./routes/colaborators');
const partnerRouter = require('./routes/partners');
const accuserRouter = require('./routes/accusers');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const hostname = '127.0.0.1';
const port = 8080;

app.use('/requests', reqsRouter);
app.use('/colaborators', colaboratorRouter);
app.use('/partners', partnerRouter);
app.use('/accusers', accuserRouter);

app.listen(port, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});