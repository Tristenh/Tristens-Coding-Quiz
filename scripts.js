const timer = document.querySelector(".countdown");
const start = document.querySelector(".start");
const multipleChoice = document.querySelectorAll(".multiple-choice");
const correctAnswer = document.querySelectorAll(".correct");
const btn = document.querySelectorAll(".btn");
const gameover = document.querySelector(".gameover");
const homepage = document.querySelector(".homepage");
const score = document.querySelector(".score");
const answerOutcome = document.querySelectorAll(".answer-outcome");
const submit = document.querySelector(".submit");
const combinedTextArea = document.querySelector("#combined-textarea");
const initials = document.querySelector("#initials");
const showInitials = document.querySelector(".show-initials");
const timeScore = document.querySelector(".time-score");
const viewHighScores = document.querySelector(".view-high-scores");
const highScoresPage = document.querySelector(".high-scores-page");
const backToMain = document.querySelector(".back-to-main");
const clearHighScores = document.querySelector(".clear-high-scores");

// variables
let timeLeft = 75;
let points = 0;
let index = 0;
let timeInterval;

// initial style display
gameover.style.display = "none";
highScoresPage.style.display = "none";

// start click event
startGame();
function startGame() {
  start.addEventListener("click", function () {
    homepage.style.display = "none";
    countdown();
    showQuestions(0);
  });
}

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
    if (multipleChoice[index]) {
      multipleChoice[index].style.display = "flex";
    }
  }
}

// if correct answer hides the current question and shows the next question
nextQuestion();
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
wrongQuestion();
function wrongQuestion() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      showOutcome(false);
      points++;
      timeLeft -= 10;
    });
  }
}

// answerOutcome for loop
for (let i = 0; i < answerOutcome.length; i++) {
  answerOutcome[i].style.display = "none";
}

// shows outcome of answer whether correct or wrong
function showOutcome(isCorrect) {
  for (let i = 0; i < answerOutcome.length; i++) {
    answerOutcome[i].style.display = "flex";
    answerOutcome[i].textContent = isCorrect ? "correct" : "wrong";
    setTimeout(function () {
      answerOutcome[i].style.display = "none";
    }, 1000);
  }
}

// view high scores button
viewHighScores.addEventListener("click", function () {
  homepage.style.display = "none";
  hideContent();
  highScoresPage.style.display = "flex";
});

// back to main page button
backToMain.addEventListener("click", function () {
  homepage.style.display = "flex";
  highScoresPage.style.display = "none";
  resetGame();
});

// end of game
function endGame() {
  hideContent();
  gameover.style.display = "flex";
  score.innerHTML = "Your final score is " + timeLeft;
}

// setItem for saving scores
submit.addEventListener("click", function (event) {
  gameover.style.display = "none";
  highScoresPage.style.display = "flex";

  event.preventDefault();
  let initialsValue = document.querySelector("#initials").value;
  localStorage.setItem("initials", initialsValue);

  let timeValue = timeLeft.toString();
  localStorage.setItem("timeValue", timeValue);
  renderScore();
});
// getItem gets items and displays them
combinedTextArea.value = initials.value + " - " + timeLeft;
renderScore();
function renderScore() {
  let storedInitials = localStorage.getItem("initials");

  let storedTime = localStorage.getItem("timeValue");
  combinedTextArea.value = storedInitials + " - " + storedTime;
}

// reset the game variables to default
function resetGame() {
  timeLeft = 75;
  points = 0;
  index = 0;
  gameover.style.display = "none";
  hideContent();
  clearInterval(timeInterval);
  timer.textContent = "Time : " + timeLeft;
}

// clears high scores on page refresh
clearHighScoresButton();
function clearHighScoresButton() {
  clearHighScores.addEventListener("click", function () {
    localStorage.removeItem("initials");
    localStorage.removeItem("timeValue");
  });
}
