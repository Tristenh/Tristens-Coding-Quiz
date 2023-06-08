const timer = document.querySelector(".countdown");
const start = document.querySelector(".start");

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
