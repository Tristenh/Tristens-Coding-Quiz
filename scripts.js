const timer = document.querySelector(".countdown");
const start = document.querySelector(".start");
const multipleChoice = document.querySelectorAll(".multiple-choice");
const correctAnswer = document.querySelectorAll(".correct");
const btn = document.querySelectorAll(".btn");

let timeLeft = 75;
let points = 0;

// add points
for (let i = 0; i < correctAnswer.length; i++) {
  correctAnswer[i].addEventListener("click", function () {
    points++;
    console.log(points);
  });
}
// wrong answer take saway 10 seconds
minusTime()
function minusTime() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      points++;
      timeLeft -= 10;
      console.log(points);
    });
  }
}

// start click event
start.addEventListener("click", function () {
  countdown();
});

// counting down function
function countdown() {
  let timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = "Time : " + timeLeft;
    if (timeLeft <= 0) {
      minusTime();
      clearInterval(timeInterval);
    }
  }, 1000);
}
