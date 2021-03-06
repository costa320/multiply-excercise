var express = require("express");
var app = express(); // create our app w/ express
var router = express.Router();
var mongoose = require("mongoose"); // mongoose for mongodb
var morgan = require("morgan"); // log requests to the console (express4)
var bodyParser = require("body-parser"); // pull information from HTML POST (express4)
/* ROUTES */
var Public_Router = require("./routes/PrivateRoutes");
var ApiRoutes = require("./routes/Api"); // connect to mongoDB database on modulus.io

// configuration =================

/* mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');  */ app.use(
  express.static(__dirname + "/dist")
); // set the static files location /public/img will be /img for users
app.use(morgan("dev")); // log every request to the console
app.use(
  bodyParser.urlencoded({
    extended: "true"
  })
); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(
  bodyParser.json({
    type: "application/vnd.api+json"
  })
); // parse application/vnd.api+json as json

/* Routes */
app.use(router);
app.use("/api", ApiRoutes);
app.use(Public_Router);

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
