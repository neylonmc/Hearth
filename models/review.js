const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    topic: {type: String},
    title: {type: String},
    review: {type: String},
	rating: [{ type: Number, required: true }]
});

const Review = mongoose.model("review", reviewSchema);

module.exports = Review;