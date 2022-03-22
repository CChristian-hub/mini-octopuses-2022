let data = {
    "questions": [
        {
            "title": "What is the value of sum at the of the loop ?",
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
            "title": "What will be displayed by console.log() ?",
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
                    "answer": "this code doesn't work", "isCorrect": false
                },
                {
                    "answer": "nothing", "isCorrect": false
                }
            ]
        },
        {
            "title": "What is the output of the following code ?",
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
                    "answer": "It gives an error", "isCorrect": false
                }
            ]
        },
        {
            "title": "What does the following code do ?",
            "code": "let str;\n\nstr.charAt(0).toUpperCase() + str.slice(1);",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "It changes the whole string to uppercase", "isCorrect": false
                },
                {
                    "answer": "It changes the first letter to uppercase", "isCorrect": false
                },
                {
                    "answer": "It changes the string to and array of characters", "isCorrect": false
                },
                {
                    "answer": "It doesn't work", "isCorrect": true
                }
            ]
        },
        {
            "title": "What is the output of the following code ?",
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
            "title": "What will the output of the following code be ?",
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
            "title": "What is missing to display the weight in kg ?",
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
            "title": "What is the output of the following code ?",
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
            "title": "What is the output of the following code ?",
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
            "title": "What happens to the first array ?",
            "code": "let tab1 = ['Hello'];\nlet tab2 = tab1;\n\ntab2.push('World')",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "Nothing", "isCorrect": false
                },
                {
                    "answer": "Value is never read", "isCorrect": false
                },
                {
                    "answer": "It is ignored since we are changing tab1", "isCorrect": false
                },
                {
                    "answer": "It gets changed along with tab2", "isCorrect": true
                }
            ]
        }
    ]
}
module.exports = data;
