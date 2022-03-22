let mongoose = require('mongoose');

let gameSchema = mongoose.Schema({
    score: Number,
    userAnswers: [Number],
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'question' }],
});

let GameModel = mongoose.model('games', gameSchema);

module.exports = GameModel;