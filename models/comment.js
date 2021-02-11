const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    topic:{type: String},
    title: {type: String},
    rating: {type: String},
    review: { type: String },
    userId: { type: String },
    topicId: { type: String }
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
