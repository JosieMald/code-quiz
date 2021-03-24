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
          "a. qutoes", 
          "b. curly brackets",
          "c. parantheses", 
          "d. square brackets", 
      ], correct: "c. parantheses",
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
  {
      question: "What encompasses an array?",
      answers: [
          "a. ()",
          "b. []",
          "c. //",
          "d. {}",
      ], correct: "b. []",
  },
  {
      question: "What does a Boolean return?",
      answers: [
          "a. true/false",
          "b. 0",
          "c. null ",
          "d. undefined",
      ], correct: "a. true/false",
  },
  {
      question: "What number value does an Index start with",
      answers: [
          "a. 1",
          "b. i",
          "c. 0",
          "d. -1",
      ], correct: "c. 0",
  }
];


//DOM ELEMENTS
var startButton = document.getElementById("start-button");
var countDownTimer = document.getElementById("timer");
var keepScore = document.getElementById("score");
var quizQuestions = document.getElementById("questions")
var questionEl = document.createElement("h1");
var answersDiv = document.createElement("Div");
var startH1El = document.querySelector("h1");
var startP = document.querySelector("p");
var currentIndex = 0;
var timeLeft = 60;
var numCorrect = [];
var timerClass;

// <-- Timer -->

function clock () {
    countDownTimer.textContent = timeLeft;
    timerClass = setInterval( function () {
        timeLeft--;
        if (timeLeft <= 0) {
            timeLeft = 0
        }
    },1000);
    displayQuestion();
}

// <-- Question and Answer Display -->

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

// <-- Evaluate Correct Answer -->

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
        keepScore.textContent = numCorrect.length * 10;
    }
    currentIndex++;
    if (currentIndex === arrayOfQuestions.length) {
        console.log("end  game");
    } else {
        displayQuestion();
    }
}

// <-- Start Button -->

startButton.addEventListener("click", function (event) {
    startButton.style.display = "none";
    startH1El.style.display = "none";
    startP.style.display = "none";
    clock();
}
);

