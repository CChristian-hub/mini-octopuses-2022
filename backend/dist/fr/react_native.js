let data = {
    "questions": [
        {
            "title": "Comment pouvez vous créer un nouveau projet sous React native ?",
            "code": "",
            "isFrench": true,
            "topic": "ReactNative",
            "answers": [
                {
                    "answer": "npx create-react-app new-app", "isCorrect": false
                },
                {
                    "answer": "npx react-native init new-app", "isCorrect": true
                },
                {
                    "answer": "npx create-react-native-app new-app", "isCorrect": false
                },
                {
                    "answer": "expo run new-app", "isCorrect": false
                }
            ]
        },
        {
            "title": "A quoi sert le module bottom tab navigation sous la librairie react navigation ?",
            "code": "",
            "isFrench": true,
            "topic": "ReactNative",
            "answers": [
                {
                    "answer": "Permet de créer des onglets en haut de l'écran", "isCorrect": false
                },
                {
                    "answer": "Permet de créer des onglets situé en bas de l'écran", "isCorrect": true
                },
                {
                    "answer": "Permet de créer des onglets en haut de l'écran", "isCorrect": false
                },
                {
                    "answer": "Permet de créer un menu caché en bas de l'écran", "isCorrect": false
                }
            ]
        },
        {
            "title": `Imaginez que vous devez créer une application qui contient une grande liste d'images scrollables, similaire a Instagram, qu'utilisez vous pour cette fonctionnalité ?`,
            "code": "",
            "isFrench": true,
            "topic": "ReactNative",
            "answers": [
                {
                    "answer": "DataSource", "isCorrect": false
                },
                {
                    "answer": "ListView", "isCorrect": false
                },
                {
                    "answer": "FlatList", "isCorrect": true
                },
                {
                    "answer": "ScrollView", "isCorrect": false
                }
            ]
        },
        {
            "title": "Une façon de naviguer entre les différents écrans de l'application consiste a utiliser :",
            "code": "",
            "isFrench": true,
            "topic": "ReactNative",
            "answers": [
                {
                    "answer": `Les packages "react- navigation" et "react - navigation - stack"`, "isCorrect": true
                },
                {
                    "answer": `Le package "react- native - viewpager`, "isCorrect": false
                },
                {
                    "answer": `Le package "react-router - dom"`, "isCorrect": false
                },
                {
                    "answer": "NativeModules", "isCorrect": false
                }
            ]
        },
        {
            "title": `Comment pouvez vous mettre en place un système de notification push ou un système de synschronisation qui fonctionnera en arrière-plan de l'application ? `,
            "code": "",
            "isFrench": true,
            "topic": "ReactNative",
            "answers": [
                {
                    "answer": "En utillisant NativeModules", "isCorrect": false
                },
                {
                    "answer": "En utilisant BroadcastReceiver", "isCorrect": false
                },
                {
                    "answer": "En utilisant Headless J", "isCorrect": true
                },
                {
                    "answer": "Il n'est pas possible de mettre un système de notification push en arrière plan de l'application", "isCorrect": false
                }
            ]
        },
        {
            "title": "Comment pouvez-vous stocker des données dans votre application ?",
            "code": "",
            "isFrench": true,
            "topic": "ReactNative",
            "answers": [
                {
                    "answer": `En utilisant '@react-native-community/async-storage' car AsyncStorage de 'react-native' est obsolète`, "isCorrect": false
                },
                {
                    "answer": `En utilisant localstorage`, "isCorrect": false
                },
                {
                    "answer": `En utilisant globalVariable`, "isCorrect": false
                },
                {
                    "answer": `En important AsyncStorage à partir de 'react-native'`, "isCorrect": true
                }
            ]
        },
        {
            "title": " Comment pouvez vous deboguer une application React Native directement dans le navigateur Chrome (en accédant à http://localhost:8081/) ?",
            "code": "",
            "isFrench": true,
            "topic": "ReactNative",
            "answers": [
                {
                    "answer": "Sélectionner 'Debug JS Remotely' dans le menu développeur ToastAndroid", "isCorrect": true
                },
                {
                    "answer": "Selectionner 'Start Systrace' dans le menu développeur ToastAndroid", "isCorrect": false
                },
                {
                    "answer": "Selectionner 'Show inspector' dans le menu développeur ToastAndroid", "isCorrect": false
                },
                {
                    "answer": "Selectionner 'Show Perf Monitor' dans le menu développeur ToastAndroid", "isCorrect": false
                }
            ]
        },
        {
            "title": `Dans React Native, vous pouvez tester le rendu d'un composant puis le comparer à un fichier d'instantané généré lors de la première éxécution du text.Comment procédez - vous ?`,
            "code": "",
            "isFrench": true,
            "topic": "ReactNative",
            "answers": [
                {
                    "answer": "En utilisant 'Jest' et le package react-test-renderer", "isCorrect": true
                },
                {
                    "answer": "En utilisant Stubs", "isCorrect": false
                },
                {
                    "answer": "En utilisant Mocks", "isCorrect": false
                },
                {
                    "answer": "En utilisant le package react-native-testing", "isCorrect": false
                }
            ]
        },
        {
            "title": "Comment pouvez vous maintenir l'état lorsque l'application est fermée ?",
            "code": "",
            "isFrench": true,
            "topic": "ReactNative",
            "answers": [
                {
                    "answer": `On peut utiliser un "Store" redux mais on doit maintenir les données, donc on a besoin de redux,react-redux,redux-persist1`, "isCorrect": true
                },
                {
                    "answer": `On doit utiliser un "Store" pour conserver les données en utilisant redux, react-redux`, "isCorrect": false
                },
                {
                    "answer": "On utilise localstorage", "isCorrect": false
                },
                {
                    "answer": "On ne pas pas le faire en React Native", "isCorrect": false
                }
            ]
        },
        {
            "title": "Lequel des composants de base peut capturer la saisie de texte dans Expo ? ",
            "code": "",
            "isFrench": true,
            "topic": "ReactNative",
            "answers": [
                {
                    "answer": "View", "isCorrect": false
                },
                {
                    "answer": "Button", "isCorrect": false
                },
                {
                    "answer": "Pressable", "isCorrect": false
                },
                {
                    "answer": "TextInput ", "isCorrect": true
                }
            ]
        }
    ]
}
module.exports = data;