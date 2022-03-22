let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    token: String,
    profilPicture: String,
    isGuest: Boolean,
    topics: [],
    gameList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'games' }],
    progression: [{ topic: String, numberCorrect: Number }]
});

let UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;