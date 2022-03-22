let mongoose = require('mongoose');

let topicSchema = mongoose.Schema({
    name: String,
});

let TopicModel = mongoose.model('topic', topicSchema);

module.exports = TopicModel;