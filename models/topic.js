const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicSchema = new Schema({
    topic: {type: String},
    type: {type: String},
    Review: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review"}]
});

const Topic = mongoose.model("topic", topicSchema);

module.exports = Topic;