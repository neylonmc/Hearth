const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pollSchema = new Schema({
    topic: {type: String},
    Question: {type: String},
    Answers:  [String],
    totalResponses: [Number],
    Active: {type: Boolean},
    winner: {type: String},
    activityId: {type: String},
    Comment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment"}]
});

const Poll = mongoose.model("poll", pollSchema);

module.exports = Poll;
