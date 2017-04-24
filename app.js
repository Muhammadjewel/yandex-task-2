var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Connect to mongoose
mongoose.connect("mongodb://localhost/yandex-task-2");
var db = mongoose.connection;

app.get("/", function(req, res){
  res.send("Please use /api/lectures, /api/schools or /api/rooms to use APIs");
});

app.get("/api/rooms", function(req, res){

});

app.listen(3000);
console.log("Server is running on port 3000");