var arrayOfQuestions = [
  {
    question: "Commonly used data types DO NOT include: ",
    answers: ["a. alerts", "b. booleans", "c. numbers", "d. strings"],
    correct: "a. alerts",
  },

  {
    question:
      "The condition in an if / else statement is enclosed within _______.",
    answers: [
      "a. qutoes",
      "b. curly brackets",
      "c. parantheses",
      "d. square brackets",
    ],
    correct: "c. parantheses",
  },

  {
    question: "Arrays in Javascript can be used to store ___________.",
    answers: [
      "a. other arrays",
      "b. numbers and strings",
      "c. booleans",
      "d. all of the above",
    ],
    correct: "d. all of the above",
  },
  {
    question: "What encompasses an array?",
    answers: ["a. ()", "b. []", "c. //", "d. {}"],
    correct: "b. []",
  },
  {
    question: "What does a Boolean return?",
    answers: ["a. true/false", "b. 0", "c. null ", "d. undefined"],
    correct: "a. true/false",
  },
  {
    question: "What number value does an Index start with",
    answers: ["a. 1", "b. i", "c. 0", "d. -1"],
    correct: "c. 0",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["a. <js>", "b. <scripting>", "c. <script>", "d. <javascript>"],
    correct: "c. <script>",
  },
  {
    question: "How do we create a function in JavaScript?",
    answers: [
      "a. function:myFunction()",
      "b. function myFunction[]",
      "c. function = myFunction()",
      "d. function myFunction()",
    ],
    correct: "d. function myFunction()",
  },
  {
    question: "How does a FOR loop start?",
    answers: [
      "a. for i = 1 to 5",
      "b. for (i = 0; i <= 5; i++)",
      "c. for (i = 0; i <= 5)",
      "d. for (i <= 5; i++)",
    ],
    correct: "b. for (i = 0; i <= 5; i++)",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answers: ["a. =", "b. X", "c. *", "d. -"],
    correct: "a. =",
  },
];

//DOM ELEMENTS
// <-- getElementById -->

var startButton = document.getElementById("start-button");
var countDownTimer = document.getElementById("timer");
var keepScore = document.getElementById("score");
var quizQuestions = document.getElementById("questions");
var title = document.getElementById("title");
var instructions = document.getElementById("instructions");
var highScore = document.getElementById("high-score");

// <-- createElement -->

var questionEl = document.createElement("h1");
var answersDiv = document.createElement("div");
var gameTitle = document.createElement("h1");
var gameInstructions = document.createElement("div");

// <-- Variables -->

var currentIndex = 0;
var timeLeft = 60;
var numCorrect = [];
var timerClass;
var highScoresArray = [];

// <--Start Screen and Replay Intro and Instrutions -->

gameIntro();

function gameIntro() {
  console.log("HELLO WORLD");
  gameTitle.textContent = "Coding Quiz Challenge";
  title.append(gameTitle);
  gameInstructions.textContent =
    "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your Time by 10 seconds! ";
  instructions.append(gameInstructions);
}

// <-- Timer -->

function clock() {
    timerClass = setInterval(function () {
        countDownTimer.textContent = timeLeft;
        timeLeft--;
        if (timeLeft === 0 || timeLeft <= 0) {
            timeLeft = 0;
            countDownTimer.textContent = timeLeft;
            clearInterval(timerClass);
            timesUp();
        }
        return;
    }, 1000);
    displayQuestion();
}

// <-- Question and Answer Display -->

function displayQuestion() {
  var currentQuestion = arrayOfQuestions[currentIndex];
  questionEl.innerHTML = "";
  questionEl.textContent = currentQuestion.question;
  quizQuestions.append(questionEl);

  answersDiv.innerHTML = "";

  for (var i = 0; i < currentQuestion.answers.length; i++) {
    var answerBtn = document.createElement("button");
    answerBtn.textContent = currentQuestion.answers[i];
    answerBtn.setAttribute("value", currentQuestion.answers[i]);

    answerBtn.onclick = evaluateAnswer;
    answersDiv.append(answerBtn);
  }
  quizQuestions.append(answersDiv);
}

// <-- Evaluate Correct Answer -->

function evaluateAnswer() {
  console.log(this.value);
  if (this.value !== arrayOfQuestions[currentIndex].correct) {
    console.log("wrong");
    timeLeft -= 10;
    if (timeLeft <= 0) {
      timeLeft = 0;
      timesUp();
    }
  } else {
    console.log("right");
    numCorrect.push(arrayOfQuestions[currentIndex]);
    keepScore.textContent = numCorrect.length * 10;
  }
  currentIndex++;
  if (currentIndex === arrayOfQuestions.length) {
    timesUp();
  } else {
    displayQuestion();
  }
}

// <-- Start Button -->

startButton.addEventListener("click", function () {
  startButton.style.display = "none";
  gameTitle.innerHTML = "";
  gameInstructions.innerHTML = "";
  clock();
});

// <-- Times Up Screen -->

function timesUp() {
  questionEl.innerHTML = "";
  answersDiv.innerHTML = "";
  gameTitle.textContent = "All Done!!!";
  gameInstructions.textContent = "Your final score is " + keepScore.textContent + ".";
  highScoresArray.push(keepScore.textContent);
  console.log(highScoresArray)
  title.append(gameTitle);
  instructions.append(gameInstructions);
  console.log(keepScore);
  highScores();
}

// <-- High Scores -->

function highScores() {
    console.log("YOUR SCORES ARE HERE");
}

