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

// hashes password before user is created
User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

// checks hashed bersus unhashed password
User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

module.exports = User;
