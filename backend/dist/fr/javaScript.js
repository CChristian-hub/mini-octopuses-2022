let data = {
    "questions": [
        {
            "title": "Quelle est la somme de cette boucle?",
            "code": "let sum = 0;\n\nfor (let i = 0; i <= 3; i++) {\n\tsum += i;\n}",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "3", "isCorrect": false
                },
                {
                    "answer": "0", "isCorrect": false
                },
                {
                    "answer": "undefined", "isCorrect": false
                },
                {
                    "answer": "6", "isCorrect": true
                }
            ]
        },
        {
            "title": "Que s'affichera dans via le console.log() ?",
            "code": "let sum;\n\nconsole.log(sum)",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "null", "isCorrect": false
                },
                {
                    "answer": "undefined", "isCorrect": true
                },
                {
                    "answer": "ce code ne fonctionne pas", "isCorrect": false
                },
                {
                    "answer": "rien", "isCorrect": false
                }
            ]
        },
        {
            "title": "Quelle est la sortie du code suivant ?",
            "code": `let str='hello';\nlet num=12;\n\nconsole.log(hello+num)`,
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "hello12", "isCorrect": true
                },
                {
                    "answer": "hello undefined", "isCorrect": false
                },
                {
                    "answer": "hello 12", "isCorrect": false
                },
                {
                    "answer": "Cela produit une erreure", "isCorrect": false
                }
            ]
        },
        {
            "title": "Que fait le code suivant ?",
            "code": "let str;\n\nstr.charAt(0).toUpperCase() + str.slice(1);",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "Cela change toute la string en majuscule", "isCorrect": false
                },
                {
                    "answer": "Cela change la premiere lettre en majuscule", "isCorrect": false
                },
                {
                    "answer": "Cela change la string en chaine de caractère", "isCorrect": false
                },
                {
                    "answer": "Cela ne fonctionne pas", "isCorrect": true
                }
            ]
        },
        {
            "title": "Quelle est la sortie du code suivant ?",
            "code": "const array = ['hello', 'my', 'name', 'is', 'John'];\n\nconst result = array.filter(e => e.length >= 4)\n\n;console.log(result);",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "['is', 'my']", "isCorrect": false
                },
                {
                    "answer": "'hello', 'name', 'John'", "isCorrect": false
                },
                {
                    "answer": "['hello', 'name', 'John']", "isCorrect": true
                },
                {
                    "answer": "['is', 'my']", "isCorrect": false
                }
            ]
        },
        {
            "title": "Quelle est la sortie du code suivant ?",
            "code": "const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];\n\nconsole.log(beasts.indexOf('bison', 2));\nconsole.log(beasts.indexOf('giraffe'));",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "2, 0", "isCorrect": false
                },
                {
                    "answer": "4, 0", "isCorrect": false
                },
                {
                    "answer": "1, -1", "isCorrect": false
                },
                {
                    "answer": "4, -1", "isCorrect": true
                }
            ]
        },
        {
            "title": "Que manque t-il pour afficher le poids en kg ?",
            "code": "var obj = {fn: 'Martin', ln: 'Harper', age: 26, weight: 48};\n\nvar {fn, ,ln, age, weight} = obj;\n\nvar newObj = {fn, ln, age, weight: /*MISSING CODE*/};",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "weight / 1000", "isCorrect": false
                },
                {
                    "answer": "weight + 'kg'", "isCorrect": true
                },
                {
                    "answer": "weight + kg", "isCorrect": false
                },
                {
                    "answer": "kg", "isCorrect": false
                }
            ]
        },
        {
            "title": "Quelle est la sortie du code suivant ?",
            "code": "const sentence = 'The quick brown fox jumps over the lazy dog.';\nconst word = 'fox';\n\nconsole.log(`The word '${word}' ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "'The word 'fox' is in the sentence'", "isCorrect": true
                },
                {
                    "answer": "'The word 'fox' is not in the sentence'", "isCorrect": false
                },
                {
                    "answer": "Nothing it doens't work", "isCorrect": false
                },
                {
                    "answer": "'The word 'word' sentence in the sentence'", "isCorrect": false
                }
            ]
        },
        {
            "title": "Quelle est la sortie du code suivant ?",
            "code": "const array1 = [1, 2, 3];\n\nconsole.log(array1.includes(2));",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "1", "isCorrect": true
                },
                {
                    "answer": "2", "isCorrect": false
                },
                {
                    "answer": "3", "isCorrect": false
                },
                {
                    "answer": "0", "isCorrect": false
                }
            ]
        },
        {
            "title": "Qu'arrive t-il au premier tableau ?",
            "code": "let tab1 = ['Hello'];\nlet tab2 = tab1;\n\ntab2.push('World')",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "Rien on change tab2", "isCorrect": false
                },
                {
                    "answer": "Sa valeur n'est jamais lu", "isCorrect": false
                },
                {
                    "answer": "Elle est copiée dans tab2", "isCorrect": false
                },
                {
                    "answer": "Il change en même temps que tab2", "isCorrect": true
                }
            ]
        },
        {
            "title": "Quelles sont les types de variables en JavaScript ?",
            "code": "",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "Number, String, Boolean, Object", "isCorrect": false
                },
                {
                    "answer": "Number, String, Boolean, Object, Undefined", "isCorrect": true
                },
                {
                    "answer": "Number, String, Boolean", "isCorrect": false
                },
                {
                    "answer": "Number, String, Boolean, Object, Array", "isCorrect": false
                }
            ]
        },
        {
            "title": "Comment déclarer une variable non modifiable?",
            "code": "",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "let varName", "isCorrect": false
                },
                {
                    "answer": "var varName", "isCorrect": false
                },
                {
                    "answer": "const varName", "isCorrect": true
                },
                {
                    "answer": "...varName", "isCorrect": false
                }
            ]
        },
        {
            "title": "Comment extraire la valeur d'une clé spécifique depuis un objet ?",
            "code": "",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "let { status } = user", "isCorrect": true
                },
                {
                    "answer": "let status = user", "isCorrect": false
                },
                {
                    "answer": "let { status } = user()", "isCorrect": false
                },
                {
                    "answer": "let [ status ] = user", "isCorrect": false
                }
            ]
        },
        {
            "title": "Comment déclarer une fonction fléchée ?",
            "code": "",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "function funcName => (args) {}", "isCorrect": false
                },
                {
                    "answer": "var funcName = (args) => {}", "isCorrect": true
                },
                {
                    "answer": "funcName => (args) {}", "isCorrect": false
                },
                {
                    "answer": "function funcName(args) => {}", "isCorrect": false
                }
            ]
        },
        {
            "title": "Qu'est ce qu'un Object en JavaScript ?",
            "code": "",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "Cela n'existe pas en JavaScript", "isCorrect": false
                },
                {
                    "answer": "C'est la même chose qu'un tableau", "isCorrect": false
                },
                {
                    "answer": "C'est un tableau en deux dimensions", "isCorrect": false
                },
                {
                    "answer": "Il contient des collections rangés dans des clés", "isCorrect": true
                }
            ]
        },


        {
            "title": "Quelle type de scope n'existe pas en JavaScript ?",
            "code": "",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "Global Scope", "isCorrect": false
                },
                {
                    "answer": "Block Scope", "isCorrect": false
                },
                {
                    "answer": "Local or Function Scope", "isCorrect": false
                },
                {
                    "answer": "Variable Scope", "isCorrect": true
                }
            ]
        },
        {
            "title": "Quelle est la différence entre un typage statique et un typage dynamique ?",
            "code": "",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "Il n'y a pas de différence", "isCorrect": false
                },
                {
                    "answer": "Le premier typage peut être changé", "isCorrect": false
                },
                {
                    "answer": "Le second typage peut être changé", "isCorrect": true
                },
                {
                    "answer": "Aucun de ces typages n'existe", "isCorrect": false
                }
            ]
        },
        {
            "title": "Comment appelle-t-on une fonction prenant une autre fonction en argument ?",
            "code": "",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "Une fonction régulière", "isCorrect": false
                },
                {
                    "answer": "Une fonction fléchée", "isCorrect": false
                },
                {
                    "answer": "Une fonction d'ordre supérieur", "isCorrect": true
                },
                {
                    "answer": "Une fonction parent", "isCorrect": false
                }
            ]
        },
        {
            "title": "Parmis les réponses suivantes laquelle n'est pas un prototype JavaScript ?",
            "code": "",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "Date", "isCorrect": false
                },
                {
                    "answer": "const", "isCorrect": true
                },
                {
                    "answer": "Math", "isCorrect": false
                },
                {
                    "answer": "Array", "isCorrect": false
                }
            ]
        },
        {
            "title": "Comment crée-t-on une véritable copie d'un tableau en JavaScript ?",
            "code": "",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "let tab = [... arrayName]", "isCorrect": true
                },
                {
                    "answer": "let tab = [arrayName]", "isCorrect": false
                },
                {
                    "answer": "let tab = arrayName", "isCorrect": false
                },
                {
                    "answer": "let tab = [..., arrayName]", "isCorrect": false
                }
            ]
        }
    ]
}
module.exports = data;
