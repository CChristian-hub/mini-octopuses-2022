let data = {
    "questions": [
        {
            "title": "A quoi sert un backend?",
            "code": "",
            "topic": "Express",
            "isFrench": true,
            "answers": [
                {
                    "answer": "Fournir des informations au site web en répondant aux demandes faites par les différents navigateurs", "isCorrect": true
                },
                {
                    "answer": "Fournir des informations au backend", "isCorrect": false
                },
                {
                    "answer": "Recevoir des informations du site web lire les demandes faites par les différents navigateurs", "isCorrect": false
                },
                {
                    "answer": "Fournir des informations au site web en répondant aux demandes faites par le backend", "isCorrect": false
                }
            ]
        },

        {
            "title": "Qu’est ce que l’architecture client/serveur?",
            "code": "",
            "topic": "Express",
            "isFrench": true,
            "answers": [
                {
                    "answer": "Une architecture permettant la communication entre le client (frontend) et le serveur (backend)", "isCorrect": true
                },
                {
                    "answer": "Une architecture permettant la communication entre le client (backend) et le serveur (frontend)", "isCorrect": false
                },
                {
                    "answer": "Une architecture permettant la communication entre les différents navigateurs", "isCorrect": false
                },
                {
                    "answer": "Une architecture permettant la communication entre backend et mongoDB", "isCorrect": false
                }
            ]
        },

        {
            "title": "Quel est l'utilité d’Express?",
            "code": "",
            "topic": "Express",
            "isFrench": true,
            "answers": [
                {
                    "answer": "Express est un framework Node.js qui permet de créer un backend rapidement et facilement", "isCorrect": true
                },
                {
                    "answer": "Express est un framework React.js qui permet de créer un backend rapidement et facilement", "isCorrect": false
                },
                {
                    "answer": "Express est un framework Mongo.js qui permet de créer un backend rapidement et facilement", "isCorrect": false
                },
                {
                    "answer": "Express est un framework Express.js qui permet de créer un backend rapidement et facilement", "isCorrect": false
                }
            ]
        },

        {
            "title": "Sur quel URL peut-on interroger un serveur web fraîchement créé?",
            "code": "",
            "topic": "Express",
            "isFrench": true,
            "answers": [
                {
                    "answer": "http://localhost:3000 ou http://127.0.0.1:3000", "isCorrect": true
                },
                {
                    "answer": "http://localhost:3000 seulement", "isCorrect": false
                },
                {
                    "answer": "http://127.0.0.1:3000 seulement", "isCorrect": false
                },
                {
                    "answer": "http:///localhost:3000 ou http:///127.0.0.1:3000", "isCorrect": false
                }
            ]
        },

        {
            "title": "Quelle balise HTML permet d’envoyer des requêtes au backend?",
            "code": "",
            "topic": "Express",
            "isFrench": true,
            "answers": [
                {
                    "answer": `<a href=" / home">Home</a>`, "isCorrect": true
                },
                {
                    "answer": `<p href=" / home">Home</p>`, "isCorrect": false
                },
                {
                    "answer": `<i href=" / home">Home</i>`, "isCorrect": false
                },
                {
                    "answer": `<e href=" / home">Home</e>`, "isCorrect": false
                }
            ]
        },

        {
            "title": "Que signifie cette erreur : “404 Not Found”?",
            "code": "",
            "topic": "Express",
            "isFrench": true,
            "answers": [
                {
                    "answer": "La route qui correspond à la requête n’existe pas", "isCorrect": true
                },
                {
                    "answer": `La route " / 404" n’existe pas`, "isCorrect": false
                },
                {
                    "answer": `La route dans le frontend n’existe pas`, "isCorrect": false
                },
                {
                    "answer": `La route " / 404" dans le frontend n’existe pas`, "isCorrect": false
                }
            ]
        },

        {
            "title": "Où se trouvent les requêtes qui peuvent être posées par le frontend?",
            "code": "",
            "topic": "Express",
            "isFrench": true,
            "answers": [
                {
                    "answer": "index.js", "isCorrect": true
                },
                {
                    "answer": "app.js", "isCorrect": false
                },
                {
                    "answer": "node.js", "isCorrect": false
                },
                {
                    "answer": "express.js", "isCorrect": false
                }
            ]
        },

        {
            "title": "Dans quel répertoire se trouvent les fichiers EJS?",
            "code": "",
            "topic": "Express",
            "isFrench": true,
            "answers": [
                {
                    "answer": "views", "isCorrect": true
                },
                {
                    "answer": "index", "isCorrect": false
                },
                {
                    "answer": "app", "isCorrect": false
                },
                {
                    "answer": "express", "isCorrect": false
                }
            ]
        },

        {
            "title": "Est ce que la route qui répond à la question /home est écrite correctement?",
            "code": `router.get('/home', function(req, res, next) {
            res.render('index');
    }); `,
            "topic": "Express",
            "isFrench": true,
            "answers": [
                {
                    "answer": "oui", "isCorrect": true
                },
                {
                    "answer": "non", "isCorrect": false
                },
                {
                    "answer": "il manque: ('index', 'home')", "isCorrect": false
                },
                {
                    "answer": "il manque: res.req.render('index')", "isCorrect": false
                }
            ]
        },

        {
            "title": `Quelles sont les informations dynamiques qui vont être envoyées au HTML dans la route suivante?`,
            "code": `router.get('/', function(req, res, next) {res.render('index', { title: 'ma première page' });});`,
            "topic": "Express",
            "isFrench": true,
            "answers": [
                {
                    "answer": "{ title: 'ma première page' }", "isCorrect": true
                },
                {
                    "answer": "{'ma première page'}", "isCorrect": false
                },
                {
                    "answer": "{ title }", "isCorrect": false
                },
                {
                    "answer": "{ index: 'ma première page' }", "isCorrect": false
                }
            ]
        },

        {
            "title": "Quel code permet d’afficher la variable title dans une balise h1 dans un fichier ejs?",
            "code": "",
            "topic": "Express",
            "isFrench": true,
            "answers": [
                {
                    "answer": "<h1><%= title %></h1>", "isCorrect": true
                },
                {
                    "answer": "<h1><% title %></h1>", "isCorrect": false
                },
                {
                    "answer": "<h1><= title></h1>", "isCorrect": false
                },
                {
                    "answer": "<h1>title</h1>", "isCorrect": false
                }
            ]
        },

        {
            "title": "A quoi sert EJS?",
            "code": "",
            "topic": "Express",
            "isFrench": true,
            "answers": [
                {
                    "answer": "EJS permet d’injecter dynamiquement du JavaScript dans un template HTML", "isCorrect": true
                },
                {
                    "answer": "EJS permet d’injecter dynamiquement du HTML dans un template JavaScript", "isCorrect": false
                },
                {
                    "answer": "EJS permet d’enlever dynamiquement du JavaScript dans un template HTML", "isCorrect": false
                },
                {
                    "answer": "EJS permet d’enlever dynamiquement du HTML dans un template JavaScript", "isCorrect": false
                }
            ]
        }
    ]
}

module.exports = data;
