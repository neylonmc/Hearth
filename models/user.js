const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require("bcryptjs");
mongoose.promise = Promise;
//const activity = require("activity.js");

const usersSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, unique: false, required: false },
	password: { type: String, unique: false, required: false },
    image: {type: String},
    Interests: [String],
    totalRatings: { type: Number },
    CurrentlyWatching: [String],
	Following: [{ UserId: Number }],
	Activity: [{ type: mongoose.Schema.Types.ObjectId, ref: "Activity"}],
	Review: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review"}],
	Poll: [{ type: mongoose.Schema.Types.ObjectId, ref: "Poll"}]
});

const User = mongoose.model("User", usersSchema);

module.exports = User;
