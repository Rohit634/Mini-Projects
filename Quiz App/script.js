var questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Chloroplast", "Mitochondria", "Ribosome"],
        answer: "Mitochondria"
    }
];

var currentQuestionIndex = 0;
var score = 0;

function displayQuestion() {
    var questionDiv = document.getElementById("question");
    var optionsDiv = document.getElementById("options");
    var currentQuestion = questions[currentQuestionIndex];

    questionDiv.innerHTML = currentQuestion.question;

    optionsDiv.innerHTML = "";
    currentQuestion.options.forEach(option => {
        var button = document.createElement("button");
        button.innerHTML = option;
        button.onclick = function() {
            checkAnswer(option);
        };
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    var currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert("Quiz completed!\nYour score: " + score);
    }
}

displayQuestion();
