const mongoose = require("mongoose");
const { Link } = require("react-router-dom");
const Schema = mongoose.Schema;
//const comment = require("comment.js");
//const poll = require("poll.js");


const activitiesSchema = new Schema({
  title: { type: String, required: true },
  type: {type: String, required: true},
  ageRange: {type: String, required: true},
  category: { type: String, required: true },
  Tags: [String],
  totalRatings: {type: Number},
  averageRating: {type: Number},
  description: {type: String},
  comments: [],
  Polls: [],
  Image: {type: String}
});

const Activity = mongoose.model("Activity", activitiesSchema);

module.exports = Activity;
