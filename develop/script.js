var answerField = document.querySelector("answers");

var questions = document.querySelector("questions");

var timer = document.getElementById('timer');

var startButton = document.getElementById('start');

var secondsLeft = 75;

//Change Text Content on loop for questions?
//"answer" class/id for answer buttons, group into variable, add click event
//Timer for quiz
//add start button
function setTimer() {
//window.location = "highscores.html" at end of interval(Timer that subtracts on wrong answers)
var quizTimer = setInterval(function() {

secondsLeft--;

timer.textContent = secondsLeft;

if(secondsLeft === 0){
    clearInterval(quizTimer);
    window.location.assign("highscores.html");
}
}, 750)};
//End of set Timer

startButton.addEventListener("click", setTimer);
//for loop to calculate score, store in variable/local storage, retrieve/display on highscores page