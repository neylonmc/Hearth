const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const comment = require("/comment.js");
//const activity = require("activity.js");

const usersSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: {type: String},
    Interests: [String],
    Ratings: [
        {
            Id: Number,
            activityId: Number,
            Rating: Number
        }],
    totalRatings: { type: Number },
    CurrentlyWatching: [{    }],

    Following: [{ UserId: Number }]
});

const User = mongoose.model("User", usersSchema);

module.exports = User;
