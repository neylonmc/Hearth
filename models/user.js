const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;
//const activity = require("activity.js");

const usersSchema = new Schema({
	_id: { type: Number, unique: true, required: true},
    name: { type: String, required: true },
    username: { type: String, unique: false, required: false },
	password: { type: String, unique: false, required: false },
    image: {type: String},
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

// methods for usersSchema
usersSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
};

// hooks for pre-saving
usersSchema.pre("save", function (next) {
	if (!this.password) {
		console.log("models/user.js =======NO PASSWORD PROVIDED=======")
		next()
	} else {
		console.log("models/user.js hashPassword in pre save");
		
		this.password = this.hashPassword(this.password)
		next()
	}
});

const User = mongoose.model("User", usersSchema);

module.exports = User;
