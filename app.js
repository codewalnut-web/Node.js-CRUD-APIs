const express = require('express');
var cors = require('cors')
// const logger = require('morgan');
const bodyParser = require('body-parser');
// This will be our application entry. We'll setup our server here.
const http = require('http');
// Set up the express app
const app = express();
app.use(cors())
// Log requests to the console.
// app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Setup a default catch-all route that sends back a welcome message in JSON format.

var models = require("./models")
models.sequelize.sync()
.then(()=>{
    console.log("DB looks fine")
})
.catch((err)=>{
    console.log(err,"somthing went wrong with DB")
})

require('./routes')(app)

const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;
