const mongoose = require("mongoose");
const { Link } = require("react-router-dom");
const Schema = mongoose.Schema;
//const comment = require("comment.js");
//const poll = require("poll.js");


const activitiesSchema = new Schema({
  title: { type: String, required: true },
  label: {type: String, required: true},
  topic: {type: String, required: true},
  value: {type: String, required: true},
  ageRange:  [String],
  category:  [String],
  tags: [String],
  totalRatings: {type: Number},
  averageRating: {type: Number},
  description: {type: String},
  comments: [],
  polls: [],
  image: {type: String},
  local_ext: { function() {
    const title = this.title.join("-");
    const url = "/topic/" + title
    return(url);
  }}
});

const Activity = mongoose.model("Activity", activitiesSchema);

module.exports = Activity;
