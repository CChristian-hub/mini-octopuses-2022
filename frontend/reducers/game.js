export default function (game = {}, action) {
    if (action.type === "saveGame") {
        return action.game
    }
    if (action.type === 'saveGameAnswers') {
        let gameCopy = { ...game }
        gameCopy.userAnswers = action.answers
        return gameCopy
    }
    if (action.type === 'saveScore') {
        let gameCopy = { ...game }
        gameCopy.score = action.score;
        return gameCopy
    }
    return game
}