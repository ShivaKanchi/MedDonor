const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    CollageName : { type : String },
    CollageAddress : { type : String },
    PersonName : { type : String },
    EventDate : { type : String },
    Certificate : { type : String },
});

const event = mongoose.model("event", eventSchema);

module.exports = { event };