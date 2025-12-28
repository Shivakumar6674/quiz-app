const quizData = [
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        correct: 3
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "None of these"
        ],
        correct: 0
    },
    {
        question: "Which year was JavaScript created?",
        options: ["1995", "2000", "2005", "2015"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById("question").innerText = q.question;

    const buttons = document.querySelectorAll(".option");
    buttons.forEach((btn, index) => {
        btn.innerText = q.options[index];
    });
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").innerHTML =
            `<h2>Quiz Finished!</h2>
             <p>Your Score: ${score}/${quizData.length}</p>`;
    }

    document.getElementById("score").innerText = "Score: " + score;
}

loadQuestion();
