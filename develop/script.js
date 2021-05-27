var answers = document.getElementById('answers');

var questions = document.getElementById('questions');

var timer = document.getElementById('timer');

var startButton = document.getElementById('start');

var welcome = document.getElementById('welcome');

var secondsLeft = 75;
 
//calculate score with local storage variable, counter example

//Array for answers(one for wrong, one for right?) and questions with matching idexes? But then how match answers to letter?

//Answers each have own button, likely use class to trigger function from any of them

//Change Text Content on button push for questions, 1,2,3,4 + "array item"

//"answer" class/id for answer buttons, group into variable, add click event

//Timer for quiz

//timer subtracts on wrong answers

//add functionality to button to calculate score, store in variable/local storage, retrieve/display on highscores page

console.log(answers);

answers.style.display = "none";

function setTimer() {

var quizTimer = setInterval(function() {

welcome.textContent = "";    

startButton.remove();    

answers.style.display = "block";

secondsLeft--;

timer.textContent = secondsLeft;

if(secondsLeft === 0){
    clearInterval(quizTimer);
    window.location.assign("highscores.html");
}
}, 750)};
//End of set Timer

startButton.addEventListener("click", setTimer);


//append highscore name, render todos hint
