const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    topic:{type: String},
    title: {type: String},
    rating: {type: String},
    review: [{ type: Number, required: true }],
    related_titles: [String]
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
