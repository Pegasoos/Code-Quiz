let score = localStorage.getItem("score")

let scoreList = document.getElementById('scoreList')

let finalScore = document.getElementById('final')

let formElement = document.getElementById("formList")

let hiddenButtons = document.getElementById("clearGoButtons")

let hiddenHeader = document.getElementById('hiddenHeading')

let pencilHeading = document.getElementById('heading')

let initialBox = document.getElementById('initials')

let clearButton = document.getElementById('clear')

let submitButton = document.getElementById('submit')

finalScore.innerHTML ="Your final score is " + score + "!";

let submitScore = function(e){
    let initials = initialBox.value;
    let li = document.createElement("li");
    li.textContent = initials + " - " + score;
    scoreList.appendChild(li);
    e.preventDefault();
    hiddenButtons.classList.remove("poof")
    pencilHeading.classList.add("poof")
    finalScore.classList.add("poof")
    formElement.classList.add("poof")
    score = 0
}

let clearScores = function(){
    scoreList.remove("li")
}

submitButton.addEventListener("click", submitScore)
clearButton.addEventListener("click", clearScores)