var timerEl = document.querySelector(".timer")
var minLeft = 3000;
var button = document.querySelector(".button")
var containerEl = document.getElementsByClassName(".container")

button.addEventListener("click", timeRemaining);


function timeRemaining(event) {
    var timerLoop = timeRemaining.function; {
        minLeft--;
        timerEl.textContent = minLeft + " Minutes remaining";

        if(timeRemaining ===0) {
            clearInterval(minLeft);
            deliverMessage; 

        }
    }
}


function deliverMessage() {
    timerEl.textContent = " Times Up!!! ";

}

