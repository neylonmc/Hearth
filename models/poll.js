const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pollSchema = new Schema({
    Question: {type: String},
    Answers:  [String],
    totalResponses: [Number],
    Active: {type: Boolean},
    winner: {type: String},
    userId: {type: String},
    activityId: {type: String}
});

const Poll = mongoose.model("poll", pollSchema);

module.exports = Poll;
