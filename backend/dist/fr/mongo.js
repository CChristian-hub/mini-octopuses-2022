let data = {
    "questions": [
        {
            "title": "Qu’est-ce que MongoDB?",
            "code": "",
            "topic": "MongoDB",
            "isFrench": true,
            "answers": [
                {
                    "answer": "Une base de données noSQL, gratuite et open source", "isCorrect": true
                },
                {
                    "answer": "Une base de données SQL, gratuite et open source", "isCorrect": false
                },
                {
                    "answer": "Une base de données noSQL, payante et open source", "isCorrect": false
                },
                {
                    "answer": "Une librairie, gratuite et open source", "isCorrect": false
                }
            ]
        },
        {
            "title": "Le service Atlas est un service...?",
            "code": "",
            "topic": "MongoDB",
            "isFrench": true,
            "answers": [
                {
                    "answer": "cloud permettant gérer une base de donnée MongoDB", "isCorrect": true
                },
                {
                    "answer": "cloud permettant gérer toutes les bases de données", "isCorrect": false
                },
                {
                    "answer": "local permettant gérer une base de donnes MongoDB", "isCorrect": false
                },
                {
                    "answer": "local permettant gérer toutes les bases de données", "isCorrect": false
                }
            ]
        },
        {
            "title": "Est-ce que on doit à chaque fois spécifier un ID lorsque on ajoute un objet a la base de données ?",
            "code": "",
            "topic": "MongoDB",
            "isFrench": true,
            "answers": [
                {
                    "answer": "Non, jamais", "isCorrect": true
                },
                {
                    "answer": "Oui, à chaque fois", "isCorrect": false
                },
                {
                    "answer": "S’il s’agit d’une clef primaire", "isCorrect": false
                },
                {
                    "answer": "S’il s’agit d’une clef secondaire", "isCorrect": false
                }
            ]
        },
        {
            "title": "Qu'est ce que Mongoose?",
            "code": "",
            "topic": "MongoDB",
            "isFrench": true,
            "answers": [
                {
                    "answer": "Un mappeur de documents objets (ODM)", "isCorrect": true
                },
                {
                    "answer": "Un module de documents objets (ODM)", "isCorrect": false
                },
                {
                    "answer": "Une map de documents objets (ODM)", "isCorrect": false
                },
                {
                    "answer": "Un mappeur de base de données (ODM)", "isCorrect": false
                }
            ]
        },
        {
            "title": "Quel est le rôle principal de Mongoose?",
            "code": "",
            "topic": "MongoDB",
            "isFrench": true,
            "answers": [
                {
                    "answer": "De faire la liaison entre le backend et la base de données", "isCorrect": true
                },
                {
                    "answer": "De faire la liaison entre le frontend et la base de données", "isCorrect": false
                },
                {
                    "answer": "De faire la liaison entre le backend et le frontend", "isCorrect": false
                },
                {
                    "answer": "De faire la liaison entre le frontend et l'API", "isCorrect": false
                }
            ]
        },
        {
            "title": "Mongoose est un module à installer...",
            "code": "",
            "topic": "MongoDB",
            "isFrench": true,
            "answers": [
                {
                    "answer": "Dans le backend", "isCorrect": true
                },
                {
                    "answer": "Dans le frontend", "isCorrect": false
                },
                {
                    "answer": "Dans le backend et le frontend", "isCorrect": false
                },
                {
                    "answer": "Il ne faut pas installer ce module", "isCorrect": false
                }
            ]
        },
        {
            "title": "Quelle est la bonne syntaxe?",
            "code": "",
            "topic": "MongoDB",
            "isFrench": true,
            "answers": [
                {
                    "answer": "npm install mongoose --save", "isCorrect": true
                },
                {
                    "answer": "npm install mongo --save", "isCorrect": false
                },
                {
                    "answer": "npm install mongodb --save", "isCorrect": false
                },
                {
                    "answer": "npm i mongodb --save", "isCorrect": false
                }
            ]
        },

        {
            "title": "Quelle est la bonne syntaxe pour installation de Mongoose?",
            "code": "",
            "topic": "MongoDB",
            "isFrench": true,
            "answers": [
                {
                    "answer": "npm install mongoose --save", "isCorrect": true
                },
                {
                    "answer": "npm install mongoosedb --save", "isCorrect": false
                },
                {
                    "answer": "npm install mongo --save", "isCorrect": false
                },
                {
                    "answer": "npm install mongodb --save", "isCorrect": false
                }
            ]
        },

        {
            "title": "Est ce que un cluster peut contenir plusieurs bases de données?",
            "code": "",
            "topic": "MongoDB",
            "isFrench": true,
            "answers": [
                {
                    "answer": "oui, toujours", "isCorrect": true
                },
                {
                    "answer": "non, jamais", "isCorrect": false
                },
                {
                    "answer": "oui, si on le spécifie", "isCorrect": false
                },
                {
                    "answer": "il n'y a qu'une seule base de données", "isCorrect": false
                }
            ]
        },
        {
            "title": "Est ce que cet schéma est correcte?",
            "code": `var userSchema = mongoose.Schema({
               lastname: String,
               firstname: String,
               email: String
            });
            var UserModel = mongoose.model('users', userSchema);`,
            "topic": "MongoDB",
            "isFrench": true,
            "answers": [
                {
                    "answer": "oui", "isCorrect": true
                },
                {
                    "answer": "non", "isCorrect": false
                },
                {
                    "answer": "il manque: ('users', userSchema, UserModel)", "isCorrect": false
                },
                {
                    "answer": "il manque: username: String", "isCorrect": false
                }
            ]
        },

        {
            "title": "Quelles sont les quatre principales opérations pour manipuler les informations d’une base de données?",
            "code": "",
            "topic": "MongoDB",
            "isFrench": true,
            "answers": [
                {
                    "answer": "Create, Read, Update, Delete", "isCorrect": true
                },
                {
                    "answer": "Create, Redirect, Update, Delete", "isCorrect": false
                },
                {
                    "answer": "Create, Read, Upload, Delete", "isCorrect": false
                },
                {
                    "answer": "Create, Read, Update, Delegate", "isCorrect": false
                }
            ]
        },

        {
            "title": "Grâce à quelle méthode l'utilisateur sera bien enregistré en base de données?",
            "code": "",
            "topic": "MongoDB",
            "isFrench": true,
            "answers": [
                {
                    "answer": ".save();", "isCorrect": true
                },
                {
                    "answer": ".create();", "isCorrect": false
                },
                {
                    "answer": ".read();", "isCorrect": false
                },
                {
                    "answer": ".newUser();", "isCorrect": false
                }
            ]
        },

        {
            "title": "Quelle méthode on utilise pour accéder à tous les documents d’une collection?",
            "code": "",
            "topic": "MongoDB",
            "isFrench": true,
            "answers": [
                {
                    "answer": ".find();", "isCorrect": true
                },
                {
                    "answer": ".fetch();", "isCorrect": false
                },
                {
                    "answer": ".findOne();", "isCorrect": false
                },
                {
                    "answer": ".findAll();", "isCorrect": false
                }
            ]
        },

        {
            "title": "Pour extraire qu’un seul document d’une collection, on utilise...",
            "code": "",
            "topic": "MongoDB",
            "isFrench": true,
            "answers": [
                {
                    "answer": `.findOne({lastname: "doe"})`, "isCorrect": true
                },
                {
                    "answer": `.fetchOne({lastname: "doe"})`, "isCorrect": false
                },
                {
                    "answer": `.findOne(lastname: "doe")`, "isCorrect": false
                },
                {
                    "answer": `.fetchOne(lastname: "doe")`, "isCorrect": false
                }
            ]
        },

        {
            "title": "La méthode findById permet de rechercher un document par son id. Quelle syntaxe est correcte?",
            "code": "",
            "topic": "MongoDB",
            "isFrench": true,
            "answers": [
                {
                    "answer": `var user = await UserModel.findById( "60194be51426a2f1b75b5134" )`, "isCorrect": true
                },
                {
                    "answer": `var user = await UserModel.findById( {"60194be51426a2f1b75b5134"} )`, "isCorrect": false
                },
                {
                    "answer": `var user = await UserModel.findById()`, "isCorrect": false
                },
                {
                    "answer": `var user = await UserModel.findId( "60194be51426a2f1b75b5134" )`, "isCorrect": false
                }
            ]
        },

        {
            "title": "Pour modifier un seul document, on utilise la méthode...",
            "code": "",
            "topic": "MongoDB",
            "isFrench": true,
            "answers": [
                {
                    "answer": ".updateOne()", "isCorrect": true
                },
                {
                    "answer": ".updateOneOnly()", "isCorrect": false
                },
                {
                    "answer": ".update()", "isCorrect": false
                },
                {
                    "answer": ".updateDoc()", "isCorrect": false
                }
            ]
        },

        {
            "title": "Pour modifier l’ensemble des documents trouvés, on utilise la méthode...",
            "code": "",
            "topic": "MongoDB",
            "isFrench": true,
            "answers": [
                {
                    "answer": ".updateMany()", "isCorrect": true
                },
                {
                    "answer": ".updateAll()", "isCorrect": false
                },
                {
                    "answer": ".update()", "isCorrect": false
                },
                {
                    "answer": ".updateManyDoc()", "isCorrect": false
                }
            ]
        },

        {
            "title": "Pour supprimer un document, on utilise la méthode...",
            "code": "",
            "topic": "MongoDB",
            "isFrench": true,
            "answers": [
                {
                    "answer": ".deleteOne()", "isCorrect": true
                },
                {
                    "answer": ".deleteAll()", "isCorrect": false
                },
                {
                    "answer": ".delete()", "isCorrect": false
                },
                {
                    "answer": ".deleteFound()", "isCorrect": false
                }
            ]
        },

        {
            "title": "Pour supprimer l’ensemble des documents qui correspondent au filtre fourni, on utilise la méthode...",
            "code": "",
            "topic": "MongoDB",
            "isFrench": true,
            "answers": [
                {
                    "answer": `.deleteMany({lastname: "doe"})`, "isCorrect": true
                },
                {
                    "answer": `.deleteAll(lastname: "doe")`, "isCorrect": false
                },
                {
                    "answer": `.delete({lastname: "doe"})`, "isCorrect": false
                },
                {
                    "answer": `.deleteMany(lastname: "doe")`, "isCorrect": false
                }
            ]
        }
    ]
}
module.exports = data;
