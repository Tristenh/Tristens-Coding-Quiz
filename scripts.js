const timer = document.querySelector(".countdown");
const start = document.querySelector(".start");
const multipleChoice = document.querySelectorAll(".multiple-choice");
const correctAnswer = document.querySelectorAll(".correct");

let points = 1;
for (let i = 0; i < correctAnswer.length; i++) {
  correctAnswer[i].addEventListener("click", function () {
    console.log(points++);
  });
}

// start click event
start.addEventListener("click", function () {
  countdown();
});

// counting down function
function countdown() {
  let timeLeft = 75;
  let timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = "Time : " + timeLeft;
    if (timeLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}
