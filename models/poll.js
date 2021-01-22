const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pollSchema = new Schema({
    Question: {type: String},
    Answers:  [String],
    totalResponses: [Number],
    Active: {type: Boolean},
    winner: {type: String},
    userId: {type: Number},
    activityId: {type: Number}
});

const Poll = mongoose.model("poll", pollSchema);

module.exports = Poll;
