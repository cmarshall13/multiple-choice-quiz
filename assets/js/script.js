var questionObjectArray = [
    {
        "question": "Inside which HTML element do we put the JavaScript?",
        "A":"<script>",
        "B":"<js>",
        "C":"<scripting>",
        "D":"<javascript>",
        "correct": "A"
    },
    {
        "question": "Where is the correct place to insert JavaScript?",
        "A":"Both the <head> section and the <body> section are correct",
        "B":"The <head> section",
        "C":"The <body> section",
        "D":"The <footer> section",
        "correct": "A"
    },
    {
        "question": "What is the correct syntax for referring to an external script called xxx.js?",
        "A":"<script name='xxx.js'>",
        "B":"<script href='xxx.js'>",
        "C":"<script src='xxx.js'>",
        "D":"<script tag='xxx.js'>",
        "correct": "C"

    },
    {
        "question": "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        "A":"if i=! 5 then",
        "B":"if i <> 5",
        "C":"if (i <> 5)",
        "D":"if (i !=5)",
        "correct": "D"
    },
    {
        "question": "How do you write 'Hello World' in an alert box?",
        "A":"alertBox('Hello World');",
        "B":"msg('Hello World');",
        "C":"alert('Hello World');",
        "D":"msgBox('Hello World');",
        "correct": "C"
    },
    {
        "question": "How to write an IF statement in JavaScript?",
        "A":"if i = 5 then",
        "B":"if i == 5 then",
        "C":"if i= 5",
        "D":"if (i==5)",
        "correct": "D"
    },
    {
        "question": "How does a FOR loop start?",
        "A":"for (i=0; i <= 5)",
        "B":"for (i=0; i <= 5; i++)",
        "C":"for (i<=5; i++)",
        "D":"for i=1 to 5",
        "correct": "B"
    },
    {
        "question": "What is the correct way to write a JavaScript array?",
        "A":"var colors=['red','green','blue']",
        "B":"var colors= 1=('red'),2=('green'),3=('blue')",
        "C":"var colors='red','green','blue'",
        "D":"var colors=(1:'red',2:'green',3:'blue'",
        "correct": "A"
    },
    {
        "question": "Which event occurs when the user clicks on an HTML element?",
        "A":"onmouseclick",
        "B":"onclick",
        "C":"onchange",
        "D":"onmouseover",
        "correct": "B"
    },
    {
        "question": "Which operator is used to assign value to a variable?",
        "A":"x",
        "B":"-",
        "C":"=",
        "D":"*",
        "correct": "C"
    },

];

const startButton = document.getElementById('start-btn');
const answerA = document.getElementById('answer-a');
const answerB = document.getElementById('answer-b');
const answerC = document.getElementById('answer-c');
const answerD = document.getElementById('answer-d');
const quizIntroContainer = document.querySelector('#quiz-intro-container');
const answerContainer = document.querySelector('#answer-container');
const questionTextElement = document.querySelector('#question-text');
const highScorePage = document.querySelector('#high-score-container');
const submitButton = document.querySelector('#submit-button');
const showHighScore = document.querySelector('.high-score');
const showEndButtons = document.querySelector('.high-score-buttons');
const returnButton = document.querySelector('#return-button');
const clearHighScoresButton = document.querySelector('#clear-button');

let viewHighScores = document.querySelector('#view-score-link');
let formElement = document.querySelector('#submit-form');
let userInitials = document.querySelector('#initials');
let endGameText = document.querySelector('.end-game');
let displayedHighScore = document.querySelector('.end-sub-title');
let leaderBoard = document.querySelector('.high-score-leaderboard');