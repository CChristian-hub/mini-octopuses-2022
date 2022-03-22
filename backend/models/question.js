let mongoose = require('mongoose');

let questionSchema = mongoose.Schema({
    title: String,
    isFrench: Boolean,
    topic: String,
    code: String,
    answers: [{ answer: String, isCorrect: Boolean }]
});

let QuestionModel = mongoose.model('question', questionSchema);

module.exports = QuestionModel;