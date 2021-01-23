const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: {type: String},
    userId: {type: Number},
    activityId: {type: Number}
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
