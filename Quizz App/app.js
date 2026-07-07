const questionCount = document.querySelector('#questionCount')
const questionText = document.querySelector('#questionText')
const options = document.querySelectorAll('.option')
const nextBtn = document.querySelector('#nextBtn')
const quizScreen = document.querySelector('.quiz-screen')
const resultScreen = document.querySelector('.result-screen')
const scoreText = document.querySelector('#scoreText')
const restartBtn = document.querySelector("#restartBtn")

let currentQuestion = 0
let score = 0
let optionSelected = false


const questions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "define"],
        answer: "var"
    },
    {
        question: "Which method is used to select an element by ID?",
        options: ["querySelector", "getElementById", "getElement", "selectById"],
        answer: "getElementById"
    },
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Data Oriented Model"],
        answer: "Document Object Model"
    },
    {
        question: "Which event fires when a button is clicked?",
        options: ["hover", "change", "click", "input"],
        answer: "click"
    },
    {
        question: "What does Math.random() return?",
        options: ["A random number between 1 and 10", "A random number between 0 and 1", "A random integer", "A random string"],
        answer: "A random number between 0 and 1"
    }
]


function loadQuestion(){
    let q = questions[currentQuestion]
    questionCount.innerHTML = `Question ${currentQuestion + 1} of ${questions.length}`
    questionText.innerHTML = q.question

    options.forEach((btn, index) =>{
        btn.innerHTML = questions[currentQuestion].options[index]
    })
}

loadQuestion()

options.forEach((btn) =>{
    btn.addEventListener('click', () =>{
        optionSelected = true
        let correctAnswer = questions[currentQuestion].answer

        if(btn.innerHTML == correctAnswer){
            btn.style.backgroundColor = "green"
            score++
        }else{
            btn.style.backgroundColor = "red"
        }

        options.forEach((b) =>{
            b.disabled = true
        })
    })
})

nextBtn.addEventListener('click', () =>{

    if(optionSelected == false){
        alert("Please select an option");
        return;
    }
    optionSelected = false

    options.forEach((btn) =>{
    btn.style.backgroundColor = "transparent"
    btn.disabled = false
})
currentQuestion++

if(currentQuestion >= questions.length){
    quizScreen.style.display = "none"
    resultScreen.style.display = "flex"
    scoreText.innerHTML = `Your score: ${score} / ${questions.length}`
}else{
    loadQuestion()
}
})

restartBtn.addEventListener('click', () =>{
    currentQuestion = 0
    score = 0

    quizScreen.style.display = "flex"
    resultScreen.style.display = "none"

    options.forEach((btn) =>{
        btn.style.backgroundColor = "transparent"
        btn.disabled = false
    })

    loadQuestion()
})