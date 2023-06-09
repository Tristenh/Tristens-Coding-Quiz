const timer = document.querySelector(".countdown");
const start = document.querySelector(".start");
const multipleChoice = document.querySelectorAll(".multiple-choice");
const correctAnswer = document.querySelector(".correct");
const btn = document.querySelectorAll(".btn");
const gameovver = document.querySelector(".gameover");
const homepage = document.querySelector(".homepage");

let timeLeft = 75;
let points = 0;
index = 0;
// hide Content
hideContent();
function hideContent() {
  for (let i = 0; i < multipleChoice.length; i++) {
    multipleChoice[i].style.display = "none";
    gameovver.style.display = "none";
  }
}
// show questions
function showQuestions(index) {
  for (let i = 0; i < multipleChoice.length; i++) {
    multipleChoice[index].style.display = "flex";
  }
}
// add points
for (let i = 0; i < correctAnswer.length; i++) {
  correctAnswer[i].addEventListener("click", function () {
    points++;
    console.log(points);
  });
}
// wrong answer take away 10 seconds
minusTime();
function minusTime() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
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
});

// counting down function
function countdown() {
  let timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = "Time : " + timeLeft;
    if (timeLeft < 0 || timeLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}
