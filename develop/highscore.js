let score = localStorage.getItem("score")
let scoreList = document.getElementById('scoreList')
let finalScore = document.getElementById('final')
let hiddenElements = document.getElementsByClassName("poof")
let initialBox = document.getElementById('initials')
let clearButton = document.getElementById('clear')
let submitButton = document.getElementById('submit')
finalScore.innerHTML ="Your final score is " + score + "!";
//create li element with text content equal to initialBox.value + " - " + score
//set class for styling
//then append to finalScore div
//then change button classes
let submitScore = function(e){
    let initials = initialBox.value;
    let li = document.createElement("li");
    li.textContent = initials + " - " + score;
    scoreList.appendChild(li);
    e.preventDefault();
}

let clearScores = function(){

}

submitButton.addEventListener("click", submitScore)
