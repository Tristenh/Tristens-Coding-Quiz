
let timer = document.querySelector(".countdown");
countdown()
function countdown(){
    let timeLeft = 75
    let timeInterval = setInterval(function(){
        timeLeft --
        timer.textContent = "Time : " + timeLeft
        if(timeLeft === 0){
            clearInterval(timeInterval)
        }
},1000);
}