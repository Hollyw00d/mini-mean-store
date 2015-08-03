// server server.js

// NPM modules required
var express = require("express");
var path = require("path");
var session = require("express-session");


var morgan = require("morgan");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var app = express();

//app.use(morgan("dev"));


// Needed to read cookies
app.use(cookieParser());

// Needed to read form submissions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));

app.use(express.static(path.join(__dirname + "/client")));

// Set up views & ejs
app.set("views", path.join(__dirname + "/client"));
app.set("view engine", "ejs");

// Value of the "sess.password" session is
// "c0d1ngd0j0bellevue"
app.use(session({
    secret: "3Ub4QuxAcaf5FEPhu4eS",
    resave: false,
    saveUninitialized: true
}));

// Require mongoose
require("./server/config/mongoose.js");

// Require "routes.js"
require("./server/config/routes.js")(app, session);

app.listen(8000, function() {
    console.log("Node.js running on 8000");
});