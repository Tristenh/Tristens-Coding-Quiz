const timer = document.querySelector(".countdown");
const start = document.querySelector(".start");
const multipleChoice = document.querySelectorAll(".multiple-choice");
const correctAnswer = document.querySelectorAll(".correct");
const btn = document.querySelectorAll(".btn");
const gameover = document.querySelector(".gameover");
const homepage = document.querySelector(".homepage");
const score = document.querySelector(".score");
const answerOutcome = document.querySelectorAll(".answer-outcome");

let timeLeft = 75;
let points = 0;
let index = 0;
gameover.style.display = "none";

for (let i = 0; i < answerOutcome.length; i++) {
  answerOutcome[i].style.display = "none";
}
function showOutcome(isCorrect) {
  for (let i = 0; i < answerOutcome.length; i++) {
    answerOutcome[i].style.display = "flex";
    answerOutcome[i].textContent = isCorrect ? "correct" : "wrong";
    setTimeout(function () {
      answerOutcome[i].style.display = "none";
    }, 1000);
  }
}

// hide Content
hideContent();
function hideContent() {
  for (let i = 0; i < multipleChoice.length; i++) {
    multipleChoice[i].style.display = "none";
  }
}
// show questions
function showQuestions(index) {
  for (let i = 0; i < multipleChoice.length; i++) {
    multipleChoice[index].style.display = "flex";
  }
}
// add points
function nextQuestion() {
  for (let i = 0; i < correctAnswer.length; i++) {
    correctAnswer[i].addEventListener("click", function () {
      hideContent();
      showOutcome(true);
      points++;
      index++;
      showQuestions(index);
    });
  }
}
// wrong answer take away 10 seconds
function wrongQuestion() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      showOutcome(false);
      points++;
      timeLeft -= 10;
    });
  }
}

// start click event
start.addEventListener("click", function () {
  homepage.style.display = "none";
  countdown();
  showQuestions(0);
  nextQuestion();
  wrongQuestion();
});

// counting down function
function countdown() {
  let timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = "Time : " + timeLeft;
    if (timeLeft < 0 || timeLeft === 0 || index === multipleChoice.length) {
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
}
// end of game

function endGame() {
  hideContent();
  gameover.style.display = "flex";
  score.innerHTML = "Your final score is " + timeLeft;
}
