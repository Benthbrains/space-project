const quizQuestions = [
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: 1
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Jupiter", "Neptune", "Mars"],
    correct: 1
  },
  {
    question: "Who was the first person to walk on the Moon?",
    answers: ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "Sally Ride"],
    correct: 2
  },
  {
    question: "What galaxy do we live in?",
    answers: ["Andromeda", "Milky Way", "Triangulum", "Whirlpool"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const container = document.getElementById('quiz-container');
  container.innerHTML = '';
  if (currentQuestion < quizQuestions.length) {
    const q = quizQuestions[currentQuestion];
    const questionElem = document.createElement('div');
    questionElem.className = 'question';
    questionElem.textContent = q.question;
    container.appendChild(questionElem);

    const answersElem = document.createElement('div');
    answersElem.className = 'answers';
    q.answers.forEach((answer, idx) => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.textContent = answer;
      btn.onclick = () => checkAnswer(idx);
      answersElem.appendChild(btn);
    });
    container.appendChild(answersElem);
  } else {
    showResult();
  }
}

function checkAnswer(selected) {
  if (selected === quizQuestions[currentQuestion].correct) {
    score++;
  }
  currentQuestion++;
  showQuestion();
}

function showResult() {
  const container = document.getElementById('quiz-container');
  container.innerHTML = `<div class='result'>Quiz complete! Your score: ${score} / ${quizQuestions.length}</div>`;
}

document.addEventListener('DOMContentLoaded', showQuestion);
