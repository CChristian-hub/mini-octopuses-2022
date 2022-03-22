let data = {
    "questions": [
        {
            "title": "Où est ce que l'on ne peut pas utiliser d'expressions régulières ?",
            "code": "",
            "isFrench": false,
            "topic": "Regex",
            "answers": [
                {
                    "answer": "Pour parser du HTML", "isCorrect": true
                },
                {
                    "answer": "Pour filtrer des chaines de caractères", "isCorrect": false
                },
                {
                    "answer": "Pour filtrer des nombres", "isCorrect": false
                },
                {
                    "answer": "Pour filtrer du CSS", "isCorrect": false
                }
            ]
        },
        {
            "title": "Si je veux chercher un mot sans prendre en compte les majuscules ou minuscules",
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
            "title": "Que filtre la Regex [a-g] ?",
            "code": "",
            "isFrench": false,
            "topic": "Regex",
            "answers": [
                {
                    "answer": "Toutes les lettres entre a-g en minuscule", "isCorrect": true
                },
                {
                    "answer": "Tout les 'a' et les 'g' en minuscule", "isCorrect": false
                },
                {
                    "answer": "Toutes les lettres entre a-g peu importe la case", "isCorrect": false
                },
                {
                    "answer": "Tout les 'a' et les 'g' peu importe la case", "isCorrect": false
                }
            ]
        },
        {
            "title": "Que filtrer la Regex (?:ated) ?",
            "code": "",
            "isFrench": false,
            "topic": "Regex",
            "answers": [
                {
                    "answer": "Elle cherche tout les mots finissant par le mot 'ated'", "isCorrect": false
                },
                {
                    "answer": "Elle cherche toutes les phrases finssant par le mot 'ated'", "isCorrect": false
                },
                {
                    "answer": "Elle groupe de multiples tokens ensemble sans créer un groupe de capture", "isCorrect": true
                },
                {
                    "answer": "Elle ne fait rien", "isCorrect": false
                }
            ]
        },
        {
            "title": "Que filtre la Regex [^crea] ?",
            "code": "",
            "isFrench": false,
            "topic": "Regex",
            "answers": [
                {
                    "answer": "Tout les mots commençant par 'crea'", "isCorrect": false
                },
                {
                    "answer": "Tout les mots finissant par 'crea'", "isCorrect": false
                },
                {
                    "answer": "Tout les mots contenant les lettres 'crea'", "isCorrect": false
                },
                {
                    "answer": "Tout les mots ne contenant pas le mot 'crea'", "isCorrect": true
                }
            ]
        },
        {
            "title": "Que filtre la Regex e{1,2} ?",
            "code": "",
            "isFrench": false,
            "topic": "Regex",
            "answers": [
                {
                    "answer": "Tout les chiffres entre 1 et 2", "isCorrect": false
                },
                {
                    "answer": "Tout les '1' et les '2' qui précède le token", "isCorrect": false
                },
                {
                    "answer": "Tout les '1' et les '2' qui suivent le token", "isCorrect": false
                },
                {
                    "answer": "Le token, entre 1 et 2 fois", "isCorrect": true
                }
            ]
        },
        {
            "title": "Difference entre /[a-z]|[A-Z]/g et /[a-z]/gi ?",
            "code": "",
            "isFrench": false,
            "topic": "Regex",
            "answers": [
                {
                    "answer": "Il n'y en a pas", "isCorrect": true
                },
                {
                    "answer": "La seconde Regex ne fait rien", "isCorrect": false
                },
                {
                    "answer": "La première Regex est plus précise", "isCorrect": false
                },
                {
                    "answer": "La première Regex est moins précise", "isCorrect": false
                }
            ]
        },
        {
            "title": "Que filtre la Regex [az-09] ?",
            "code": "",
            "isFrench": false,
            "topic": "Regex",
            "answers": [
                {
                    "answer": "Tout les caractères alpha-numériques", "isCorrect": false
                },
                {
                    "answer": "Rien, cette expression ne fonctionne pas", "isCorrect": true
                },
                {
                    "answer": "Elle relève les caractères spéciaux", "isCorrect": false
                },
                {
                    "answer": "Elle relèves tout les caractères alpha-numériques en minuscule", "isCorrect": false
                }
            ]
        },
        {
            "title": "Que fait l'expression () dans une Regex ?",
            "code": "",
            "isFrench": false,
            "topic": "Regex",
            "answers": [
                {
                    "answer": "Elle capture le groupe indiqué dans l'expression", "isCorrect": true
                },
                {
                    "answer": "Elle ne fait rien", "isCorrect": false
                },
                {
                    "answer": "Elle capture tout les caractères spéciaux", "isCorrect": false
                },
                {
                    "answer": "Elle attrape le mot entier sans le groupe indiqué dans l'expression", "isCorrect": false
                }
            ]
        },
        {
            "title": "Que fait ^mot dans une Regex?",
            "code": "",
            "isFrench": false,
            "topic": "Regex",
            "answers": [
                {
                    "answer": "Elle recherche le mot au début de la chaine de caractères", "isCorrect": true
                },
                {
                    "answer": "Elle recherche le mot en fin de la chaine de caractères", "isCorrect": false
                },
                {
                    "answer": "Elle cherche le mot avec une majuscule sur la première lettre", "isCorrect": false
                },
                {
                    "answer": "Elle recherche le mot sans se soucier des majuscules/minuscules", "isCorrect": false
                }
            ]
        }
    ]
}
module.exports = data;