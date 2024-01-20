const questions = [
    {
        question: "which is the largest animal in the world?",
        answer: [
            {text: "shark", correct:false},
            {text: "blue whale", correct:true},
            {text: "Elephant", correct:false},
            {text: "Giraffe", correct:false},
        ]
    },
    {
        question: "which is the smallest city in the world?",
        answer: [
            {text: "Vatican city", correct:true},
            {text: "bhutan", correct:false},
            {text: "Nepal", correct:false},
            {text: "shri lanka", correct:false},
        ]
    },
    {
        question: "which is the largest desert in the world?",
        answer: [
            {text: "kalahari", correct:false},
            {text: "gobi", correct:false},
            {text: "sahara", correct:false},
            {text: "Antartica", correct:true},
        ]
    },
    {
        question: "which is the smallest continent in the world?",
        answer: [
            {text: "Asia", correct:false},
            {text: "Austrelia", correct:true},
            {text: "Arctic", correct:false},
            {text: "Africa", correct:false},
        ]
    },

]


const questionElement = document.getElementById("question");
const nextButtons = document.getElementById("nxt_btn");
const answerButton = document.getElementById("answer_button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButtons.innerHTML = "Next";  
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo +    ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}


function resetState() {
    nextButtons.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}


startQuiz(); 