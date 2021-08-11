var questionStage = document.getElementById('stage');

var answers = document.getElementById('answers')
console.log(answers)
var answerButtons = document.getElementsByName("button");
console.log(answerButtons)
var questions = document.getElementById('questions');

let timer = document.getElementById('timer');

var startButton = document.getElementById('start');

var welcome = document.getElementById('welcome');

var secondsLeft = 75;

var shuffledQuestions, currentQuestionIndex;

const questionAnswers = [
    //first question/answer object
    {question:"What values can a boolean have?",
answer:[
    //list of text/correct for answer object
    {text: "True or False", correct: true},
    {text: "Definitely, Maybe", correct: false},
    {text: "True, False, or Sometimes Both", correct: false},
    {text: "True, Flase, Number, or String", correct: false}
]},
//second question/answer object
{question:"Which of these are numbers?",
//second answer object
answer:[
{text: 4, correct: true},
{text: "four", correct: false},
{text: "'4'", correct: false},
{text: "for", correct: false}
]},
//third question answer object
{question: "What is the difference between a function and a method?",
//third answer object
answer:[
    {text: "A method is only ever within an object.", correct: true},
    {text: "There is no difference.", correct: false},
    {text: "A function is only ever within an object.", correct: false},
    {text: "A method is only ever outside an object.", correct: false}
]},
//fourth question answer object
{question: "Which line of code adds functionality when a variable called 'button' is clicked?",
//fourth answer object
answer:[
    {text: "button.addEventListener('click', alert('Don't just push random buttons!'))", correct: true},
    {text: "button.alert('Don't just click random buttons!')", correct: false},
    {text: "button.addEventListener('click')", correct: false},
    {text: "buttons.addEventListener('click', alert('Don't just push random buttons!'))", correct: false}
]},
//fifth question answer object
{question: "Select the answer that describes what this code will do: document.getElementById('text').innerHTML = 'New Text!'",
//fifth answer object
    answer:[
        {text: "Sets the HTML content of the element with the id of 'text' within the document loading the script to equal 'New Text!'", correct: true},
        {text: "Nothing", correct: false},
        {text: "I don't know", correct: false},
        {text: "Sets the HTML content of the element with the class of 'text' within the document loading the script to equal 'New Text!'", correct: false}]
}];
//End of Question and Answer Object

let score = 0;


//trying to get timer and score to adjust with answer correctness
function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answers.children).forEach(button => {
        setStatusClass(button.dataset.correct)
    })
    };

function setStatusClass(element, correct){
    //clearStatusClass(element)
    if(correct){
        element.classList.add('correct')

        score = score + 10

        console.log(score)
    }
    else{
        element.classList.add('wrong')
        
        secondsLeft = secondsLeft-5 
    }
    currentQuestionIndex++
    setNextQuestion();
}

    //function clearStatusClass(element){
    //element.classList.remove('correct')
    //element.classList.remove('wrong')
    //}


function setNextQuestion(){
    resetState();
    //go to highscore if out of questions
    if(currentQuestionIndex === shuffledQuestions.length){
        localStorage.setItem("score", score)
        window.location.assign("highscores.html")
    }
    else{
    showQuestion(shuffledQuestions[currentQuestionIndex])
    };
};

function showQuestion(){
    stage.innerText = shuffledQuestions[currentQuestionIndex].question
    shuffledQuestions[currentQuestionIndex].answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        // add btn class for styling later
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answers.appendChild(button)
    })
    };

function resetState(){
    //clearStatusClass(document.body)
    while(answers.firstChild){
        answers.removeChild(answers.firstChild)
    }
}

function startQuiz(){
    //code to hide starting content
    welcome.classList.add('poof');  
    startButton.classList.add('poof');
        //code to show questions and answers  
    answers.classList.remove('poof');
    shuffledQuestions = questionAnswers.sort(()=>Math.random()-.5);
    currentQuestionIndex = 0
    setNextQuestion();
}
//Timer for quiz
function setTimer() {
var quizTimer = setInterval(function() {
    //code to set timer
secondsLeft--;
timer.textContent = secondsLeft;

//code to go to highscores at end of time
if(secondsLeft === 0){
    clearInterval(quizTimer);
    localStorage.setItem("score", score)
    window.location.assign("highscores.html");
}
}, 750)};
//End of set Timer

//adds Timer function to start button
startButton.addEventListener("click", setTimer);
startButton.addEventListener("click", startQuiz);

//append highscore name, render todos hint
//clear highscores
//hide buttons based on click
