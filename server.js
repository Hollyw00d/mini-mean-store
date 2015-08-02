// server server.js

var express = require("express");

var path = require("path");

var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));


app.use(express.static(path.join(__dirname + "/client")));

// Set up views & ejs
app.set("views", path.join(__dirname + "/client"));
app.set("view engine", "ejs");

// Require mongoose
require("./server/config/mongoose.js");

// Require "routes.js"
require("./server/config/routes.js")(app);

app.listen(8000, function() {
    console.log("Node.js running on 8000");
});