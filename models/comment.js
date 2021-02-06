const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    title:{type: String},
    userId: {type: String},
    topicId: {type: String},
    rating: {type: String},
    topic: {type: String}
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
