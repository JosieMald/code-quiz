var arrayOfQuestions = [
  {
    question: "Commonly used data types DO NOT include: ",
    answers: [
       "a. alerts",
       "b. booleans", 
       "c. numbers", 
       "d. strings", 
  ], correct: "a. alerts",
  },
  
  {
      question: "The condition in an if / else statement is enclosed within _______.",
      answers: [
           "a. parantheses", 
           "b. qutoes", 
           "c. curly brackets",
           "d. square brackets", 
      ], correct: "a. parantheses",
  },

  {
      question: "Arrays in Javascript can be used to store ___________.",
      answers: [ 
           "a. other arrays",
           "b. numbers and strings",
           "c. booleans", 
           "d. all of the above",

      ], correct: "d. all of the above",
  },
];


//DOM ELEMENTS
var startButton = document.getElementById("start-button");
// var startButton = $("#start-button").on("click", nameOfFunction)
var countDownTimer = document.getElementById("timer");
var keepScore = document.getElementById("score");
var quizQuestions = document.getElementById("questions")
var currentIndex = 0;
var questionEl = document.createElement("h1");
// var questionEl = $("<h1>")
var answersDiv = document.createElement("div");
var timeLeft = 100;
var numCorrect = [];

function clock () {
    countDownTimer.textContent = timeLeft;
    timeLeft--;
    if (timeLeft <= 0) {
        timeLeft = 0
    }
}
setInterval(clock, 1000);

function displayQuestion() {
    var currentQuestion = arrayOfQuestions[currentIndex]
    questionEl.innerHTML= "";
    questionEl.textContent = currentQuestion.question;
    quizQuestions.append(questionEl);

    answersDiv.innerHTML = "";
    
    for (var i = 0; i < currentQuestion.answers.length; i++){
        var answerBtn = document.createElement("button");
        answerBtn.textContent = currentQuestion.answers[i];
        answerBtn.setAttribute("value", currentQuestion.answers[i]);

        answerBtn.onclick = evaluateAnswer
        answersDiv.append(answerBtn);
    }
    quizQuestions.append(answersDiv);

}
function evaluateAnswer() {
    console.log(this.value);
    if (this.value !== arrayOfQuestions[currentIndex].correct) {
        console.log("wrong")
        timeLeft -= 10;
        if (timeLeft <= 0) { 
            timeLeft = 0;
            console.log("Game Over");
        }
    } else {
        console.log("right");
        numCorrect.push(arrayOfQuestions[currentIndex]);
        keepScore.textContent = numCorrect.length * 20;
    }
    currentIndex++;
    if (currentIndex === arrayOfQuestions.length) {
        console.log("end  game");
    } else {
        displayQuestion();
    }
}

startButton.addEventListener("click", function () {
    console.log("You clicked the start button");
    // if (currentIndex < arrayOfQuestions.length) {
    //     currentIndex++;
    // } else {
    //     return;
    // }
    displayQuestion();
}
);



  //start timer
  // startTimer()
  // hide the instuctions
  //hideInstructions()


