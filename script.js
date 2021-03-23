var arrayOfQuestions = [
  {
    question: "Commonly used data types DO NOT include: ",
    answers: [
      {text: "alerts", correct: true },
      { text: "booleans", correct: false },
      { text: "numbers", correct: false },
      { text: "strings", correct: false },
  ]
  },
  
  {
      question: "The condition in an if / else statement is enclosed within _______.",
      answers: [
          { text: "parantheses", correct: false },
          { text: "qutoes", correct: false },
          { text: "curly brackets", correct: true },
          {text: "square brackets", correct: false },
      ],
  },

  {
      question: "Arrays in Javascript can be used to store ___________.",
      answers: [ 
          { text: "other arrays", correct: false },
          { text: "numbers and strings", correct: false },
          { text: "booleans", correct: false},
          { text: "all of the above", correct: true },

      ],
  },
];


//DOM ELEMENTS
var startButton = document.getElementById("start-button");
var countDownTimer = document.getElementById("timer");
var keepScore = document.getElementById("score");
var quizQuestions = document.getElementById("questions")
var currentIndex = 0

function displayQuestion() {
    var questionEl = document.createElement("h1");
    var currentQuestion=arrayOfQuestions[currentIndex]
    questionEl.textContent = currentQuestion.question;
    quizQuestions.append(questionEl);
    // console.log(questionEl);

    var answersDiv = document.createElement("div");
    
    for (let i=0; i<currentQuestion.answers.length; i++){
        var answerBtn = document.createElement("button");
        answerBtn.textContent = currentQuestion.answers[i].text;
        answersDiv.append(answerBtn);
    }

    quizQuestions.append(answersDiv);
    // console.log(answersEl);
}


startButton.addEventListener("click", function () {
    console.log("You clicked the start button");
    if (currentIndex < arrayOfQuestions.length) {
        currentIndex++;
    } else {
        return;
    }
    displayQuestion();
}
);


// function startGame() {
//   console.log("start the game");
  //start timer
  // startTimer()
  // hide the instuctions
  //hideInstructions()
  //show the first questions

