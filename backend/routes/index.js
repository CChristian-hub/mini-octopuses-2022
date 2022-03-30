var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var uid2 = require("uid2");

const UserModel = require("../models/user");
const GameModel = require("../models/game");
const QuestionModel = require("../models/question");
const TopicModel = require("../models/topic");

let data_react = require("../dist/fr/react");
let data_reactNative = require("../dist/fr/react_native");
let data_html = require("../dist/fr/html")
let data_mongo = require('../dist/fr/mongo')
let data_express = require('../dist/fr/express')
let data_css = require('../dist/fr/css')
let data_javaScript = require('../dist/fr/javaScript')
let data_regex = require('../dist/fr/regex')

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//* User's routes *//
router.post("/sign-up", async function (req, res, next) {
  if (req.body.username.trim().length === 0 || req.body.email.trim().length === 0 || req.body.password.trim().length === 0) {
    return res.json({ result: false, message: "Error in sign-up: please fill all the fields" });
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)) {
    return res.json({ result: false, message: "Error in sign-up: invalid email format" });
  }

  let usernameCheck = await UserModel.findOne({ username: req.body.username });
  let emailCheck = await UserModel.findOne({ email: req.body.email });
  if (usernameCheck) {
    return res.json({ result: false, message: "Error in sign-up: username already taken" });
  }
  if (emailCheck) {
    return res.json({ result: false, message: "Error in sign-up: email already taken" });
  }

  let newUser = new UserModel({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
    email: req.body.email,
    token: uid2(32),
    profilPicture: "temporaire String picture",
    isGuest: req.body.isGuest === "false" ? false : true,
    topics: [],
    gameList: [],
    progression: [],
  });

  let newUserStatus = await newUser.save();
  if (!newUserStatus) {
    return res.json({
      result: false,
      message: "Erreur: La création de votre compte a rencontré un problème",
    });
  } else {
    return res.json({ result: true, user: newUserStatus });
  }
});

router.post("/sign-in", async function (req, res, next) {
  if (req.body.email.trim().length === 0 || req.body.password.trim().length === 0) {
    return res.json({ result: false, message: "Please fill all the fields" });
  }

  let user = await UserModel.findOne({ email: req.body.email });

  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      return res.json({ result: true, token: user.token, user });
    } else {
      return res.json({ result: false, message: "Utilisateur non trouvé" });
    }
  } else {
    return res.json({ result: false, message: "Utilisateur non trouvé" });
  }
});

router.put("/update-user-topics", async function (req, res, nect) {
  let user = await UserModel.findOne({ token: req.body.token });

  if (!user) {
    return res.json({ result: false });
  }
  let topics = req.body.topics.split(",");
  user.topics = topics;

  let status = await user.save();
  if (!status) {
    return res.json({ result: false });
  }
  res.json({ result: true });
});

router.get("/get-user", async function (req, res, next) {
  let user = await UserModel.findOne({ token: req.query.token });
  if (!user) {
    return res.json({ result: false, message: "Error user not found" });
  }
  res.json({ result: true, user });
});

router.put("/update-user/", async function (req, res, next) {
  let user = await UserModel.findOne({ token: req.body.token });
  if (!user) {
    return res.json({ result: false, message: "Error: User not found" });
  }
  await UserModel.updateOne({ token: req.body.token }, { username: req.body.username, email: req.body.email });
  let updatedUser = await UserModel.findOne({ token: req.body.token });
  if (!updatedUser) {
    return res.json({ result: false, message: "Error: Updated user not found" });
  }
  res.json({ result: true, updatedUser, message: "Vos modifications ont bien été enregistrées." });
});

router.delete("/delete-user", async function (req, res, next) {
  let status = await UserModel.deleteOne({ token: req.body.token });
  if (status.deletedCount !== 0) {
    return res.json({ result: true });
  }
  res.json({ result: false });
});

//* Game's routes *//
router.get("/topics", async function (req, res, next) {
  let topicFromBack = await TopicModel.find();
  res.json({ topicFromBack });
});

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

router.post("/generate-game", async function (req, res, next) {
  let topics = req.body.topics.split(",");
  let gameQuestions = [];

  for (const elem of topics) {
    let data = await QuestionModel.find({ topic: elem });

    if (data.length !== 0) {
      shuffleArray(data);
      for (let i = 0; i < 8; i++) {
        gameQuestions.push(data[i]);
      }
    } else {
      return res.json({
        result: false,
        message: "/generate-game error: Questions not found",
      });
    }
  }
  if (gameQuestions.length !== 8) {
    shuffleArray(gameQuestions);
    gameQuestions = gameQuestions.slice(0, 8);
  }

  let newGame = new GameModel({
    score: 0,
    userAnswers: [],
    questions: gameQuestions,
  });
  let saveStatus = await newGame.save();
  if (!saveStatus) {
    return res.json({
      result: false,
      message: "/generate-game error: Game generation failed",
    });
  }
  res.json({ result: true, game: saveStatus });
});

router.put("/save-game", async function (req, res, next) {
  let parsedGame = JSON.parse(req.body.game);
  await GameModel.updateOne({ _id: parsedGame._id }, { score: parsedGame.score, userAnswers: parsedGame.userAnswers });

  let game = await GameModel.findOne({ _id: parsedGame._id });
  if (!game) {
    res.json({ result: false, message: "Error: Game update failed" });
  }
  let user = await UserModel.findOne({ token: req.body.token });
  if (!user) {
    res.json({ result: false, message: "Error: User not found" });
  }
  user.gameList.push(game);
  let status = await user.save();
  if (!status) {
    res.json({ result: false, message: "Error: Game save failed" });
  }
  res.json({ result: true });
});

router.get("/get-user-all-games", async function (req, res, next) {
  let user = await UserModel.findOne({ token: req.query.token })
    .populate("gameList")
    .populate({
      path: "gameList",
      populate: { path: "questions", model: "question" },
    })
    .exec();
  if (!user) {
    req.json({ result: false, message: "Error: User not found" });
  }
  res.json({ result: true, gameList: user.gameList });
});



//* Extra route to populate the database *//
async function pushInDB(data) {
  for (const elem of data.questions) {
    let newQuestion = new QuestionModel({
      title: elem.title,
      isFrench: elem.isFrench,
      topic: elem.topic,
      code: elem.code,
      answers: elem.answers,
    });
    await newQuestion.save();
  }
}

router.post("/populate-database", async function (req, res, next) {
  pushInDB(data_react);
  pushInDB(data_reactNative);
  pushInDB(data_html)
  pushInDB(data_mongo)
  pushInDB(data_express)
  pushInDB(data_css)
  pushInDB(data_javaScript)
  pushInDB(data_regex)
  res.json({ result: true });
});

module.exports = router;
