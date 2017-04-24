var mongoose = require("mongoose");

// Room schema
var roomSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  seats: {
    type: number,
    required: true
  },
  destination: {
    type: String,
    required: true
  }
});

var Room = module.exports = mongoose.model("Room", roomSchema);

// Get Rooms
