let data = {
    "questions": [
        {
            "title": "Where can you not use regular expressions ?",
            "code": "",
            "isFrench": false,
            "topic": "Regex",
            "answers": [
                {
                    "answer": "To parse HTML", "isCorrect": true
                },
                {
                    "answer": "To parse strings", "isCorrect": false
                },
                {
                    "answer": "To parse numbers", "isCorrect": false
                },
                {
                    "answer": "To parse CSS", "isCorrect": false
                }
            ]
        },
        {
            "title": "I want to search a word case in an insensitive way",
            "code": "",
            "isFrench": false,
            "topic": "Regex",
            "answers": [
                {
                    "answer": "/help/g", "isCorrect": false
                },
                {
                    "answer": "help/gi", "isCorrect": true
                },
                {
                    "answer": "/help./gi", "isCorrect": false
                },
                {
                    "answer": "/[help]/g", "isCorrect": false
                }
            ]
        },
        {
            "title": "What does [a-g] filter ?",
            "code": "",
            "isFrench": false,
            "topic": "Regex",
            "answers": [
                {
                    "answer": "All characters between 'a' and 'g' case sensitive", "isCorrect": true
                },
                {
                    "answer": "All 'a's and 'g's case sensitive", "isCorrect": false
                },
                {
                    "answer": "All characters between between 'a' and 'g' case insensitive", "isCorrect": false
                },
                {
                    "answer": "All 'a's and 'g's case insensitive", "isCorrect": false
                }
            ]
        },
        {
            "title": "What does (?:ated) filter ?",
            "code": "",
            "isFrench": false,
            "topic": "Regex",
            "answers": [
                {
                    "answer": "It searches for all the words that ends with 'ated'", "isCorrect": false
                },
                {
                    "answer": "It searches for all the sentences that ends with 'ated'", "isCorrect": false
                },
                {
                    "answer": "Groups multiple tokens together without creating a capture group", "isCorrect": true
                },
                {
                    "answer": "It doesn't do anything", "isCorrect": false
                }
            ]
        },
        {
            "title": "What does [^crea] filter ?",
            "code": "",
            "isFrench": false,
            "topic": "Regex",
            "answers": [
                {
                    "answer": "Every word that starts with the word 'crea'", "isCorrect": false
                },
                {
                    "answer": "Every word that ends with word 'crea'", "isCorrect": false
                },
                {
                    "answer": "Every word with the letters 'crea'", "isCorrect": false
                },
                {
                    "answer": "Everyword without the letters 'crea'", "isCorrect": true
                }
            ]
        },
        {
            "title": "What does e{1,2} filter ?",
            "code": "",
            "isFrench": false,
            "topic": "Regex",
            "answers": [
                {
                    "answer": "Marches numbers between 1 ans 2", "isCorrect": false
                },
                {
                    "answer": "Matches 1s and 2s that preceeds the token", "isCorrect": false
                },
                {
                    "answer": "Matches 1s and 2s that follows the token", "isCorrect": false
                },
                {
                    "answer": "Matches between 1 and 2 of the preceding token", "isCorrect": true
                }
            ]
        },
        {
            "title": "Difference between /[a-z]|[A-Z]/g and /[a-z]/gi ?",
            "code": "",
            "isFrench": false,
            "topic": "Regex",
            "answers": [
                {
                    "answer": "There is no difference", "isCorrect": true
                },
                {
                    "answer": "The second does nothing", "isCorrect": false
                },
                {
                    "answer": "The first is more precise", "isCorrect": false
                },
                {
                    "answer": "The first is less precise", "isCorrect": false
                }
            ]
        },
        {
            "title": "What does [az-09] filter ?",
            "code": "",
            "isFrench": false,
            "topic": "Regex",
            "answers": [
                {
                    "answer": "It gets every alpha-numerical characters", "isCorrect": false
                },
                {
                    "answer": "Nothing this doesn't work", "isCorrect": true
                },
                {
                    "answer": "It gets special characters", "isCorrect": false
                },
                {
                    "answer": "It does only get lower case letters and numbers", "isCorrect": false
                }
            ]
        },
        {
            "title": "What does () do in Regex ?",
            "code": "",
            "isFrench": false,
            "topic": "Regex",
            "answers": [
                {
                    "answer": "It captures specificaly the group indicated", "isCorrect": true
                },
                {
                    "answer": "It does nothing", "isCorrect": false
                },
                {
                    "answer": "It gets all special characters", "isCorrect": false
                },
                {
                    "answer": "It gets the whole word with the indicated group", "isCorrect": false
                }
            ]
        },
        {
            "title": "What does ^word do in Regex?",
            "code": "",
            "isFrench": false,
            "topic": "Regex",
            "answers": [
                {
                    "answer": "It searches for the word at the start of the string", "isCorrect": true
                },
                {
                    "answer": "It searches for the word at the end of the string", "isCorrect": false
                },
                {
                    "answer": "It searches the word with a capitalized first letter", "isCorrect": false
                },
                {
                    "answer": "It searched the word disregarding it's case", "isCorrect": false
                }
            ]
        }
    ]
}
module.exports = data;